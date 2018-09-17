import styled from 'styled-components';
import styles from 'src/styles/base/colors';

export const MainBadge = styled.div`
  font-family: "catamaran-regular";
  color: ${styles.darkPurple};
  background-color: ${styles.grey};
  min-width: 15px;
  min-height: 14px;
  max-height: 15px;
  border-radius: 25px;
  font-size: 10px;
  padding: 0 5px;
  position: absolute;
  top: -5px;
  right: -5px;
`;
