// import React from 'react';
import React from 'react';

import { connect } from 'react-redux';

import Send from '@material-ui/icons/Send';
import { SendButtonContainer } from './styles';

const SendButton = () => {
  return (
    <SendButtonContainer type="submit">
      <Send />
    </SendButtonContainer>
  );
};

export default connect()(SendButton);
