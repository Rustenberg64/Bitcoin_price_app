class AddIndexToBitcoinPrices < ActiveRecord::Migration[7.0]
  def change
    add_index :bitcoin_prices, :requested_at
  end
end
