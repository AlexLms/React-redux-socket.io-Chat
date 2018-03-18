import React from 'react';
import styled from 'styled-components';

// redux
import { connect } from 'react-redux';
import { showUserSettings, toggleActive, showChatSettings } from './actions/actionCreators';

// components
import DialogsPanel from '~/pages/dialogsPanel/dialogsPanel';
import MessagePanelWrap from '~/pages/MessagePanel/MessagePanel';
import EnterPopup from '~/pages/chat/enterPopup';

// styles
import '~/styles/index.js';

const ContentWrap = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
`;
const PageWrap = styled.div`
  background-color: #e7ebf0;
  height: 100vh;
`;

const mapStateToProps = (state) => ({
  userSettings: state.ui.userSettings,
  chatSettings: state.ui.chatSettings,
  isPopupOn: state.chat.isPopupOn,
});


class App extends React.Component {
  hideSettings = () => {
    if (this.props.userSettings) {
      this.props.showUserSettings();
      this.props.toggleActive();
    }
    if (this.props.chatSettings) {
      this.props.showChatSettings();
    }
  }
  handleFocus = () => {
    this.inputElement.focus();
  }
  render() {
    return (
      <PageWrap onClick={this.hideSettings}>
        {this.props.isPopupOn ? <EnterPopup /> : null}
        <ContentWrap>
          <DialogsPanel inputRef={(input) => { this.inputElement = input; }} />
          <MessagePanelWrap handleFocus={this.handleFocus} />
        </ContentWrap>
      </PageWrap>
    );
  }
}

const MainApp = connect(mapStateToProps, {
  showUserSettings, toggleActive, showChatSettings,
})(App);

export default MainApp;
