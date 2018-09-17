import React from 'react';

import ChatLogo from 'src/static/imgs/js-logo.jpg';

import {
  ChatHeadInfoContainer,
  ChatPhotoContainer,
  ChatPhoto,
  ChatTopicContainer,
  ChatTopic,
  ChatDescription,
} from './styles';

const ChatHeadInfo = () => {
  return (
    <ChatHeadInfoContainer>
      <ChatPhotoContainer>
        <ChatPhoto src={ChatLogo} alt="Chat Photo" />
      </ChatPhotoContainer>
      <ChatTopicContainer>
        <ChatTopic>JavaScript</ChatTopic>
        <ChatDescription>JSthread, flood and stuff!</ChatDescription>
      </ChatTopicContainer>
    </ChatHeadInfoContainer>
  );
};

export default ChatHeadInfo;
