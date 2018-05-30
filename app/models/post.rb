class Post < ApplicationRecord
  belongs_to :user
  def day
    created_at.beginning_of_day
  end
end
