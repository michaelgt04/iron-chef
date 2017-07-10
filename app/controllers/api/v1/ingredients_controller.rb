class Api::V1::IngredientsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    ingredient_ids = Ingredient.all.pluck(:id)
    render json: ingredient_ids
  end

  def show
    ingredient = Ingredient.find(params[:id])
    render json: ingredient
  end

  def create
    body = request.body.read
    parsed = JSON.parse(body)
    ingredient = Ingredient.new(parsed)
    if ingredient.save
      render json: { message: ["It worked!"] }
    else
      render json: { message: ingredient.errors.full_messages }
    end
  end
end
