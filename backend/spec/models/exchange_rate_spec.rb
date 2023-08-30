require 'rails_helper'

RSpec.describe ExchangeRate, type: :model do
  context 'when it is valid value' do
    it 'is valid' do
      price = FactoryBot.build(:exchange_rate)
      expect(price).to be_valid
    end
  end

  context 'when rate column is not number' do
    it 'is invalid' do
      price = FactoryBot.build(:exchange_rate, rate: 'not number')
      expect(price).not_to be_valid
    end
  end

  context 'when rate column is blank' do
    it 'is invalid when blank' do
      price = FactoryBot.build(:exchange_rate, rate: '')
      expect(price).not_to be_valid
    end

    it 'is invalid when nil' do
      price = FactoryBot.build(:exchange_rate, rate: nil)
      expect(price).not_to be_valid
    end
  end
end
