require "grpc"
require_relative "bitcoin_info_services_pb"

def main
  hostname = 'localhost:50051'
  stub = BitcoinInfo::SearchPrice::Stub.new(hostname, :this_channel_is_insecure)
  begin
    # message = stub.get_user(UserSearch::PersonRequest.new(name: ARGV[0] || ''))
    # # message = 'connected'
    # p "id: #{message.id}, name: #{message.name}, email: #{message.email}"

    message = stub.get_prices(BitcoinInfo::PriceRequest.new(place: "Coincheck", date_from: "2023-08-18T23:02:00+09:00", date_to: "2023-08-20T23:02:00+09:00", interval: 1))
    # p message
    p message
    # message = 'connected'
    # p "id: #{message.id}, name: #{message.name}, email: #{message.email}"

  rescue GRPC::BadStatus => e
    abort "Error: #{e.message}"
  end
end

main