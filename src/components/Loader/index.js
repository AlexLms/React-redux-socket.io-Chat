import React from 'react';

import LoaderImg from 'src/static/imgs/loader.svg';
import { MainLoader } from './styles';

const Loader = () => {
  return (
    <MainLoader src={LoaderImg} alt="Loading..." />
  );
};

export default Loader;
