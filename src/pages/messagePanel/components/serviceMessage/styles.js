import styled from 'styled-components';
import { MessageContentWrap } from './../messageContent/styles.js';


export const ServiceMessageWrap = MessageContentWrap.extend`
  padding: 0px;
  margin-top: -15px;
  margin-bottom: 15px;
  display: ${props => props.display ? 'flex' : 'none'}
`;
export const InServiceWrap = styled.div`
  justify-content: center;
  padding: 4px 7px;
  margin: 5px;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const InMessageAuthor = styled.a`
  font-family: 'catamaran-regular';
  font-size: 12px;
  color: #8b8da9;
  margin-left: 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const InMessageText = InMessageAuthor.withComponent('div').extend`
  margin-left: 5px;
  &:hover {
    text-decoration: none;
  }
`;

export const InChatInvited = InMessageAuthor.extend`
  margin-left: 5px;
`;
export const InMessageIcon = styled.img`
  width: 17px;
  height: 12px;
  margin-top: -2px;
`;
