import React, { Component } from 'react';

// components
import SendField from 'src/components/SendField';
import SendButtonsContainer from 'src/components/_home/_SendButtonsContainer';
// redux
import { connect } from 'react-redux';

// sockets
import io from 'socket.io-client';
const socket = io('http://localhost:5001');

import { SendMessageContainer } from './styles';

const mapStateToProps = state => ({
  userName: state.user.author,
});

export class SendMessage extends Component {
  state = {
    sendFieldValue: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { sendFieldValue } = this.state;
    const input = sendFieldValue;
    const { userName } = this.props;
    const emitMsg = {
      author: userName,
      text: '',
    };

    if (!input.trim()) {
      return;
    }
    emitMsg.text = input;
    socket.emit('chat message', emitMsg);
    this.setState({ sendFieldValue: '' });
  }

  onInputChange = (event) => {
    let { sendFieldValue } = this.state;
    sendFieldValue = event.target.value;
    this.setState({
      sendFieldValue,
    });
  }

  render() {
    const { sendFieldValue } = this.state;
    return (
      <SendMessageContainer onSubmit={this.onSubmit}>
        <SendField inputValue={sendFieldValue} onChange={this.onInputChange} />
        <SendButtonsContainer />
      </SendMessageContainer>
    );
  }
}

export default connect(mapStateToProps)(SendMessage);
