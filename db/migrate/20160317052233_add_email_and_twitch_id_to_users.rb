class AddEmailAndTwitchIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :email, :string
    add_column :users, :twitch_id, :string
  end
end
