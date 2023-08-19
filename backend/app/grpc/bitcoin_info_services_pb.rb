# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: bitcoin_info.proto for package 'bitcoin_info'

require 'grpc'
require 'bitcoin_info_pb'

module BitcoinInfo
  module SearchPrice
    class Service

      include ::GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'bitcoin_info.search_price'

      rpc :GetPrices, ::BitcoinInfo::PriceRequest, ::BitcoinInfo::Prices
    end

    Stub = Service.rpc_stub_class
  end
end
