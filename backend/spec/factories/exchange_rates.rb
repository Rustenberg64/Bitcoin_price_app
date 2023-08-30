FactoryBot.define do
  factory :exchange_rate do
    exchange_type { 'USD_JPY' }
    place { 'Anywhere' }
    rate { 140 }
  end
end
