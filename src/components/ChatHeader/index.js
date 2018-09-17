import React from 'react';

import ChatHeadInfo from 'src/components/ChatHeadInfo';
import ChatHeadMedia from 'src/components/ChatHeadMedia';

import { ChatHeaderContainer } from './styles';

const ChatHeader = () => {
  return (
    <ChatHeaderContainer>
      <ChatHeadInfo />
      <ChatHeadMedia />
    </ChatHeaderContainer>
  );
};

export default ChatHeader;
