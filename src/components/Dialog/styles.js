import styled from 'styled-components';
import styles from 'src/styles/base/colors';

export const DialogContainer = styled.a`
  display: flex;
  align-items: center;
  padding: 20px 27px;
  text-decoration: none;
  outline: none;
  position: relative;
  &:hover {
    background-color: ${styles.darkestPurple};
  }
`;
export const UserPhotoContainer = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
`;
export const UserPhoto = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
`;
const StatusColorChecker = color => {
  if (color === 'waiting') {
    return styles.warning;
  } if (color === 'offline') {
    return styles.danger;
  } if (color === 'online') {
    return styles.success;
  }
  return 'none';
};
export const UserStatus = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  z-index: 2;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => StatusColorChecker(props.status)};;
`;
export const DialogPeer = styled.div`
  position: relative;
  display: flex;
`;
export const PeerId = styled.div`
  font-family: "catamaran-regular";
  font-size: 14px;
  color: ${styles.white};
  max-width: 150px;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const PeerStatus = styled.div`
  font-family: "catamaran-regular";
  font-size: 12px;
  color: ${styles.smokePurple};
  margin-left: 10px;
  margin-top: -1px;
  position: absolute;
  top: 0;
  right: 0;
`;
export const DialogShortMessage = styled.div`
  font-family: "catamaran-regular";
  font-size: 14px;
  color: ${styles.smokePurple};
  margin-top: 2px;
  max-width: 190px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const DialogMessageContainer = styled.div`
  margin-left: 18px;
  width: calc(100% - 63px);
`;
export const UnreadCount = styled.div`
  position: absolute;
  bottom: 24px;
  right: 27px;
  font-size: 9px;
  background-color: ${styles.greyPurple};
  padding: 0px 7px;
  border-radius: 25px;
  color: ${styles.white};
  font-weight: bold;
  max-height: 18px;
`;
