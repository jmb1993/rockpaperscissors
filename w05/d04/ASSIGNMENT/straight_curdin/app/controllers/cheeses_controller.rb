class CheesesController < ApplicationController

  def index
    @cheeses = Cheese.all
  end

  def show
    @cheese = Cheese.find params[:id]
  end

  def new
@cheese = Cheese.new
  end

  def create
@cheese = Cheese.new cheese_params

if @cheese.save
  redirect_to cheeses_path @cheese
  else
  redirect_to :back

  end
  def destroy
@cheese = Cheese.find params[:id]
@cheese.destroy

redirect_to '/cheeses'
  end
end

private
def cheese_params
  params.require(:cheese).permit(:name, :image_url, :description, :milk_type)
end

end
