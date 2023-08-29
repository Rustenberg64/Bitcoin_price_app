# CoincheckのAPIからBitcoinの価格を1分単位で取得し、DBに保存
class GetCoincheckBtcPriceJob
  include Sidekiq::Job
  sidekiq_options retry: false
  require 'net/http'
  include UserHelper
  # Time.at(response['timestamp'])

  def perform
    response = JSON.parse(Net::HTTP.get(URI.parse('https://coincheck.com/api/ticker?pair=btc_jpy')))
    coincheck = { exchange_type: 'BTC_JPY', place: 'Coincheck', requested_at: date_floor_sec, ask: response['ask'],
                  bid: response['bid'], ltp: response['last'] }
    BitcoinPrice.create!(coincheck)
  end
end
