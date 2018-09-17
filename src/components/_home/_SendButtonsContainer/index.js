import React from 'react';

// components
import AttachButton from 'src/components/AttachButton';
import EmojiButton from 'src/components/EmojiButton';
import SendButton from 'src/components/SendButton';

import { SendButtons } from './styles';
const SendButtonsContainer = () => {
  return (
    <SendButtons>
      <AttachButton />
      <EmojiButton />
      <SendButton />
    </SendButtons>
  );
};

export default SendButtonsContainer;
