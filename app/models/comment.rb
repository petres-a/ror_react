class Comment < ActiveRecord::Base
  has_ancestry

  belongs_to :restaurant, inverse_of: :comments

  validates :restaurant, presence: true
end