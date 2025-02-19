FactoryBot.define do
  factory :product do
    title { "Test Product" }
    price { 99.99 }
    url { "https://example.com/product" }
    category
  end
end
