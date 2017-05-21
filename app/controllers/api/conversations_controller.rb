class Api::ConversationsController < ApplicationController
  before_action :authenticate_user!
  before_action :get_conversation, except: [:index]


  def index
    sleep(1)
    @mailbox = current_user.mailbox
    render 'api/conversations/index'
  end

  def show
    sleep(1)
  end

  def reply
    @message = current_user.reply_to_conversation(@conversation, params[:body]).message
    Pusher.trigger("conversation#{@conversation.id}", 'message', {
      message: JSON.parse(render 'api/message/show')
    })

  end

  private

  def get_conversation
    @conversation ||= current_user.mailbox.conversations.find(params[:id])
  end

end
