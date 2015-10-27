module SpotifyControls

  def launch
    "osascript -e 'tell application \"Spotify\" to launch'"
  end

  def quit
    "osascript -e 'tell application \"Spotify\" to quit'"
  end

  def press_play
    "osascript -e 'tell application \"Spotify\" to play'"
  end

  def pause
    "osascript -e 'tell application \"Spotify\" to playpause'"
  end
end
