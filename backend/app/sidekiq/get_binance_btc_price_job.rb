class GetBinanceBtcPriceJob
  include Sidekiq::Job
  sidekiq_options retry: false
  require 'net/http'
  include UserHelper

  def perform(*_args)
    response1 = JSON.parse(Net::HTTP.get(URI.parse('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')))
    response2 = JSON.parse(Net::HTTP.get(URI.parse('https://api.binance.com/api/v3/ticker/bookTicker?symbol=BTCUSDT')))
    usdjpy = ExchangeRate.last.rate
    binance = { exchange_type: 'BTC_JPY', place: 'Binance', requested_at: floor_sec, ask: (response2['askPrice'].to_f * usdjpy),
                bid: (response2['bidPrice'].to_f * usdjpy), ltp: (response1['price'].to_f * usdjpy) }
    BitcoinPrice.create(binance)
  end
end
