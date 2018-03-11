import React from 'react';
import invitedIcon from '~/files/img/invited-icon.png';
import { ServiceMessageWrap, InServiceWrap, InMessageAuthor, InMessageText, InChatInvited, InMessageIcon } from './styles.js';

const ServiceMessage = (props) => (
  <ServiceMessageWrap display={props.hasInvited}>
    <InServiceWrap>
      <InMessageIcon src={invitedIcon} />
      <InMessageAuthor>Rafael Ramaisen</InMessageAuthor>
      <InMessageText>has invited</InMessageText>
      <InChatInvited>Dmitry Shirshov</InChatInvited>
    </InServiceWrap>
  </ServiceMessageWrap>
);

export default ServiceMessage;