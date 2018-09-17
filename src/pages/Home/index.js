import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import { MuiThemeProvider } from '@material-ui/core/styles';

// components
import DialogsPannel from 'src/components/_home/_DialogsPannel';
import MessagesPannel from 'src/components/_home/_MessagesPannel';
import GreetingContent from 'src/components/GreetingContent';

import theme from 'src/theme/greetingModal';
import { App, Container } from './styles';

export class Home extends Component {
  state = {
    greetingModal: true,
  };

  handleGreetingModal = () => {
    const { greetingModal } = this.state;
    this.setState({ greetingModal: !greetingModal });
  };

  render() {
    const { greetingModal } = this.state;
    return (
      <App>
        <Container>
          <DialogsPannel />
          <MessagesPannel />
        </Container>
        <MuiThemeProvider theme={theme}>
          <Dialog
            open={greetingModal}
            fullScreen={true}
            onClose={this.handleGreetingModal}
            aria-labelledby="form-dialog-title"
          >
            <GreetingContent onClose={this.handleGreetingModal} />
          </Dialog>
        </MuiThemeProvider>
      </App>
    );
  }
}

export default Home;
