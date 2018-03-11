import styled from 'styled-components';
import { UserPhoto, UserStatus } from './../userProfile/styles.js';
import statusOnline from '~/files/img/status_online.png';
import statusSent from '~/files/img/status_sent.png';
import statusReaded from '~/files/img/status_readed.png';
// font-family: "catamaran-regular";

export const DialogWrap = styled.li`
  list-style-type: none;
`;
export const Dialog = styled.a`
  display: flex;
  align-items: center;
  padding: 20px 27px;
  text-decoration: none;
  position: relative;
  &:hover {
    background-color: rgba(0,0,0,.2);
  }
`;
export const DialogPhoto = UserPhoto.extend``;
export const DialogMessageWrapp = styled.div`
  margin-left: 18px;
`;
export const DialogPeer = styled.div`
  display: flex;
  align-items: center;
`;
export const PeerId = styled.div`
  font-family: "catamaran-regular";
  font-size: 14px;
  color: #fff;
`;
export const PeerStatus = styled.div`
  font-family: "catamaran-regular";
  font-size: 12px;
  color: #8b8da9;
  margin-left: 10px;
  margin-top: -2px;
`;
export const DialogShortMessage = styled.div`
  font-family: "catamaran-regular";
  font-size: 14px;
  color: #8b8da9;
  margin-top: 5px;
  max-width: 190px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const ChatUserStatus = UserStatus.extend``;

const changeBackground = type => {
  if (type === 'statusOnline') {
    return statusOnline;
  } else if (type === 'statusSent') {
    return statusSent;
  } else if (type === 'statusReaded') {
    return statusReaded;
  }
};
export const DialogMetaStatus = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -2px;
  right: 37px;
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    right: 0px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-image: url(${props => changeBackground(props.status)});
    }
`;
