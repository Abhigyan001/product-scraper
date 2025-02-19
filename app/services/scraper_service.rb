class ScraperService
  require 'nokogiri'
  require 'httparty'

  def self.scrape(url, force_update: false)
    product = Product.find_by(url: url)

    if product && !force_update && product.updated_at > 1.week.ago
      return product
    end

    response = HTTParty.get(url)
    parsed_page = Nokogiri::HTML(response.body)

    title = parsed_page.at_css('span.VU-ZEz')&.text || 'Unknown Title'
    price = parsed_page.at_css('div.Nx9bqj')&.text&.gsub(/[^\d.]/, '')&.to_f || 0.0
    category_name = parsed_page.css('div.r2CdBx')[1]&.text || 'Unknown Category'
    image_url = parsed_page.at_css('img._0DkuPH')&.[]('src')
    rating = parsed_page.at_css('div.XQDdHH')&.text || 'No Reviews'

    category = Category.find_or_create_by(name: category_name)
    product ||= category.products.new(url: url)

    product.update(title: title, price: price, image_url: image_url, rating: rating)

    product
  end
end
