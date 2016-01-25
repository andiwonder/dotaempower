class FixNoteTypeColumnName < ActiveRecord::Migration
  def change
    rename_column :notes, :type, :main_category
  end
end
