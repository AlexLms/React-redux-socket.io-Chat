import React from 'react';

import ChatImg from 'src/static/imgs/chat-icon.png';

import {
  ChatMessageContainer,
  ChatImage,
  ChatImageContainer,
  MessageContainer,
  MessageAuthor,
  MessageTextContainer,
  MessageText,
} from './styles';

const ChatMessage = ({ message }) => {
  return (
    <ChatMessageContainer>
      <ChatImageContainer>
        <ChatImage src={ChatImg} alt="Chat Image" />
      </ChatImageContainer>
      <MessageContainer>
        <MessageAuthor>{message.author}</MessageAuthor>
        <MessageTextContainer>
          <MessageText>{message.messageText}</MessageText>
        </MessageTextContainer>
      </MessageContainer>
    </ChatMessageContainer>
  );
};

export default ChatMessage;
