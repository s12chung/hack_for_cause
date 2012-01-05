ActiveAdmin.register AdminUser do
  controller do
    before_filter :authenticate
    def authenticate
      unless current_admin_user.edit_users
        redirect_to admin_dashboard_path
      end
    end

    before_filter :check_password, :only => :update
    def check_password
      new_password = params[:admin_user][:password]
      if new_password && new_password.empty?
        params['admin_user'].delete 'password'
      end
    end
  end

  menu :if => proc{ current_admin_user.edit_users }

  filter :id
  filter :email
  filter :edit_users
  filter :reset_password_sent_at
  filter :last_sign_in_at
  filter :last_sign_in_ip
  filter :created_at
  filter :updated_at

  index do
    column :id
    column :email
    column :edit_users
    column :reset_password_sent_at
    column :last_sign_in_at
    column :last_sign_in_ip
    column :created_at
    column :updated_at
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :email
      f.input :password
      f.input :edit_users
    end
    f.buttons
  end
end