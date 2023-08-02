class BitcoinPrice < ApplicationRecord

  def self.USDJPY
    @USDJPY
  end

  def self.USDJPY=(value)
    @USDJPY = value
  end
end
