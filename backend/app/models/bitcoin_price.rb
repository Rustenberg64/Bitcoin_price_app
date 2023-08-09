class BitcoinPrice < ApplicationRecord
  class << self
    attr_accessor :USDJPY
  end

  # from, toはiso8601の表記で入れる
  # intervalの単位はminute
  # BitcoinPrice.get("coincheck", "2023-07-01T12:34:56+09:00", "2024-08-31T12:34:56+09:00",1)
  def self.get(place:, from:, to:, interval:)
    interval = interval&.to_i || interval
    from = Time.iso8601(from).floor
    from -= from.sec + (from.min % interval) * 60
    to = Time.iso8601(to).floor
    to -= to.sec + (to.min % interval) * 60
    self
      .select(:id, :place, :requested_at, :ltp)
      .where("place = ?", place)
      .where(requested_at: from..to)
      .where("EXTRACT(MINUTE FROM requested_at) % ?  = 0", interval)
  end
end
