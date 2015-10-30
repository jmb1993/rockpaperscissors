class TeamController < ApplicationController

  def index
    @Teams = Team.all
  end

  def show
    @Team = Team.find params[:name]
  end

  def new
@Team = Team.new
  end

  def create
@Team = Team.new teams_params

if @Team.save
  redirect_to teams_path @Team
  else
  redirect_to :back

  end
  def destroy
@Team = Team.find params[:name]
@Team.destroy

redirect_to '/teams'
  end
end

end
