import React from 'react';

import { DialogsSearchWrap, DialogsSearchField } from './styles.js';

class DialogsSearch extends React.Component {
  render() {
    return (
      <DialogsSearchWrap>
        <DialogsSearchField placeholder="Search" innerRef={this.props.inputRef} />
      </DialogsSearchWrap>
    );
  }
}

export default DialogsSearch;
