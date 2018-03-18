import React from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5001');

import { SendForm, SendField, SendButtons, AttachBtn, IconEmoji, SubmitSend } from './styles.js';
import { connect } from 'react-redux';
import * as actionCreators from '~/actions/actionCreators';
const mapStateToProps = (state) => ({
  author: state.chat.author,
});
class MessageSend extends React.Component {
  render() {
    let input;
    const emitMsg = {
      author: this.props.author,
      text: '',
    };
    return (
      <div className="messagePanelBottom">
        <div className="sendPanelWrap">
          <SendForm onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            emitMsg.text = input.value;
            socket.emit('chat message', emitMsg);
            input.value = '';
          }}
          >
            <SendField>
              <input
                name=""
                id=""
                className="message_field"
                placeholder="Write a message"
                ref={node => {
                input = node;
                }}
              />
            </SendField>
            <SendButtons>
              <AttachBtn>
                <input type="file" id="file1" className="inputfile" multiple />
                <label htmlFor="file1" />
              </AttachBtn>
              <div className="composerEmoji">
                <IconEmoji />
              </div>
              <div className="submitSendWrap">
                {/* button */}
                <SubmitSend type="submit" />
              </div>
            </SendButtons>
          </SendForm>
        </div>
      </div>
    );
  }
};
// export default MessageSend;

const MessageSendConnect = connect(mapStateToProps, actionCreators)(MessageSend);

export default MessageSendConnect;
