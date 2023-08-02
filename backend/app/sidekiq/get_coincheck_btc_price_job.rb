class GetCoincheckBtcPriceJob
  include Sidekiq::Job
  require 'net/http'

  def perform(*_args)
    response = JSON.parse(Net::HTTP.get(URI.parse('https://coincheck.com/api/ticker?pair=btc_jpy')))
    coincheck = { exchange_type: 'BTC_JPY', place: 'coincheck', requested_at: Time.at(response['timestamp']), ask: response['ask'],
                  bid: response['bid'], ltp: response['last'] }
    BitcoinPrice.create(coincheck)
  end
end

