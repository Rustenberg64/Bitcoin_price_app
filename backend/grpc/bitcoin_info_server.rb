require "grpc"
require_relative "bitcoin_info_services_pb"

# grpcのサーバー
class ServerImpl < BitcoinInfo::SearchPrice::Service
  def get_prices(req, _call)
    prices = BitcoinPrice.select_bitcoin_prices(place: req.place, from: req.date_from, to: req.date_to, interval: req.interval).to_a
    res = prices.map do |price|
      { id: price.id, place: price.place, requested_at: price.requested_at.iso8601, ltp: price.ltp }
    end
    res = { prices: res }
    BitcoinInfo::Prices.new(res)
  end
end

def main
  port = '0.0.0.0:50051'
  server = GRPC::RpcServer.new
  server.add_http2_port(port, :this_port_is_insecure)
  GRPC.logger.info("... running insecurely on #{port}")
  server.handle(ServerImpl)
  server.run_till_terminated_or_interrupted([1, 'int', 'SIGTERM'])
end

main
