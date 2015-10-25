module VolumeControls

  def set_max_volume
    "osascript -e 'set volume 5'"
  end

  def set_min_volume
    "osascript -e 'set volume 1'"
  end

  def mute
    "osascript -e 'set volume 0'"
  end

end
