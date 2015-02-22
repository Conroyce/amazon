# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Item.all.each do |item|
  item.destroy
end

Item.create(name: "Angular Book", description: "Favorite book about Angular", price: 10, quantity: 50, url: "https://www.ng-book.com/images/flatbook-ngbook-small.png")
Item.create(name: "Leather Jacket", description: "Genuine leather. Not fake.", price: 100, quantity: 100, url: "http://images.leatherup.com/images/product/large/XS-151-300-1.jpg")
Item.create(name: "Snuggie", description: "This will literally change your life.", price: 30, quantity: 200, url: "http://cdn01.dailycaller.com/wp-content/uploads/2013/06/wholesale-20pcs-New-Snuggie-Blanket-Robe-As-Seen-On-TV.jpg")
Item.create(name: "iPhone", description: "Let it consume your soul.", price: 600, quantity: 55, url: "http://www.att.com/wireless/iphone/assets/iphone-4s-devices.jpg?01AD=3WR1bTwXJOUbBYO4e6srWuCVneeUegYKOHWyWA-ApfvQL_SEULOiw3w&01RI=DD18841E62043BC&01NA=")
Item.create(name: "Hoverboard", description: "Mostly Functioning Hoverboard. Sold AS IS.", price: 20000, quantity: 5, url: "http://www.danshapiro.com/blog/wp-content/uploads/2011/07/Hoverboard.png")
Item.create(name: "Ferrari FXX K", description: "Very Fast", price: 2947237, quantity:2, url: "http://auto.ferrari.com/en_EN/wp-content/uploads/sites/5/2014/12/141202_Ferrari-FXXK33108.jpg")
Item.create(name: "Dog Hoodie", description: "Keep your pooch warm and cozy while boosting his street cred with the dog hoodie.", price: 27, quantity: 40, url: "http://www.bigdog-boutique.com/uploads/4/5/5/3/4553116/3841148_orig.jpg")