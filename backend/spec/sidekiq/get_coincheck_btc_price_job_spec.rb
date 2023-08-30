require 'rails_helper'
RSpec.describe GetCoincheckBtcPriceJob, type: :job do
  it 'succeed with right url' do
    job = described_class.new
    expect(job.perform).to be_truthy
  end
end
