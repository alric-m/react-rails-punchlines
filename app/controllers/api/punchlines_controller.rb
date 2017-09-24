class Api::PunchlinesController < ApplicationController

  def show
    @punchline = Punchline.find(params[:id])
  end

end
