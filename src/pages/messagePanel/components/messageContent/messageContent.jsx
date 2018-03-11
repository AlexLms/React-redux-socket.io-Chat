import React from 'react';

import { MessageContentWrap, MessageChatPhoto, UserChatStatus, MessageBody, MessageAuthorWrap, MessageAuthor, MessageDateText, MessageAuthorAdmin, MessageText, HistoryMessageWrap } from './styles.js';
import ServiceMessage from './../serviceMessage/serviceMessage';

const MessageContent = (props) => (
  <HistoryMessageWrap>
    <div className="messageWrap">
      <MessageContentWrap>
        <MessageChatPhoto>
          <img src={props.userImg} alt="" />
          <UserChatStatus onlineStatus={props.userStatus} />
        </MessageChatPhoto>
        <MessageBody>
          <MessageAuthorWrap>
            <MessageAuthor>{props.userName}</MessageAuthor>
            <MessageDateText>{props.userSeen}</MessageDateText>
            <MessageAuthorAdmin admin={props.isAdmin}>admin</MessageAuthorAdmin>
          </MessageAuthorWrap>
          <div className="historyMessage">
            <div className="messageTextWrap">
              <MessageText>{props.userMessage}</MessageText>
            </div>
            <div className="messageMedia" />
            <div className="messageSign" />
            <div className="messageKeyboard" />
          </div>
        </MessageBody>
      </MessageContentWrap>
      <ServiceMessage hasInvited="" />
    </div>
  </HistoryMessageWrap>
);


export default MessageContent;

