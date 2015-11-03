require 'test_helper'

class SongTest < ActiveSupport::TestCase
<<<<<<< HEAD
  # test "the truth" do
  #   assert true
  # end
=======
  def setup
  @song = Song.new(title: "D-D-D-Danny! and the Jets", album: "Danny! His Greatest Hits", preview_url: "www.google.com", artwork: "album artwork", price: 20)
end

test "should be valid"do
  assert @song.valid?
end

test "should have a title" do
  @song.title = " "
  assert_not @song.valid?
end

test "should have an album" do
  @song.album = " "
  assert_not @song.valid?
end

test "should have preview picture" do
  @song.preview_url = " "
  assert_not @song.valid?
end

test "should have artwork" do
  @song.artwork = " "
  assert_not @song.valid?
end

test "price is a number" do
  @song.price = "a"
  assert_not @song.valid?
end

test "price is between 1 and 99" do
  @song.price = 100
  assert_not @song.valid?
end
>>>>>>> b8df6e0fc0962b9f0e37026ab8b43a3dd577414c
end
