class PledgesController < ApplicationController
  def index
    @pledge = Pledge.new
  end

  def create
    PledgeMailer.pledge_link(Pledge.create(params[:pledge].merge('key' => SecureRandom.urlsafe_base64))).deliver
  end

  def email
    @pledge = Pledge.find(params[:pledge_id])
    render :template => "pledge_mailer/pledge_link"
  end
end
