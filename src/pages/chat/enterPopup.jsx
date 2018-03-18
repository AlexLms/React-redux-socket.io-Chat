import React from 'react';
import { connect } from 'react-redux';
import { addUser, toggleEnterPopup } from '~/actions/actionCreators';

// styles
import { PopupEnter } from './styles.js';

class EnterPopup extends React.Component {
  popupSubmit = (event) => {
    if (event.key === 'Enter' && event.target.value) {
      this.props.addUser(event.target.value);
      this.props.toggleEnterPopup();
    };
  }
  render() {
    return (
      <PopupEnter>
        <div className="popupContent">
          <h3>What's your nickname?</h3>
          <input maxLength={14} onKeyPress={this.popupSubmit} />
        </div>
      </PopupEnter>
    );
  }
};

const EnterPopupConnect = connect(null, { addUser, toggleEnterPopup })(EnterPopup);

export default EnterPopupConnect;
