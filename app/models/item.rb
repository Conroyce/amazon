class Item < ActiveRecord::Base
  has_many :item_orders
  has_many :orders, through: :item_orders
end
