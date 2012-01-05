class AddEditUsersToAdminUsers < ActiveRecord::Migration
  def change
    add_column :admin_users, :edit_users, :boolean
  end
end
