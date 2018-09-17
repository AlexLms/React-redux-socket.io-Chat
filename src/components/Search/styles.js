import styled from 'styled-components';
import styles from 'src/styles/base/colors';

export const SearchContainer = styled.div`
  margin-top: 5px;
  padding-left: 27px;
  padding-right: 27px;
`;
export const SearchField = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #393258;
  font-family: "catamaran-regular";
  font-size: 14px;
  font-weight: 100;
  color: ${styles.white};
  width: 100%;
  padding: 10px 0px;
  outline: none;
  &::-webkit-input-placeholder {
    color: ${styles.smokePurple};
    font-size: 14px;
    font-weight: 100;
  }
  &::-moz-placeholder {
    color: ${styles.smokePurple};
    font-size: 14px;
    font-weight: 100;
  }
  &:-ms-input-placeholder {
    color: ${styles.smokePurple};
    font-size: 14px;
    font-weight: 100;
  }
  &:-moz-placeholder {
    color: ${styles.smokePurple};
    font-size: 14px;
    font-weight: 100;
  }
`;
