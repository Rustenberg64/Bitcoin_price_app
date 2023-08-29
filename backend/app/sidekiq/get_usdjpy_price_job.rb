# Alpha VantageのAPIからUSDtoJPYを20分単位で取得し、DBに保存
class GetUsdjpyPriceJob
  include Sidekiq::Job
  sidekiq_options retry: false
  require 'net/http'

  def perform
    # apikeyとして、UO0K9W1HX8Q6GJ2Bも利用可能
    response = JSON.parse(Net::HTTP.get(URI.parse('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=1BFXW8SN5N7RZG7B')))
    usdjpy = { exchange_type: 'USD_JPY', place: 'Alpha Vantage', rate: response['Realtime Currency Exchange Rate']['5. Exchange Rate'].to_f }
    ExchangeRate.create(usdjpy)
  end
end
