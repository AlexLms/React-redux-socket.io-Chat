import React, { Component } from 'react';
import { connect } from 'react-redux';

import Message from '@material-ui/icons/Message';
import Group from '@material-ui/icons/Group';
import LocalPhone from '@material-ui/icons/LocalPhone';
import Settings from '@material-ui/icons/Settings';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

// components
import Search from 'src/components/Search';
import TabsDialogsContainer from 'src/components/_home/_TabsDialogsContainer';
import TabContainer from 'src/components/_home/_TabContainer';
import Badge from 'src/components/Badge';
import StatusChecker from 'src/components/_home/_StatusChecker';

// redux
import { getDialogs } from 'src/actions/chat';

import tabTheme from 'src/theme/tabTheme';
import menuTheme from 'src/theme/menuTheme';

import {
  TabsContainer,
  PanelSettings,
  TabsContent,
} from './styles';

const mapStateToProps = state => ({
  dialogs: state.dialogs.data ? state.dialogs.data.dialogs : [],
  groups: state.dialogs.data ? state.dialogs.data.groups : [],
  numbers: state.dialogs.data ? state.dialogs.data.numbers : [],
  isLoading: state.dialogs.isLoading,
  isError: state.dialogs.error,
});


class TabsMain extends Component {
  state = {
    value: 0,
    unreadCount: 1,
    anchorEl: null,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getDialogs());
  }

  handleTabsChange = (event, value) => {
    this.setState({ value });
  };

  handleSettingsClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleSettingsClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { value, unreadCount, anchorEl } = this.state;
    const {
      dialogs,
      groups,
      numbers,
      isLoading,
      isError,
    } = this.props;
    const noError = isError ? isError.length === 0 : true;

    return (
      <TabsContainer>
        <div>
          <MuiThemeProvider theme={tabTheme}>
            <Tabs
              value={value}
              onChange={this.handleTabsChange}
              scrollButtons="off"
            >
              <Tab
                icon={<Message />}
                label={(
                  unreadCount && <Badge number={3} />
                )}
              />
              <Tab
                icon={<Group />}
                label={(
                  unreadCount && <Badge number={1} />
                )}
              />
              <Tab
                icon={<LocalPhone />}
              />
            </Tabs>
          </MuiThemeProvider>

          <TabsContent>
            {value === 0 && (
            <TabContainer>
              <Search />
              <TabsDialogsContainer>
                <StatusChecker
                  isLoading={isLoading}
                  noError={noError}
                  dialogs={groups}
                  error={isError}
                />
              </TabsDialogsContainer>
            </TabContainer>
            )}
            {value === 1 && (
              <TabContainer>
                <Search />
                <TabsDialogsContainer>
                  <StatusChecker
                    isLoading={isLoading}
                    noError={noError}
                    dialogs={dialogs}
                    error={isError}
                  />
                </TabsDialogsContainer>
              </TabContainer>
            )}
            {value === 2 && (
              <TabContainer>
                <Search />
                <TabsDialogsContainer>
                  <StatusChecker
                    isLoading={isLoading}
                    noError={noError}
                    numbers={numbers}
                    error={isError}
                  />
                </TabsDialogsContainer>
              </TabContainer>
            )}
          </TabsContent>
        </div>
        <MuiThemeProvider theme={menuTheme}>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleSettingsClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={this.handleSettingsClose}>New group</MenuItem>
            <MenuItem onClick={this.handleSettingsClose}>Settings</MenuItem>
            <MenuItem onClick={this.handleSettingsClose}>FAQ</MenuItem>
            <MenuItem onClick={this.handleSettingsClose}>About</MenuItem>
            <MenuItem onClick={this.handleSettingsClose}>Logout</MenuItem>
          </Menu>
        </MuiThemeProvider>

        <PanelSettings>
          <Settings onClick={this.handleSettingsClick} />

        </PanelSettings>

      </TabsContainer>
    );
  }
}

export default connect(mapStateToProps)(TabsMain);
