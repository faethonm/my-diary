class Post < ApplicationRecord

  def day
    created_at.beginning_of_day
  end
end
