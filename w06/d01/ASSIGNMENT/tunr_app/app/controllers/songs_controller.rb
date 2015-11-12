class SongsController < ApplicationController
<<<<<<< HEAD

  def index
    @songs = Song.all
  end

  def show
  @song = Song.find(params[:id])
  end

  def new
@song = Song.new
@artists = Artist.all
  end

  def create
@song = Song.new song_params
if @song.save
  redirect_to @song
else
  render new_song_path
  end

  def edit
@song = Song.find(params[:id])
  end

  def update
    @song = Song.find(params[:id])
if @song.update_attributes(song_params)
  redirect_to song_url(@song)
  flash.notice = "Artist '#{@artist.name}' updated"
else
 render :edit
  end
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    redirect_to songs_path
  end


  private

  def song_params
    params.require(:song).permit(:title, :string, :album, :preview_url, :artwork, :price, :artist_id)
  end


=======
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
>>>>>>> eb608d0103fe5cfb50e954268c151c3383a88279
end
