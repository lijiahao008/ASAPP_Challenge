
export const sendMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: `api/conversations/${message.conversationId}/reply`,
    data: message
  });
};

export const startTyping = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/conversations/${id}/start_typing`
  });
};

export const stopTyping = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/conversations/${id}/stop_typing`
  });
};
