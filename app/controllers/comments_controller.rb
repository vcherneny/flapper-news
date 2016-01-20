class CommentsController < ApplicationController
  def create
    post = Post.find(params[:post_id])
    comment = post.comments.create(comment_params)
      post, comment
  end

  def upvote
    post = Post.find(params[:post_id])
    comment = post.comments.find(params[:id])

    respond_with post, comment
  end

  private
  def comment_params
    params.require(:comment).permit(:body)    
  end
end
