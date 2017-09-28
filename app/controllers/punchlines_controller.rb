class PunchlinesController < ApplicationController
  def index
    @first_punchline_id = Punchline.first.id
  end
end
