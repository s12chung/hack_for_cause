class Campaign < ActiveRecord::Base
  def html_id
    "campaign_#{id}"
  end
end
