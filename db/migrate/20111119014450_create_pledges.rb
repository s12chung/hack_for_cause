class CreatePledges < ActiveRecord::Migration
  def change
    create_table :pledges do |t|
      t.string :full_name
      t.string :email
      t.float :amount

      t.float :lat
      t.float :long

      t.integer :time

      t.string :charity_name
      t.text :charity_text

      t.timestamps
    end
  end
end
