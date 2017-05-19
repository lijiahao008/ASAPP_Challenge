class Api::ConversationsController < ApplicationController
  before_action :authenticate_user!
  before_action :get_conversation, except: [:index]


  def index
    @mailbox = current_user.mailbox
    render 'api/conversations/index'
  end

  def show
  end

  def reply
    current_user.reply_to_conversation(@conversation, params[:body])
    render 'api/conversations/show'
  end

  private

  def get_conversation
    @conversation ||= current_user.mailbox.conversations.find(params[:id])
  end

end
