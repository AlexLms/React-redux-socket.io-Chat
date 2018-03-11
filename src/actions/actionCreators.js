// toggle notification
export const showNotify = (notify) => ({
  type: 'SHOW_NOTIFICATION',
  notify,
});
// toggle usersettings
export const showUserSettings = (userSettings) => ({
  type: 'SHOW_USER_SETTINGS',
  userSettings,
});
// toggle active burger
export const toggleActive = (burgerActive) => ({
  type: 'MAKE_BUTTON_ACTIVE',
  burgerActive,
});
// show chat settings
export const showChatSettings = (visibility) => ({
  type: 'SHOW_CHAT_SETTINGS',
  visibility,
});
// toggle modal
export const toggleModal = (id) => ({
  type: 'TOGGLE_MODAL',
  id,
});
// show emojis
export const showEmojis = (visibility) => ({
  type: 'SHOW_EMOJIS',
  visibility,
});
// send message
export const sendMessage = (postId, author, comment) => ({
  type: 'SEND_MESSAGE',
  postId,
  author,
  comment,
});
