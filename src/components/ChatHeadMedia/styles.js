import styled from 'styled-components';
import styles from 'src/styles/base/colors';

export const ChatHeadMediaContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChatMembers = styled.div`
  font-family: 'catamaran-regular';
  font-size: 12px;
  color: ${styles.smokePurple};
  margin-right: 15px;
  cursor: pointer;
`;
export const ChatInvite = styled.div`
  font-family: 'catamaran-regular';
  font-size: 12px;
  color: ${styles.smokePurple};
  position: relative;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
`;
export const ChatSettings = styled.div`
  color: ${styles.smokePurple};
  cursor: pointer;
  margin-left: 20px;
  position: relative;
  z-index: 2;
  svg {
    font-size: 21px;
  }
`;
