class GetCoincheckBtcPriceJob
  include Sidekiq::Job
  require 'net/http'
  include UserHelper
  # Time.at(response['timestamp'])

  def perform(*_args)
    response = JSON.parse(Net::HTTP.get(URI.parse('https://coincheck.com/api/ticker?pair=btc_jpy')))
    coincheck = { exchange_type: 'BTC_JPY', place: 'Coincheck', requested_at: floor_sec, ask: response['ask'],
                  bid: response['bid'], ltp: response['last'] }
    BitcoinPrice.create(coincheck)
  end
end

