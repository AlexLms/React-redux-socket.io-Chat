import React from 'react';

// components
import Dialog from 'src/components/Dialog';
import DialogNumber from 'src/components/DialogNumber';
import ErrorText from 'src/components/ErrorText';
import Loader from 'src/components/Loader';

import { ErrorTextContainer, LoaderContainer } from './styles';

const StatusChecker = ({ isLoading, noError, dialogs, numbers, error }) => {
  if (!isLoading && noError) {
    if (dialogs) {
      return dialogs.map((dialog) => (<Dialog dialog={dialog} key={dialog.id} />));
    }
    if (numbers) {
      return numbers.map((number) => (<DialogNumber number={number} key={number.id} />));
    }
  }
  if (error) {
    return (
      <ErrorTextContainer>
        <ErrorText>
          {error}
        </ErrorText>
      </ErrorTextContainer>
    );
  }
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>
  );
};

export default StatusChecker;
