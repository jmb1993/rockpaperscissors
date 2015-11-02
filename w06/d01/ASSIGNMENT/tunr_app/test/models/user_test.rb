require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
  @user = User.new(name: 'James', email: "jamesb93@bu.edu", password: "bigpoop")
  end

  test 'Should be vaild' do
    asser @user.valid?
  end
  test "name should be present" do
    assert @user.name = ""
    assert_not @user.valid?
  end
  test "email should be present" do
    @user.email = ''
    asser_not @user.valid?
  end
test 'name should not be too long' do
@user.name = 'a'*51
asser_not @user.valid?
end

test 'email should not be too long' do
  @user.email = 'a'*244 + '@gmail.com'
  assert_not @user.valid?
end
test "email validation should accept valid addresses" do
    valid_addresses = %w[user@example.com USER@foo.com A_U_SER@foo.bar.org first.last@poop.com alice+bob@wdi.co]
    valid_addresses.each do |valid_address|
      @user.email = valid_address
      assert user.valid?
    end
  end

  test "email validation should reject bad email addresses" do
    invalid_addresses = %w[user@example,com user_at_poop.com user@example. foo@bar+baz.com]
    invalid_addresses.each do |invalid_address|
      @user.email = invalid_address
      assert_not @user.valid?
    end
  end
  test "email address should be unique" do
duplicate_user = @user.duplicate_user
@user.save
assert_not duplicate_user.valid?
  end
test "password should be non blank" do
  @user.password = @user.password_confirmation = " "* 6
  assert_not @user.valid?
end
test "password should have a minimum length" do
  @user.password = @user.password_confirmation = " "* 5
  assert_not @user.valid?
end


end
