class BitcoinPricesV1Controller < ApplicationController

  def get
    # price = BitcoinPrice.get()
    price = BitcoinPrice.all
    render json: price
  end
end
