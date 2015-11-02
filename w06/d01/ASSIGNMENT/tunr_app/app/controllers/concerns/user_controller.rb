class UserController < ApplicationController

def new
  @user = User.new
end

def create
  @user = User.new user_params
  if @user.save
    redirect_to @user
  else
    redirect_to new_users_path
end
def destroy
@user = User.find(params[:id])
@user.destroy
redirect_to new_users_path
end

def index
@user = User.all
end

end
