FactoryBot.define do
  factory :product do
    title { "Test Product" }
    price { 99.99 }
    rating { 4.5 }
    url { "https://example.com/product" }
    image_url { "https://example.com/image.jpg" }
    category
  end
end
