require 'rails_helper'

RSpec.describe "BitcoinPricesV1s", type: :request do
  describe "GET /get" do
    let!(:records) do
      dates = ['2023-08-20T13:50:00+09:00', '2023-08-21T13:50:00+09:00', '2023-08-23T11:50:00+09:00']
      dates.map do |date|
        FactoryBot.create(:bitcoin_price, requested_at: date)
      end
    end

    context "when valid params is given" do
      before do
        get api_v1_bitcoin_prices_path, params: {
          place: 'Binance',
          from: '2023-08-20T13:50:00+09:00',
          to: '2023-08-21T13:50:00+09:00',
          interval: 1
        }
      end

      it 'return 200 status' do
        expect(response).to have_http_status(:success)
      end

      it 'return json contain 2 record' do
        json = JSON.parse(response.body)
        expect(json.length).to eq 2
      end

      it 'correspond to first created record' do
        json = JSON.parse(response.body)
        expect(json[0]['id']).to eq records[0].id
      end

      it 'correspond to second created record' do
        json = JSON.parse(response.body)
        expect(json[1]['id']).to eq records[1].id
      end
    end

    context "when invalid place param is given" do
      before do
        get api_v1_bitcoin_prices_path, params: {
          place: 'abcd',
          from: '2023-08-20T13:50:00+09:00',
          to: '2023-08-21T13:50:00+09:00',
          interval: 1
        }
      end

      it 'return 400 status' do
        expect(response).to have_http_status(:bad_request)
      end

      it 'return 1 length json' do
        json = JSON.parse(response.body)
        expect(json.length).to eq 1
      end
    end

    context "when invalid from param is given" do
      before do
        get api_v1_bitcoin_prices_path, params: {
          place: 'Binance',
          from: '2023-08-20TTT13:50:00+09:00',
          to: '2023-08-21T13:50:00+09:00',
          interval: 1
        }
      end

      it 'return 400 status' do
        expect(response).to have_http_status(:bad_request)
      end

      it 'return 1 length json' do
        json = JSON.parse(response.body)
        expect(json.length).to eq 1
      end
    end

    context "when invalid to param is given" do
      before do
        get api_v1_bitcoin_prices_path, params: {
          place: 'Binance',
          from: '2023-08-20T13:50:00+09:00',
          to: '023-08-21T13:50:00+09:00',
          interval: 1
        }
      end

      it 'return 400 status' do
        expect(response).to have_http_status(:bad_request)
      end

      it 'return 1 length json' do
        json = JSON.parse(response.body)
        expect(json.length).to eq 1
      end
    end

    context "when invalid interval param is given" do
      before do
        get api_v1_bitcoin_prices_path, params: {
          place: 'Binance',
          from: '2023-08-20T13:50:00+09:00',
          to: '2023-08-21T13:50:00+09:00',
          interval: 0
        }
      end

      it 'return 400 status' do
        expect(response).to have_http_status(:bad_request)
      end

      it 'return 1 length json' do
        json = JSON.parse(response.body)
        expect(json.length).to eq 1
      end
    end
  end
end
