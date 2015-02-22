class CreateStars < ActiveRecord::Migration
  def change
    create_table :stars do |t|
      t.integer :rating
      t.integer :item_id

      t.timestamps
    end
  end
end
