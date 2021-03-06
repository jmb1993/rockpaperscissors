class ArtistsController < ApplicationController

    def index
        @artists = Artist.all
        render :json => @artists
    end

    def show
        @artist = Artist.find(params[:id])
    end

    def new
        @artist = Artist.new
    end

    def create
        @artist = Artist.new(artist_params)
        if @artist.save
        redirect_to @artist
      else
        redirect_to new_artist_path
        end
    end

    def edit
        @artist = Artist.find(params[:id])
    end

    def update
        @artist = Artist.find(params[:id])
        @artist.update(artist_params)
        flash.notice = "Artist '#{@artist.name}' updated."
        redirect_to artist_path(@artist)
    end

    def destroy
        @artist = Artist.find(params[:id])
        @artist.destroy
        flash.notice = "Artist destroyed"
        redirect_to artists_path
    end

    private

    def artist_params
      params.require(:artist).permit(:name, :img_url, :nationality, :genre)
    end

end
