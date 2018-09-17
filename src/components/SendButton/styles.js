import styled from 'styled-components';
import styles from 'src/styles/base/colors';

export const SendButtonContainer = styled.button`
  margin-left: 15px;
  cursor: pointer;
  border: none;
  padding: 0px;
  background-color: transparent;
  svg {
    font-size: 19px;
    color: ${styles.darkPurple};
    transform: rotate(-41deg);
    position: relative;
    top: -2px;
  }
`;
