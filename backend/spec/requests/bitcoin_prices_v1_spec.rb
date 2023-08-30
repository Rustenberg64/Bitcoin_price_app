require 'rails_helper'

RSpec.describe "BitcoinPricesV1s", type: :request do
  describe "GET /get" do
    before do
      dates = ['2023-08-20T13:50:00+09:00', '2023-08-21T13:50:00+09:00', '2023-08-23T11:50:00+09:00']
      @records = dates.map do |date|
        FactoryBot.create(:bitcoin_price, requested_at: date)
      end
    end

    context "when valid params is given" do
      it 'return json contain 2 record' do
        get api_v1_bitcoin_prices_path, params: {
          place: 'Binance',
          from: '2023-08-20T13:50:00+09:00',
          to: '2023-08-21T13:50:00+09:00',
          interval: 1
        }

        expect(response).to have_http_status(:success)
        json = JSON.parse(response.body)
        expect(json.length).to eq 2
        expect(json[0]['id']).to eq @records[0].id
        expect(json[1]['id']).to eq @records[1].id
      end
    end

    context "when invalid params is given" do
      it 'return 400 status when place is invalid' do
        get api_v1_bitcoin_prices_path, params: {
          place: 'abcd',
          from: '2023-08-20T13:50:00+09:00',
          to: '2023-08-21T13:50:00+09:00',
          interval: 1
        }

        expect(response).to have_http_status(:bad_request)
        json = JSON.parse(response.body)
        expect(json.length).to eq 1
      end

      it 'return 400 status when from is invalid' do
        get api_v1_bitcoin_prices_path, params: {
          place: 'Binance',
          from: '2023-08-20TTT13:50:00+09:00',
          to: '2023-08-21T13:50:00+09:00',
          interval: 1
        }

        expect(response).to have_http_status(:bad_request)
        json = JSON.parse(response.body)
        expect(json.length).to eq 1
      end

      it 'return 400 status when to is invalid' do
        get api_v1_bitcoin_prices_path, params: {
          place: 'Binance',
          from: '2023-08-20T13:50:00+09:00',
          to: '023-08-21T13:50:00+09:00',
          interval: 1
        }

        expect(response).to have_http_status(:bad_request)
        json = JSON.parse(response.body)
        expect(json.length).to eq 1
      end

      it 'return 400 status when interval is invalid' do
        get api_v1_bitcoin_prices_path, params: {
          place: 'Binance',
          from: '2023-08-20T13:50:00+09:00',
          to: '2023-08-21T13:50:00+09:00',
          interval: 0
        }

        expect(response).to have_http_status(:bad_request)
        json = JSON.parse(response.body)
        expect(json.length).to eq 1
      end
    end
  end
end
