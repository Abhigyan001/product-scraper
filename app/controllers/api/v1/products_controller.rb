module Api
  module V1
    class ProductsController < ApplicationController
      before_action :set_product, only: [:show, :update]

      def index
        @products = Product.all

        @products.outdated.each do |product|
          UpdateProductJob.perform_later(product.id)
        end

        render json: @products, include: :category
      end

      def show
        render json: @product, include: :category
      end

      def create
        @product = ScraperService.scrape(params[:url])
        if @product.persisted?
          render json: @product, status: :created
        else
          render json: { error: 'Failed to scrape product' }, status: :unprocessable_entity
        end
      end

      def update
        ScraperService.scrape(@product.url, force_update: true)
        render json: @product.reload
      end

      private

      def set_product
        @product = Product.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        render json: { error: 'Product not found' }, status: :not_found
      end
    end
  end
end
