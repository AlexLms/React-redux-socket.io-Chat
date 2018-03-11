import styled from 'styled-components';

export const DialogsSearchWrap = styled.div`
  margin-top: 30px;
`;
export const DialogsSearchField = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #393258;
  font-family: "catamaran-regular";
  font-size: 14px;
  color: #8b8da9;
  width: 100%;
  padding: 10px 0px;
  outline: none;
  &::-webkit-input-placeholder {
    font-family: "catamaran-regular";
    font-size: 14px;
    color: #8b8da9;
    opacity: .2;
  }
  &::-moz-placeholder {
    font-family: "catamaran-regular";
    font-size: 14px;
    color: #8b8da9;
    opacity: .2;
  }
  &:-ms-input-placeholder {
    font-family: "catamaran-regular";
    font-size: 14px;
    color: #8b8da9;
    opacity: .2;
  }
  &:-moz-placeholder {
    font-family: "catamaran-regular";
    font-size: 14px;
    color: #8b8da9;
    opacity: .2;
  }
`;
