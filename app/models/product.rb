class Product < ApplicationRecord
  belongs_to :category
  validates :title, :price, :url, presence: true

  scope :outdated, -> { where("updated_at <= ?", 1.week.ago) }

  def needs_refresh?
    updated_at <= 1.week.ago
  end
end
