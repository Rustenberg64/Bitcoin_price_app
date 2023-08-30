require 'rails_helper'
RSpec.describe GetBinanceBtcPriceJob, type: :job do
  it 'succeed with right url' do
    usdjpy = { exchange_type: 'USD_JPY', place: 'Alpha Vantage', rate: 140 }
    ExchangeRate.create(usdjpy)
    job = described_class.new
    expect(job.perform).to be_truthy
  end
end
