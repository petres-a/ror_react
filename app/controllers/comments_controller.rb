class CommentsController < ApplicationController

  # remember this for your project
  def create
    @comment = Comment.create(comment_params.merge(restaurant_id: params[:restaurant_id]))
  end

  def comment_params
    # I DONT NEED PARENT ID
    params.required(:comment).permit(:body, :author, :parent_id)
  end
end