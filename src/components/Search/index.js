import React from 'react';

import { SearchContainer, SearchField } from './styles';

const Search = () => {
  return (
    <SearchContainer>
      <SearchField type="text" placeholder="Search" />
    </SearchContainer>
  );
};

export default Search;
