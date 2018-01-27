class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

     if @user
       login(@user)
       render json: @user.username
     else
       render json: @user.errors.full_messages
     end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: "unsuccessful logout"
    end
  end
end
