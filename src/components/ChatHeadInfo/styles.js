import styled from 'styled-components';
import { UserPhotoContainer, UserPhoto } from 'src/components/Dialog/styles';
import styles from 'src/styles/base/colors';

export const ChatHeadInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ChatPhotoContainer = styled(UserPhotoContainer)``;
export const ChatPhoto = styled(UserPhoto)``;

export const ChatTopicContainer = styled.div`
  margin-left: 20px;
`;
export const ChatTopic = styled.div`
  font-size: 16px;
  color: ${styles.darkPurple};
  font-family: 'catamaran-regular';
  font-weight: 600;
  margin-top: 5px;
`;
export const ChatDescription = styled.div`
  font-family: 'catamaran-regular';
  font-size: 14px;
  color: ${styles.smokePurple};
  margin-top: 5px;
`;
