import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import { nameUser } from 'src/actions/greetings';

import {
  GreetingContentContainer,
  Content,
  GreetingTopic,
  GreetingField,
} from './styles';


export class GreetingContent extends Component {
  onKeySubmit = (event) => {
    if (event.key === 'Enter' && event.target.value) {
      const { dispatch, onClose } = this.props;
      dispatch(nameUser(event.target.value));
      onClose();
    }
  }

  render() {
    return (
      <GreetingContentContainer>
        <Content>
          <GreetingTopic>{'What\'s your nickname?'}</GreetingTopic>
          <GreetingField maxLength={14} onKeyPress={this.onKeySubmit} />
        </Content>
      </GreetingContentContainer>
    );
  }
}


export default connect()(GreetingContent);
