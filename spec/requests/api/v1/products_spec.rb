require 'rails_helper'

RSpec.describe "Products API", type: :request do
  let!(:category) { FactoryBot.create(:category) }
  let!(:product) { FactoryBot.create(:product, category: category) }

  describe "GET /api/v1/products" do
    before { get "/api/v1/products" }

    it "returns a list of products" do
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body).size).to eq(1)
    end
  end

  describe "POST /api/v1/products" do
    let(:valid_attributes) { { title: "New Product", price: 49.99, url: "https://example.com", category_id: category.id } }

    it "creates a new product" do
      expect {
        post "/api/v1/products", params: valid_attributes
      }.to change(Product, :count).by(1)
    end
  end
end
