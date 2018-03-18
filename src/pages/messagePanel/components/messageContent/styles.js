import styled from 'styled-components';
import { UserPhoto, UserStatus } from '~/pages/dialogsPanel/components/userProfile/styles.js';
export const MessageContentWrap = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-left: 60px;
  margin-right: 60px;
`;
export const MessageChatPhoto = UserPhoto.extend`
  cursor: pointer;
`;
export const UserChatStatus = UserStatus.extend``;
export const MessageBody = styled.div`
  margin-left: 20px;
`;
export const MessageAuthorWrap = styled.div`
  display: flex;
`;
export const MessageAuthor = styled.div`
  font-family: 'catamaran-regular';
  font-size: 14px;
  color: #1d1e2c;
`;
export const MessageDateText = styled.div`
  font-family: 'catamaran-regular';
  color: #8b8da9;
  font-size: 14px;
  margin-left: 11px;
`;
export const MessageAuthorAdmin = styled.div`
  color: #44337b;
  font-family: 'catamaran-regular';
  margin-left: 11px;
  opacity: .7;
  font-size: 14px;
  display: ${props => props.admin ? 'block' : 'none'};
`;

export const MessageText = styled.div`
  font-family: 'catamaran-regular';
  font-size: 14px;
  color: rgba(255,255,255,.9);
  padding: 12px 20px;
  padding-bottom: 11px;
  background-color: #44337b;
  border-radius: 25px;
  border-top-left-radius: 0px;
  margin-top: 5px;
  max-width: 500px;
  line-height: 17px;
  word-wrap: break-word;
  &:not(:first-child) {
    border-top-left-radius: 25px;
  }
`;
export const HistoryMessageWrap = styled.div`
  &:not(:first-child) {
    ${MessageContentWrap} {
      padding-top: 0px;
    }
  }
`;
