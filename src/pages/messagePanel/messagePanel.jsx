import React from 'react';
import { MessagesPanel, MessagePanelBody, MessageTyping } from './styles.js';

// components
import PanelHead from './components/messagePanelHead/panelHead';
import MessageContent from './components/messageContent/messageContent';
import MessageSend from './components/messageSend/messageSend';

// redux
import { connect } from 'react-redux';
import { showChatSettings, toggleModal } from '~/actions/actionCreators';

const mapStateToProps = (state) => ({
  chatPanel: state.ui.chatPanel,
  chatMessage: state.ui.chatMessage,
  chatSettings: state.ui.chatSettings,

  modal5: state.toggleModal.modal5,
  modal6: state.toggleModal.modal6,
});

class MessagePanel extends React.Component {
  onShowChatSettings = (e) => {
    e.stopPropagation();
    this.props.showChatSettings();
  }

  render() {
    return (
      <MessagesPanel>
        <PanelHead
          chatPanel={this.props.chatPanel}
          visibleChatSettings={this.props.chatSettings}
          handleFocus={this.props.handleFocus}
          showChatSettings={this.onShowChatSettings}

          toggleModal={this.props.toggleModal}
          modal5={this.props.modal5}
          modal6={this.props.modal6}
        />
        <MessagePanelBody>
          <div className="historyMessagesGroup">
            {
              this.props.chatMessage.map(user =>
                (<MessageContent
                  userName={user.name}
                  userMessage={user.message}
                  userSeen={user.seen}
                  userImg={user.img}
                  userStatus={user.onlineStatus}
                  isAdmin={user.isAdmin}
                />))
            }
          </div>
          <MessageTyping >
            <span>Josefine</span>
            <span>and</span>
            <span>Kevin</span>
            <span>are typing</span>
          </MessageTyping>
        </MessagePanelBody>
        <MessageSend />
      </MessagesPanel>
    );
  }
}

const MessagePanelWrap = connect(mapStateToProps, { showChatSettings, toggleModal })(MessagePanel);

export default MessagePanelWrap;

