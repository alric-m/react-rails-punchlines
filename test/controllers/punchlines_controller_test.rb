require 'test_helper'

class PunchlinesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get punchlines_show_url
    assert_response :success
  end

end
