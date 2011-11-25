class PledgesController < ApplicationController
  def index
    @pledge = Pledge.new
  end

  def create
    PledgeMailer.pledge_link(Pledge.create(params[:pledge].merge('key' => SecureRandom.urlsafe_base64))).deliver
    render :nothing => true
  end

  def email
    @pledge = Pledge.find_by_key(params[:key])
    @campaign = @pledge.campaign
    render :template => "pledge_mailer/pledge_link"
  end
end
