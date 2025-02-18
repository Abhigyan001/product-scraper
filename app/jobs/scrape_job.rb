class ScrapeJob < ApplicationJob
  queue_as :default

  def perform(product_id)
    product = Product.find_by(id: product_id)
    return unless product

    ScraperService.scrape(product.url, force_update: true)
  end
end
