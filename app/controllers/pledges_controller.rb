class PledgesController < ApplicationController
  def index
    @pledge = Pledge.new
  end

  def create
    PledgeMailer.pledge_link(Pledge.create(params[:pledge])).deliver
  end
end
