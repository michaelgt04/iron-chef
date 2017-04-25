class Ingredient < ApplicationRecord
  validates :name, presence: true
  validates :img_url, presence: true
end
