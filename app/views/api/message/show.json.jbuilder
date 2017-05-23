json.message do
  json.id @message.id
  json.sender_id @message.sender.id
  json.sender_pic @message.sender.profile_pic_url
  json.sender_name @message.sender.name
  json.subject @message.subject
  json.body @message.body
  json.conversation_id @conversation.id
  json.created_at time_ago_in_words(@message.created_at) + " ago"
end
