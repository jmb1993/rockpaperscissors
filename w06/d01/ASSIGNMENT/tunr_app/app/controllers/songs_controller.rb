class SongsController < ApplicationController

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


end
