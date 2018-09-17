import React from 'react';

import AttachFile from '@material-ui/icons/AttachFile';

import { AttachButtonContainer, AttachFiled, AttachLabel } from './styles';

const AttachButton = () => {
  return (
    <AttachButtonContainer>
      <AttachFiled type="file" multiple id="chooseFile" />
      <AttachLabel htmlFor="chooseFile">
        <AttachFile />
      </AttachLabel>
    </AttachButtonContainer>
  );
};

export default AttachButton;
