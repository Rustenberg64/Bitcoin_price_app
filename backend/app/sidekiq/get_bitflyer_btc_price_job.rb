class GetBitflyerBtcPriceJob
  include Sidekiq::Job
  require 'net/http'

  def perform(*_args)
    response = JSON.parse(Net::HTTP.get(URI.parse('https://api.bitflyer.com/v1/ticker?product_code=BTC_JPY')))
    bitflyer = { exchange_type: 'BTC_JPY', place: 'bitflyer', requested_at: Time.parse(response['timestamp']), ask: response['best_ask'],
                 bid: response['best_bid'], ltp: response['ltp'] }
    BitcoinPrice.create(bitflyer)
  end
end
