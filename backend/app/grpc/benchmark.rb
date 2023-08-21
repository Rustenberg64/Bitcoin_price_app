require "grpc"
require_relative "bitcoin_info_services_pb"
require 'benchmark'
require 'net/http'

Benchmark.bmbm do |x|
  hostname = 'localhost:50051'
  stub = BitcoinInfo::SearchPrice::Stub.new(hostname, :this_channel_is_insecure)
  x.report("gRPC") do
    message = stub.get_prices(BitcoinInfo::PriceRequest.new(place: "Coincheck", date_from: "2023-08-18T23:02:00+09:00", date_to: "2024-08-20T23:02:00+09:00", interval: 1))    # p message
    # puts message
  end

  url = URI.parse('http://localhost:3000/api/v1/bitcoin_prices?place=Coincheck&from=2023-07-01T12:34:56%2B09:00&to=2024-08-31T12:34:56%2B09:00&interval=1')
  x.report('JSON') do
    response = JSON.parse(Net::HTTP.get(url))
    # puts response
  end
end

# records = (1..10_000).map do
#   {exchange_type: "BTC_JPY",  place: "Coincheck", requested_at: Time.current, ask: 3812194,bid: 3810946,ltp: 3812498,}
# end
# BitcoinPrice.insert_all records
