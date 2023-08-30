# 渡されたパラメータに対応するBitcoinの価格一覧をJSON形式で返す
class BitcoinPricesV1Controller < ApplicationController
  before_action :check_params

  def get
    ## api_paramsをキーワード変数として渡すためにハッシュに変換している
    price = BitcoinPrice.select_bitcoin_prices(**api_params.to_hash.symbolize_keys)
    render json: price
  end

  private

  REGEXP_ISO8601 =
    /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+]\d{2}:\d{2}/

  def api_params
    params.permit(:place, :from, :to, :interval)
  end

  # 与えられたparamsが条件を満たさない場合、すべてのエラーメッセージを表示する
  def check_params
    message = {}
    message["error_1"] = check_place_param
    message["error_2"] = check_from_param
    message["error_3"] = check_to_param
    message["error_4"] = check_interval_param
    # エラーメッセージに含まないようにhashのvalueがnullになっているものを取り除く
    message.compact!
    render json: message, status: :bad_request unless message.empty?
  end

  def check_place_param
    places = %w[Binance Coincheck bitFlyer]
    'invalid place param' unless places.find { |place| params[:place] == place }
  end

  def check_from_param
    'invalid from param' unless params[:from]&.match?(REGEXP_ISO8601)
  end

  def check_to_param
    'invalid to param' unless params[:to]&.match?(REGEXP_ISO8601)
  end

  def check_interval_param
    'invalid interval param' if !params[:interval] || params[:interval].to_i <= 0
  end
end
