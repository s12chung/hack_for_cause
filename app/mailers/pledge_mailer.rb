class PledgeMailer < ActionMailer::Base
  default from: "hackforacause@freethechildren.com"

  def pledge_link(pledge)
    @pledge = pledge
    mail :to => pledge.email, :subject => "Thanks for giving your pledge!"
  end
end
