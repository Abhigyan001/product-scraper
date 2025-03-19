class UpdateProductJob < ApplicationJob
  queue_as :default

  def perform(product_id)
    product = Product.find_by(id: product_id)
    return unless product&.needs_refresh?

    scraped_data = ScraperService.scrape(product.url)

    if scraped_data
      product.update(
        title:     scraped_data[:title],
        price:     scraped_data[:price],
        rating:    scraped_data[:rating],
        image_url: scraped_data[:image_url],
        updated_at: Time.current
      )
    end
  end
end
