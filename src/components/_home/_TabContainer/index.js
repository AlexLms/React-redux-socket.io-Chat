import React from 'react';
import Typography from '@material-ui/core/Typography';

const TabContainer = ({ children }) => {
  return (
    <Typography component="div">
      {children}
    </Typography>
  );
};
export default TabContainer;
