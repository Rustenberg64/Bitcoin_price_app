# 外部APIから取得したBitcoinの1分間隔の価格データを保存する
# APIがこのアプリに呼び出された際はこのモデルを通じてデータを取得する
class BitcoinPrice < ApplicationRecord
  class << self
    # from, toはiso8601の表記で入れる
    # intervalの単位はminute
    def select_bitcoin_prices(place:, from:, to:, interval:)
      interval = interval&.to_i || interval
      from = to_floor_sec_date(from)
      to = to_floor_sec_date(to)
      self
        .select(:id, :place, :requested_at, :ltp)
        .where("place = ?", place)
        .where(requested_at: from..to)
        .where("EXTRACT(MINUTE FROM requested_at) % ?  = 0", interval)
        .order("requested_at ASC")
    end

    private

    def to_floor_sec_date(str)
      date = Time.iso8601(str).floor
      date - date.sec
    end
  end
end
