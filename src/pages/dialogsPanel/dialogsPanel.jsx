import React from 'react';
import { DialogsPannel, UserPanel } from './styles.js';

// components
import CurrentUserConnect from './components/userProfile/currentUser';
import SelectionsConnect from './components/selections/selections';

const DialogsPanel = (props) => (
  <DialogsPannel>
    <UserPanel>
      <CurrentUserConnect />
      <SelectionsConnect inputRef={props.inputRef} />
    </UserPanel>
  </DialogsPannel>
);

export default DialogsPanel;
