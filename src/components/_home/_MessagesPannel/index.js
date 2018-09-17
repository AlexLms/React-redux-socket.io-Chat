import React, { Component } from 'react';

// components
import ChatHeader from 'src/components/ChatHeader';
import ChatBody from 'src/components/ChatBody';
import SendMessage from 'src/components/SendMessage';

import { MessagesPannelContainer } from './styles';

export class MessagesPannel extends Component {
  render() {
    return (
      <MessagesPannelContainer>
        <ChatHeader />
        <ChatBody />
        <SendMessage />
      </MessagesPannelContainer>
    );
  }
}

export default MessagesPannel;
