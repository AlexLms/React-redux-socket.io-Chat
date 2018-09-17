import React, { Component } from 'react';

// components
import UserPannel from 'src/components/UserPannel';
import Tabs from 'src/components/Tabs';

import { DialogsPannelContainer } from './styles';

export class DialogsPannel extends Component {
  render() {
    return (
      <DialogsPannelContainer>
        <UserPannel />
        <Tabs />
      </DialogsPannelContainer>
    );
  }
}

export default DialogsPannel;
