class CreatePledges < ActiveRecord::Migration
  def change
    create_table :pledges do |t|
      t.integer :campaign_id

      t.string :full_name
      t.string :email
      t.float :amount

      t.float :lat
      t.float :long

      t.string :time
      t.string :key

      t.timestamps
    end
  end
end
