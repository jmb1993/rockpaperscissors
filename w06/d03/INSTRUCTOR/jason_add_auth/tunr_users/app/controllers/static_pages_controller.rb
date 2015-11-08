class StaticPagesController < ApplicationController
  skip_before_action :authenticate

  def index
  end

  def about
  end

  def contact
  end
end
