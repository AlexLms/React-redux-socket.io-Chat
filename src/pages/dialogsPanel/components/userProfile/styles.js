import styled from 'styled-components';

export const UserName = styled.div`
  font-family: "catamaran-regular";
  font-size: 18px;
  color: #fff;
`;
const onlineStatusChecker = status => {
  if (status === 'online') {
    return '#4caf50';
  } else if (status === 'offline') {
    return '#f44336';
  } else if (status === 'waiting') {
    return '#ffc107';
  }
};
export const UserStatus = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  z-index: 2;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => onlineStatusChecker(props.onlineStatus)};
`;
export const UserPhoto = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
  }
`;
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileDescription = styled.div`
  font-size: 14px;
  font-family: "catamaran-regular";
  color: #8b8da9;
  margin-top: 5px;
`;
export const UserInfo = styled.div`
  margin-left: 18px;
  position: relative;
  width: 100%;
`;
export const ProfileNotification = styled.div`
  width: 14px;
  height: 16px;
  position: absolute;
  top: 50%;
  margin-top: -16px;
  cursor: pointer;
  right: 5px;
  padding: 13px;
  .FaBellO, .FaBellSlashO {
    color: #fff;
    font-size: 15px;
    position: relative;
    top: -8px;
    left: -7px;
  }
  .FaBellSlashO {
    font-size: 17px;
    left: -8px;
  }
`;
