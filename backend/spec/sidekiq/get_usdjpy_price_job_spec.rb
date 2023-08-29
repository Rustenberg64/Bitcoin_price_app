require 'rails_helper'
RSpec.describe GetUsdjpyPriceJob, type: :job do
  it "succeed with right url" do
    job = GetUsdjpyPriceJob.new
    expect(job.perform).to be_truthy
  end
end
