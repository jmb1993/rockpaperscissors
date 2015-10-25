require 'time'
require 'pry'
require_relative "../modules/spotify.rb"
require_relative "../modules/volume_controls.rb"

class Alarm

  attr_accessor :wake
  include SpotifyControls
  include VolumeControls

  def initialize wake
    @wake = wake
  end

  def sound_alarm
    %x[#{set_max_volume}]
    %x[#{launch}]
    sleep 5
    %x[#{press_play}]
    sleep 60
    %x[#{set_min_volume}]
  end

  def wait
    waiting_period = Time.parse(@wake) - Time.now
    sleep waiting_period
    sound_alarm
  end

end
