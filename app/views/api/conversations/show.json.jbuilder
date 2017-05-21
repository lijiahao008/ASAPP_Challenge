json.id @conversation.id
json.subject @conversation.subject
json.recipients @conversation.recipients.select{|user| user.id != current_user.id}
json.messages do
  @conversation.receipts_for(current_user).each do |receipt|
    message = receipt.message
    json.set! message.id do
      json.sender_id message.sender.id
      json.sender_pic message.sender.profile_pic_url
      json.sender_name message.sender.name
      json.body message.body
      json.created_at time_ago_in_words(message.created_at) + " ago"
    end
  end
end
