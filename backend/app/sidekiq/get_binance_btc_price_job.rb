# BinanceのAPIからBitcoinの価格を1分単位で取得し、DBに保存
class GetBinanceBtcPriceJob
  include Sidekiq::Job
  sidekiq_options retry: false
  require 'net/http'
  include UserHelper

  def fetch_binance_api
    response1 = JSON.parse(Net::HTTP.get(URI.parse('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')))
    response2 = JSON.parse(Net::HTTP.get(URI.parse('https://api.binance.com/api/v3/ticker/bookTicker?symbol=BTCUSDT')))
    [response1, response2]
  end

  def perform
    res = fetch_binance_api
    usdjpy = ExchangeRate.last.rate
    binance = { exchange_type: 'BTC_JPY', place: 'Binance', requested_at: date_floor_sec, ask: (res[1]['askPrice'].to_f * usdjpy),
                bid: (res[1]['bidPrice'].to_f * usdjpy), ltp: (res[0]['price'].to_f * usdjpy) }
    BitcoinPrice.create(binance)
  end
end
