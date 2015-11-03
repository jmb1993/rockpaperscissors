class ArtistController < ApplicationController

  def index
    @artists = Artist.all
  end

  def show
  @artist = Artist.find(params[:id])
  end

  def new
@artist = Artist.new
  end

  def create
@artist = Artist.new song_params
if @artist.save
  redirect_to @artist
else
  render new_artist_path
  end

  def edit
@artist = Artist.find(params[:id])
  end

  def update
    @artist = Artist.find(params[:id])
if @artist.update_attributes(artist_params)
  redirect_to artist_url(@artist)
else
 render :edit
  end
  end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy
    redirect_to new_artist_path
  end


  private

  def artist_params
    params.require(:artist).permit(:name, :nationality, :nationality, :image_url, :genre)
  end


end
