class CreateExchangeRates < ActiveRecord::Migration[7.0]
  def change
    create_table :exchange_rates do |t|
      t.string :exchange_type
      t.string :place
      t.decimal :rate

      t.timestamps
    end
  end
end
