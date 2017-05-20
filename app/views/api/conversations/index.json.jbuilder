json.conversations do
  @mailbox.inbox.each do |conversation|
    json.set! conversation.id do
      json.id conversation.id
      json.subject conversation.subject
      json.updated_at time_ago_in_words(conversation.updated_at).gsub("about", "") + " ago"
      json.last_message conversation.last_message.body
    end
  end
end
