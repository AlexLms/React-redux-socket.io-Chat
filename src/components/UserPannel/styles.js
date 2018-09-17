import styled from 'styled-components';
import styles from 'src/styles/base/colors';

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;
export const UserPhoto = styled.div`
  max-width: 45px;
  min-width: 45px;
  position: relative;
  &:before {
    width: 46px;
    height: 46px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid ${styles.white};
    border-radius: 50%;
  }
  img {
    width: 100%;
  }
`;
export const UserProfileInfo = styled.div`
  margin-left: 18px;
  position: relative;
  width: calc(100% - 45px);
`;
export const UserName = styled.div`
  font-family: "catamaran-regular";
  font-size: 18px;
  color: ${styles.white};
`;
export const ProfileDescription = styled.div`
  font-size: 14px;
  font-family: "catamaran-regular";
  color: #8b8da9;
  margin-top: 5px;
`;
export const ProfileNotification = styled.div`
  color: ${styles.white};
  width: 23px;
  height: 25px;
  margin-top: -21px;
  cursor: pointer;
  padding: 5px;
  svg {
    font-size: 17px;
  }
`;
