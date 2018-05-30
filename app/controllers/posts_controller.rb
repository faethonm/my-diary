class PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  

  def index
    @posts = current_user.posts
  end

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.create(post_params)
    if @post.valid?
      @post.save
      redirect_to posts_url
    else
      render 'new'
    end
  end

  def update
      if @post.update(post_params);
      redirect_to posts_path(@post)
    else
      render 'edit'
    end
  end

  def edit
  end

  def destroy
    @post.destroy
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(
      :content,
      :user_id
    )
  end
end
