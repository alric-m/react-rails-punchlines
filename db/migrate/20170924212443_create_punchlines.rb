class CreatePunchlines < ActiveRecord::Migration[5.1]
  def change
    create_table :punchlines do |t|
      t.string :text
      t.string :author
      t.string :album
      t.string :song

      t.timestamps
    end
  end
end
