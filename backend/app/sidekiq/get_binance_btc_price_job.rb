class GetBinanceBtcPriceJob
  include Sidekiq::Job

  def perform(*_args)
    # BitcionPrice.USDJPY = 138
    response1 = JSON.parse(Net::HTTP.get(URI.parse('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')))
    response2 = JSON.parse(Net::HTTP.get(URI.parse('https://api.binance.com/api/v3/ticker/bookTicker?symbol=BTCUSDT')))
    binance = { exchange_type: 'BTC_JPY', place: 'binace', requested_at: Time.current, ask: (response2['askPrice'].to_f * BitcionPrice.USDJPY),
                bid: (response2['bidPrice'].to_f * BitcionPrice.USDJPY), ltp: (response1['price'].to_f * BitcionPrice.USDJPY) }
    BitcionPrice.create(binance)
  end
end
