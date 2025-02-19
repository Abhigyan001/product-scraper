require 'rails_helper'

RSpec.describe Product, type: :model do
  let(:category) { FactoryBot.create(:category) }
  let(:product) { FactoryBot.create(:product, category: category) }

  it "is valid with valid attributes" do
    expect(product).to be_valid
  end

  it "is invalid without a title" do
    product.title = nil
    expect(product).not_to be_valid
  end

  it "is invalid without a price" do
    product.price = nil
    expect(product).not_to be_valid
  end

  it "detects outdated products" do
    product.update(updated_at: 2.weeks.ago)
    expect(product.needs_refresh?).to be true
  end
end
