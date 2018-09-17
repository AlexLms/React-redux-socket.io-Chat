import React from 'react';

import { ErrorTextMain } from './styles';

const ErrorText = ({ children }) => {
  return (
    <ErrorTextMain>
      {children}
    </ErrorTextMain>
  );
};

export default ErrorText;
