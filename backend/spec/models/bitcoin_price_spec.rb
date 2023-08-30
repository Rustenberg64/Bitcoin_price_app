require 'rails_helper'

RSpec.describe BitcoinPrice, type: :model do
  context 'when it is valid value' do
    it 'is valid' do
      price = FactoryBot.build(:bitcoin_price)
      expect(price).to be_valid
    end
  end

  context 'when ltp column is not number' do
    it 'is invalid' do
      price = FactoryBot.build(:bitcoin_price, ltp: 'not number')
      expect(price).not_to be_valid
    end
  end

  context 'when ltp column is blank' do
    it 'is invalid when blank' do
      price = FactoryBot.build(:bitcoin_price, ltp: '')
      expect(price).not_to be_valid
    end

    it 'is invalid when nil' do
      price = FactoryBot.build(:bitcoin_price, ltp: nil)
      expect(price).not_to be_valid
    end
  end

  context 'when requested_at column is blank' do
    it 'is invalid when blank' do
      price = FactoryBot.build(:bitcoin_price, requested_at: '')
      expect(price).not_to be_valid
    end

    it 'is invalid when nil' do
      price = FactoryBot.build(:bitcoin_price, requested_at: nil)
      expect(price).not_to be_valid
    end
  end

  describe 'class method select_bitcoin_prices' do
    context 'when rigth params is given' do
      let!(:records) do
        dates = ['2023-08-20T13:50:00+09:00', '2023-08-21T13:50:00+09:00', '2023-08-23T11:50:00+09:00']
        dates.map do |date|
          FactoryBot.create(:bitcoin_price, requested_at: date)
        end
      end

      let!(:selected) do
        described_class.select_bitcoin_prices(place: 'Binance', from: '2023-08-20T13:50:00+09:00', to: '2023-08-21T13:50:00+09:00', interval: 1).to_a
      end

      # 配列datesの３つ目の値は範囲外のため、取り出さないことを確認する
      it 'return 2 records' do
        expect(selected.size).to eq 2
      end

      it 'return first 2 records' do
        2.times do |i|
          expect(selected[i].id).to eq records[i].id
        end
      end
    end
  end
end
