# Binanceで取得されるBitcoinはBTC/USDなので、BTC/JPYに変換するための値を保存
class ExchangeRate < ApplicationRecord
  validates :rate, presence: true
  validates :rate, numericality: true
end
