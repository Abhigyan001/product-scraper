require 'faker'

categories = []
10.times do
  categories << Category.create(name: Faker::Commerce.department)
end

20.times do
  category = categories.sample
  Product.create(
    title: Faker::Commerce.product_name,
    price: Faker::Commerce.price(range: 10..100.0, as_string: true),
    rating: Faker::Number.between(from: 1, to: 5).round(1),
    image_url: "https://picsum.photos/200/300?random=#{rand(1..100)}",
    url: Faker::Internet.url,
    category: category
  )
end

puts "Seeded #{categories.count} categories and #{Product.count} products."
