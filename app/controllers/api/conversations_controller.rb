class Api::ConversationsController < ApplicationController
  before_action :authenticate_user!
  before_action :get_conversation, except: [:index, :start_typing, :stop_typing]


  def index
    sleep(2)
    # simulate latency
    @mailbox = current_user.mailbox
    render 'api/conversations/index'
  end

  def show
    mark_as_read
    sleep(2)
    # simulate latency
  end

  def mark_as_read
    @conversation.mark_as_read(current_user)
  end

  def reply
    @message = current_user.reply_to_conversation(@conversation, params[:body]).message
    Pusher.trigger("conversation", 'message', {
      message: JSON.parse(render 'api/message/show')
    })
  end

  def start_typing
    @conversation_id = params[:id].to_i
    @typing = true
    Pusher.trigger("conversation", 'typing', {
      status: JSON.parse(render 'api/message/typing')
    })
  end

  def stop_typing
    @conversation_id = params[:id].to_i
    @typing = false
    Pusher.trigger("conversation", 'typing', {
      status: JSON.parse(render 'api/message/typing')
    })
  end

  private

  def get_conversation
    @conversation ||= current_user.mailbox.conversations.find(params[:id])
  end

end
