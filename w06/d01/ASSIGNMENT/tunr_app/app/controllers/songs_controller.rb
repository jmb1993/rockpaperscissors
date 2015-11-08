class SongsController < ApplicationController
  # index
    def index
       @songs = Song.all
       render :json => @songs
    end

    # create
    def create
       @song = Song.new(song_params)
       if @song.save
          redirect_to song_path(@song)
       else
          redirect_to new_song_path
       end
    end

    # new
    def new
       @artists = Artist.all
       @song = Song.new
    end

    # edit
    def edit
       @song = Song.find(params[:id])
       @artists = Artist.all
    end

    # show
    def show
       @song = Song.find(params[:id])
    end

    # update
    def update
       @song = Song.find(params[:id])
       @song.update(song_params)
       redirect_to @song
    end

    # destroy
    def destroy
       #destroy actions
       @song = Song.find(params[:id])
       @song.destroy
       redirect_to songs_path
    end

    private
    def song_params
       params.require(:song).permit(:title, :album, :preview_url, :artwork, :price, :artist_id)
    end
end
