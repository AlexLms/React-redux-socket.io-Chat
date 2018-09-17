import styled from 'styled-components';
import styles from 'src/styles/base/colors';

export const AttachButtonContainer = styled.div`
  position: relative;
`;
export const AttachFiled = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
`;
export const AttachLabel = styled.label`
  width: 15px;
  height: 15px;
  cursor: pointer;
  svg {
    font-size: 19px;
    color: ${styles.darkPurple};
  }
`;
