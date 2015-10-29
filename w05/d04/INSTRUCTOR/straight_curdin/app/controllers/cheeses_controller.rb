class CheesesController < ApplicationController

  def index
    @cheeses = Cheese.all

  end

  def show
    @cheese = Cheese.find params[:id]
  end

  def new
    # dennis lied
    @cheese = Cheese.new
    # go straight to the view
  end

  def create
    # save the cheese
    @cheese = Cheese.new cheese_params

    if @cheese.save
      # for now we redirect to the index page
      redirect_to cheeses_path

    else
      redirect_to :back
    end

  end

  def destroy
    @cheese = Cheese.find params[:id]
    @cheese.destroy

    redirect_to '/cheeses'
  end

  private

  def cheese_params
    params.require(:cheese).permit(:name, :image_url, :milk_type, :description)
  end

    # t.string "name"
    # t.string "milk_type"
    # t.string "description"
    # t.string "image_url"

end













