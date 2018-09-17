import React, { Component } from 'react';

import Settings from '@material-ui/icons/Settings';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Dialog from '@material-ui/core/Dialog';
import { MuiThemeProvider } from '@material-ui/core/styles';

import menuTheme from 'src/theme/menuTheme2';

import {
  ChatMembers,
  ChatInvite,
  ChatSettings,
  ChatHeadMediaContainer,
} from './styles';


export class ChatHeadMedia extends Component {
  state = {
    anchorEl: null,
    dialogs: {
      dialog1: false,
      dialog2: false,
    },
  }

  handleSettingsClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleSettingsClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClickDialog = dialog => () => {
    const { dialogs } = this.state;
    dialogs[dialog] = !dialogs[dialog];
    this.setState({ dialogs });
  };

  render() {
    const { anchorEl, dialogs } = this.state;
    return (
      <ChatHeadMediaContainer>
        <ChatMembers onClick={this.handleClickDialog('dialog1')}>12 participants</ChatMembers>
        <ChatInvite onClick={this.handleClickDialog('dialog2')}>invite</ChatInvite>
        <ChatSettings onClick={this.handleSettingsClick}><Settings /></ChatSettings>
        <MuiThemeProvider theme={menuTheme}>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleSettingsClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={this.handleSettingsClose}>Search messages</MenuItem>
            <MenuItem onClick={this.handleSettingsClose}>Photos</MenuItem>
            <MenuItem onClick={this.handleSettingsClose}>Videos</MenuItem>
            <MenuItem onClick={this.handleSettingsClose}>Files</MenuItem>
            <MenuItem onClick={this.handleSettingsClose}>Audio</MenuItem>
            <MenuItem onClick={this.handleSettingsClose}>Shared links</MenuItem>

          </Menu>
        </MuiThemeProvider>
        <Dialog
          open={dialogs.dialog1}
          onClose={this.handleClickDialog('dialog1')}
          aria-labelledby="responsive-dialog-title"
        >
          some text
        </Dialog>
        <Dialog
          open={dialogs.dialog2}
          onClose={this.handleClickDialog('dialog2')}
          aria-labelledby="responsive-dialog-title"
        >
          some text2
        </Dialog>
      </ChatHeadMediaContainer>
    );
  }
}

export default ChatHeadMedia;
