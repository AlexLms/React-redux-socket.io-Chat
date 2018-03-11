import styled from 'styled-components';
import attachImg from '~/files/img/attach-icon.png';
import emojiIcon from '~/files/img/emoji-icon.png';
import sendIcon from '~/files/img/send-icon.png';
export const SendForm = styled.form`
  display: flex;
  background-color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;
  z-index: 5;
`;
export const SendField = styled.div`
  margin-left: 60px;
  /* max-height: 80px; */
  width: 100%;
  textarea {
    height: 100%;
    resize: none;
    outline: none;
    font-family: 'catamaran-regular';
    font-size: 14px;
    color: #44337b;
    width: 100%;
    border: none;
    &::-webkit-input-placeholder {
      font-family: 'catamaran-regular';
      font-size: 14px;
      color: #8b8da9;
    }
    &::-moz-placeholder {
      font-family: 'catamaran-regular';
      font-size: 14px;
      color: #8b8da9;
    }
    &:-ms-input-placeholder {
      font-family: 'catamaran-regular';
      font-size: 14px;
      color: #8b8da9;
    }
    &:-moz-placeholder {
      font-family: 'catamaran-regular';
      font-size: 14px;
      color: #8b8da9;
    }
  }
`;

export const SendButtons = styled.div`
  display: flex;
  flex-align: center;
  margin-right: 60px;
  padding-top: 11px;
`;
export const AttachBtn = styled.div`
  position: relative;
  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    & + label {
      width: 15px;
      height: 15px;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 10px;
        height: 18px;
        background-repeat: no-repeat;
        background-image: url(${attachImg});
        cursor: pointer;
      }
    }
  }
`;
export const IconEmoji = styled.div`
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  background-image: url(${emojiIcon});
  cursor: pointer;
  background-size: 100%;
  margin-left: 15px;
`;
export const SubmitSend = styled.button`
  width: 21px;
  height: 18px;
  background-repeat: no-repeat;
  background-image: url(${sendIcon});
  cursor: pointer;
  background-size: 100%;
  border: none;
  background-color: transparent;
  margin-left: 15px;
`;
