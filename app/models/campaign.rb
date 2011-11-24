class Campaign < ActiveRecord::Base
  has_many :campaign

  def html_id
    "campaign_#{id}"
  end
end
