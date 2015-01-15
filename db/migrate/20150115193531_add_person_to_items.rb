class AddPersonToItems < ActiveRecord::Migration
  def change
    add_column :items, :person, :string
  end
end
