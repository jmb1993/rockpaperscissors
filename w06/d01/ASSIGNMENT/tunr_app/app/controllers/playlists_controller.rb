class PlaylistsController < ApplicationController

  def index
    @playlists = Playlist.all
  end

  def show
    @playlist = playlist.find(params[:id])
    @songs = Song.all
  end

  def new
    @playlist = Playlist.new
  end

  def create
    @playlist = Playlist.new playlist_params
    if playlist.save
      redirect_to @playlist
    else
      redirect_to new_playlist_path
  end

def edit
@playlist = Playlist.find(params[:id])
end

def update
@playlist = Playlist.find(params[:id])
@playlist.update playlist_params
redirect_to @playlist
end

def destroy
@playlist = Playlist.find(params[:id])
@playlist.destroy
end



def add_song
  playlist = playlist.find(params[:id])
song = song.find(params[:song_id])
playlist.add_song(@22song)
redirect_to @playlist
end

def remove_song
  playlist = playlist.find(params[:id])
song = song.find(params[:song_id])
playlist.remove_song(@22song)
redirect_to @playlist
end

end
