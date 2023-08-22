class BitcoinPricesV1Controller < ApplicationController
  wrap_parameters :bitcoin_price, include: [:place, :from, :to, :interval]
  def get
    # logger.debug api_params
    # logger.debug api_params.to_hash.symbolize_keys
    # price = BitcoinPrice.get(place: params[:place], from: params[:from], to: params[:to], interval: params[:interval])
    price = BitcoinPrice.get(**api_params.to_hash.symbolize_keys)
    render json: price
  end

  private

  def api_params
    params.permit(:place, :from, :to, :interval)
  end
end
