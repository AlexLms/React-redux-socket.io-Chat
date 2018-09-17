import styled from 'styled-components';
import styles from 'src/styles/base/colors';

export const ChatMessageContainer = styled.div`
  padding: 30px 60px;
  display: flex;
  &:not(:first-child) {
    padding-top: 0px;
  }
`;
export const ChatImage = styled.img`
  position: relative;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
`;
export const ChatImageContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  cursor: pointer;
`;
export const MessageContainer = styled.div`
  margin-left: 20px;
`;
export const MessageAuthor = styled.div`
  font-family: "catamaran-regular";
  font-size: 14px;
  color: ${styles.darkPurple};
`;
export const MessageTextContainer = styled.div`

`;
export const MessageText = styled.div`
  font-family: "catamaran-regular";
  font-size: 14px;
  color: ${styles.white};
  background-color: rgb(68, 51, 123);
  margin-top: 5px;
  max-width: 500px;
  line-height: 17px;
  word-wrap: break-word;
  padding: 12px 20px 11px;
  border-radius: 0px 25px 25px;
`;
