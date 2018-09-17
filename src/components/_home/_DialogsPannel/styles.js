import styled from 'styled-components';
import styles from 'src/styles/base/colors';

export const DialogsPannelContainer = styled.div`
  width: 31%;
  height: 95vh;
  height: -webkit-calc(100vh - 23px);
  height: -moz-calc(100vh - 23px);
  height: calc(100vh - 23px);
  overflow: hidden;
  background-color: ${styles.darkPurple};
  padding: 30px 27px;
`;
