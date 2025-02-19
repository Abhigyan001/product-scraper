require 'rails_helper'

RSpec.describe UpdateProductJob, type: :job do
  let(:category) { FactoryBot.create(:category) }
  let!(:product) { FactoryBot.create(:product, category: category, updated_at: 2.weeks.ago) }

  it "updates outdated products" do
    expect {
      UpdateProductJob.perform_now(product.id)
      product.reload
    }.to change { product.updated_at }
  end
end
