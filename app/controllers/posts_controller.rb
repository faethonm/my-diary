class PostsController < ApplicationController
  # before_action :set_post, only: [:show, :edit, :update, :destroy, :preview]
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.create(post_params)
    if @post.valid?
      redirect_to posts_url
    else
      render 'new'
    end
  end

  def update
  end

  def edit
  end

  def destroy
  end

  private

  def set_post
    @post = Post.find(params.id)
  end

  def post_params
    params.require(:post).permit(
      :content
    )
  end


end
