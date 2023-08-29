FactoryBot.define do
  factory :bitcoin_price do
    exchange_type { 'BTC_JPY' }
    place { 'Somewhere' }
    requested_at { '2023-08-28T13:50:40+09:00' }
    ask { 0 }
    bid { 1 }
    ltp { 2 }
  end
end
