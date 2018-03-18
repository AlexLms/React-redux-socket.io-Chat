import styled from 'styled-components';

export const PopupEnter = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  width: 100%;
  height: 100%;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    color: #000;
    font-weight: 100;
    font-size: 200%;
    text-align: center;
    margin-bottom: 30px;
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #000;
    outline: none;
    padding-bottom: 15px;
    text-align: center;
    width: 400px;
    color: #000;
    font-weight: 100;
    font-size: 200%;
    letter-spacing: 3px;
  }
`;
