# bitFlyerのAPIからBitcoinの価格を1分単位で取得し、DBに保存
class GetBitflyerBtcPriceJob
  include Sidekiq::Job
  sidekiq_options retry: false
  require 'net/http'
  include UserHelper
  # Time.zone.parse(response['timestamp'])

  def perform
    response = JSON.parse(Net::HTTP.get(URI.parse('https://api.bitflyer.com/v1/ticker?product_code=BTC_JPY')))
    bitflyer = { exchange_type: 'BTC_JPY', place: 'bitFlyer', requested_at: date_floor_sec, ask: response['best_ask'],
                 bid: response['best_bid'], ltp: response['ltp'] }
    BitcoinPrice.create!(bitflyer)
  end
end
