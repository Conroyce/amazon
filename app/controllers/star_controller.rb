class StarController < ApplicationController
  before_action :set_star, only: [:show,:edit,:update,:destroy]

  def index
    @stars = Star.all
    render json: @stars
  end  

  def show
    render json: @star
  end  

  def create
    binding.pry
    @star = Star.new(star_params) 
  end

  def edit
  end

  def update
  end

  def destroy
  end  

  private
  def set_star
    @star = Star.find(params[:id])
  end  

  def star_params
    params.require(:star).permit(:rating,:item_id)
  end  
end
