class Order < ActiveRecord::Base
  has_many :item_orders
  has_many :items, through: :item_orders
end
