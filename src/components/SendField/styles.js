import styled from 'styled-components';
import styles from 'src/styles/base/colors';

export const SendFieldContainer = styled.div`
  margin-left: 60px;
  width: 100%;
`;
export const MessageField = styled.input`
  height: 100%;
  font-family: "catamaran-regular";
  font-size: 14px;
  color: ${styles.smokePurple};
  width: 100%;
  outline: none;
  border: none;
  min-height: 53px;
`;
