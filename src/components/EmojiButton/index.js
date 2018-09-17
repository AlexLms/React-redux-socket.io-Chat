import React from 'react';

import InsertEmoticon from '@material-ui/icons/InsertEmoticon';

import { EmojiButtonContainer } from './styles';

const EmojiButton = () => {
  return (
    <EmojiButtonContainer>
      <InsertEmoticon />
    </EmojiButtonContainer>
  );
};

export default EmojiButton;
