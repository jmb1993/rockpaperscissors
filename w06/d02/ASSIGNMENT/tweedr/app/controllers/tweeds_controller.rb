class TweedsController < ApplicationController
  class ArtistsController < ApplicationController

      def index
          @tweeds = Tweed.all
      end

      def show
          @tweed = Tweed.find(params[:id])
      end

      def new
          @tweed = Tweed.new
      end

      def create
          @tweed = Tweed.new(tweed_params)
          if @tweed.save
          redirect_to @tweed
        else
          redirect_to new_tweed_path
          end
      end

      def edit
          @tweed = Tweed.find(params[:id])
      end

      def update
          @tweed = Tweed.find(params[:id])
          @tweed.update(tweed_params)
          flash.notice = "tweed updated."
          redirect_to tweed_path(@tweed)
      end

      def destroy
          @tweed = Tweed.find(params[:id])
          @tweed.destroy
          flash.notice = "Tweed destroyed"
          redirect_to tweed_path
      end

  
  end
