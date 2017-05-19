json.id @conversation.id
json.subject @conversation.subject
json.messages do
  @conversation.receipts_for(current_user).each do |receipt|
    message = receipt.message
    json.set! message.id do
      json.sender_id message.sender.id
      json.sender_name message.sender.name
      json.sender_image asset_path(message.sender.profile_image.url)
      json.body message.body
      json.created_at time_ago_in_words(message.created_at) + " ago"
    end
  end
end
