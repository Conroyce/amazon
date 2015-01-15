class CreateItemOrders < ActiveRecord::Migration
  def change
    create_table :item_orders do |t|
      t.belongs_to :item, index: true
      t.belongs_to :order, index: true
      
      t.timestamps
    end
  end
end
