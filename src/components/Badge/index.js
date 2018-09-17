import React from 'react';

import { MainBadge } from './styles';

const Badge = ({ number }) => {
  return (
    <MainBadge>
      {number}
    </MainBadge>
  );
};

export default Badge;
