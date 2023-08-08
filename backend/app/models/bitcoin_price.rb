class BitcoinPrice < ApplicationRecord

  def self.USDJPY
    @USDJPY
  end

  def self.USDJPY=(value)
    @USDJPY = value
  end

  def self.get(place, from, to, interval)
    self.where("place = ?", place)
    .where(requested_at: from..to)
    .where("requested_at % ? == 0", interval)
    .select(:place, :requested_at, :ltp)
  end
end
