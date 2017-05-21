json.set! @message.id do
  json.sender_id @message.sender.id
  json.sender_name @message.sender.name
  json.body @message.body
  json.created_at time_ago_in_words(@message.created_at) + " ago"
end
