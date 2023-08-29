# 渡されたパラメータに対応するBitcoinの価格一覧をJSON形式で返す
class BitcoinPricesV1Controller < ApplicationController
  def get
    ## api_paramsをキーワード変数として渡すためにハッシュに変換している
    price = BitcoinPrice.select_bitcoin_prices(**api_params.to_hash.symbolize_keys)
    render json: price
  end

  private

  def api_params
    params.permit(:place, :from, :to, :interval)
  end
end
