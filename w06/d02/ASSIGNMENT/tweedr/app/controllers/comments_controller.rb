class CommentsController < ApplicationController

      def index
          @comments = Comment.all
      end

      def show
          @comment = Comment.find(params[:id])
      end

      def new
          @comment = Comment.new
      end

      def create
          @comment = Comment.new(artist_params)
          if @comment.save
          redirect_to @comment
        else
          redirect_to new_comment_path
          end
      end

      def edit
          @comment = Comment.find(params[:id])
      end

      def update
          @comment = Comment.find(params[:id])
          @comment.update(artist_params)
          flash.notice = "Comment updated."
          redirect_to comment_path(@comment)
      end

      def destroy
          @comment = Comment.find(params[:id])
          @comment.destroy
          flash.notice = "Comment destroyed"
          redirect_to comment_path
      end

  end
