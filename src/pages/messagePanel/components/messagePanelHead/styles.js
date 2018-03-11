import styled from 'styled-components';
import { UserPhoto, UserStatus } from '~/pages/dialogsPanel/components/userProfile/styles.js';


export const MessagePeerImg = UserPhoto.extend``;
export const MessagePeerStatus = UserStatus.extend``;
export const MessagePanelHead = styled.div`
  background-color:  #ffffff;
  box-shadow: -11px 0px 18px 2px rgba(0,0,0,0.1);
  padding: 27px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const MessagePeerInfo = styled.div`
  margin-left: 20px;
`;
export const MessagePeerTitle = styled.div`
  font-size: 16px;
  color: #1d1e2c;
  font-family: 'catamaran-regular';
  font-weight: 600;
  margin-top: 5px;
`;
export const MessageHeadStatus = styled.div`
  font-family: 'catamaran-regular';
  font-size: 14px;
  color: #8b8da9;
  margin-top: 5px;
`;
export const MessagePeerTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const MessagePeerAboutWrap = styled.div`
  display: flex;
  position: relative;
`;
export const ChatMembers = styled.div`
  font-family: 'catamaran-regular';
  font-size: 12px;
  color: #8b8da9;
  margin-right: 15px;
  cursor: pointer;
`;
export const ChatLink = styled.div`
  font-family: 'catamaran-regular';
  font-size: 12px;
  color: #8b8da9;
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  &:before, &:after {
    content: '';
    position: absolute;
    top: -5px;
    height: 22px;
    width: 1px;
    background-color: #e8e8e9;
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
`;
export const PeerMedia = styled.div`
  margin-left: 10px;
  margin-top: -7px;
  cursor: pointer;
  padding: 5px;
  img {
    width: 17px;
    height: 17px;
    cursor: pointer;
  }
`;
export const PeerChatSettings = styled.div`
  .PeerChatSettings {
    position: absolute;
    top: 40px;
    right: -60px;
    box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.1);
    border: 1px solid #261c46;
    background-color: #fff;
    max-width: 160px;
    ul {
      padding-top: 14px;
    }
    .PeerChatNav {
      padding: 11px 18px 11px 18px;
      outline: none;
      cursor: pointer;
      font-size: 14px;
      font-family: 'catamaran-regular';
      &:hover {
        background-color: #261c461c;
        color: #000;
      }
    }
  }
`;
