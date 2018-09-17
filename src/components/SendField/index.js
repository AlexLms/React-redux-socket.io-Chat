import React from 'react';

import { SendFieldContainer, MessageField } from './styles';

const SendField = ({ inputValue, onChange }) => {
  return (
    <SendFieldContainer>
      <MessageField value={inputValue} onChange={onChange} type="text" placeholder="Write a message" />
    </SendFieldContainer>
  );
};

export default SendField;
