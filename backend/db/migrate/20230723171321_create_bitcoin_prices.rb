class CreateBitcoinPrices < ActiveRecord::Migration[7.0]
  def change
    create_table :bitcoin_prices do |t|
      t.string :exchange_type
      t.string :place
      t.datetime :requested_at
      t.integer :ask
      t.integer :bid
      t.integer :ltp

      t.timestamps
    end
  end
end
