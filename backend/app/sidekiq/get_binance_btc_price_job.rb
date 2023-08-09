class GetBinanceBtcPriceJob
  include Sidekiq::Job
  require 'net/http'
  include UserHelper

  def perform(*_args)
    # BitcoinPrice.USDJPY = 138
    response1 = JSON.parse(Net::HTTP.get(URI.parse('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')))
    response2 = JSON.parse(Net::HTTP.get(URI.parse('https://api.binance.com/api/v3/ticker/bookTicker?symbol=BTCUSDT')))
    binance = { exchange_type: 'BTC_JPY', place: 'binance', requested_at: floor_sec, ask: (response2['askPrice'].to_f * BitcoinPrice.USDJPY),
                bid: (response2['bidPrice'].to_f * BitcoinPrice.USDJPY), ltp: (response1['price'].to_f * BitcoinPrice.USDJPY) }
    BitcoinPrice.create(binance)
  end
end
