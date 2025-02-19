class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.decimal :price, precision: 10, scale: 2, null: false
      t.decimal :rating, precision: 10, scale: 2, null: false
      t.string :url, null: false
      t.string :image_url
      t.references :category, foreign_key: true

      t.timestamps
    end
  end
end
