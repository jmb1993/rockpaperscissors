require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
  @user = User.new(username: "Will", email: "Will.Shaw@ga.co")
end

test "Should be vaild" do
  assert @user.valid?
end

test "User Name should be present" do
  @user.username = ""
  assert_not @user.valid?
end

test "Email should be present" do
  @user.email = ""
  assert_not @user.valid?
end

end
