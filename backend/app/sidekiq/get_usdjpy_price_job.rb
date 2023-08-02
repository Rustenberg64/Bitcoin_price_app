class GetUsdjpyPriceJob
  include Sidekiq::Job
  require 'net/http'

  def perform(*_args)
    response = JSON.parse(Net::HTTP.get(URI.parse('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=UO0K9W1HX8Q6GJ2B')))
    BitcoinPrice.USDJPY = response['Realtime Currency Exchange Rate']['5. Exchange Rate'].to_f
  end
end
