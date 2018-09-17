import React from 'react';
import NumberLogo from 'src/static/imgs/number-logo.png';

import {
  DialogNumberContainer,
  NumberImg,
  NumberTopic,
  NumberImgContainer,
  NumberId,
  CallCount,
  NumberStatus,
  NumberTime,
  NumberInfo,
} from './styles';
const DialogNumber = ({ number }) => {
  return (
    <DialogNumberContainer href="#">
      <NumberImgContainer>
        <NumberImg src={NumberLogo} alt="User" />
      </NumberImgContainer>
      <NumberInfo>
        <NumberTopic>
          <NumberId>{number.numberId}</NumberId>
          <CallCount>({number.callCount})</CallCount>
        </NumberTopic>
        <NumberStatus>{number.status}</NumberStatus>
      </NumberInfo>
      <NumberTime>{number.time}</NumberTime>
    </DialogNumberContainer>
  );
};

export default DialogNumber;
