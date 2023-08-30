require 'rails_helper'
RSpec.describe GetBitflyerBtcPriceJob, type: :job do
  it 'succeed with right url' do
    job = described_class.new
    expect(job.perform).to be_truthy
  end
end
