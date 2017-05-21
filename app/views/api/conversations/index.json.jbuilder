json.conversations do
  @mailbox.inbox.each do |conversation|
    json.set! conversation.id do
      json.id conversation.id
      json.is_read conversation.is_read?(current_user)
      json.subject conversation.subject
      json.updated_at time_ago_in_words(conversation.updated_at) + " ago"
      json.last_message conversation.last_message.body
      json.last_sender_pic conversation.last_message.sender.profile_pic_url
    end
  end
end
