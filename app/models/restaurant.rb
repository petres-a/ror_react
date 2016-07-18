class Restaurant < ActiveRecord::Base
  has_many :comments, inverse_of: :restaurant

  def to_s
    name
  end
end