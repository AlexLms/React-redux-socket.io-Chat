import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

// components
import ChatMessage from 'src/components/ChatMessage';

// redux
import { connect } from 'react-redux';

// styles
import { trackStyles, thumbStyles } from 'src/styles/base/scroll';
import { ChatBodyContainer } from './styles';

const mapStateToProps = state => ({
  messages: state.chat.messages,
});

export class ChatBody extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ChatBodyContainer>
        <Scrollbars
          autoHide
          renderTrackVertical={
            ({ style, ...props }) => <div {...props} style={{ ...style, ...trackStyles }} />
          }
          renderThumbVertical={
            ({ style, ...props }) => <div {...props} style={{ ...style, ...thumbStyles }} />
          }
        >

          {messages.map((message, index) => (
            // eslint-disable-next-line
            <ChatMessage message={message} key={index} />
          ))}

        </Scrollbars>
      </ChatBodyContainer>
    );
  }
}

export default connect(mapStateToProps)(ChatBody);
