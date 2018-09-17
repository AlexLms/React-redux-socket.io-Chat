import React, { Component } from 'react';
import Notifications from '@material-ui/icons/Notifications';
import NotificationsOff from '@material-ui/icons/NotificationsOff';

// redux
import { connect } from 'react-redux';

import Avatar from 'src/static/imgs/default-user.png';
import {
  UserPhoto,
  UserProfileInfo,
  UserName,
  ProfileDescription,
  UserProfile,
  ProfileNotification,
} from './styles';

const mapStateToProps = state => ({
  userName: state.user.author,
});

class UserPannel extends Component {
  state = {
    isNotificationOn: true,
  }

  toggleNotification = () => {
    const { isNotificationOn } = this.state;
    this.setState({
      isNotificationOn: !isNotificationOn,
    });
  }

  render() {
    const { isNotificationOn } = this.state;
    const { userName } = this.props;
    const notification = isNotificationOn
      ? (
        <Notifications>
          notifications
        </Notifications>
      )
      : (
        <NotificationsOff>
          notifications_off
        </NotificationsOff>
      );
    return (
      <UserProfile>
        <UserPhoto>
          <img src={Avatar} alt="Avatar" />
        </UserPhoto>
        <UserProfileInfo>
          <UserName>
            {userName}
          </UserName>
          <ProfileDescription>
            Profile desctiption
          </ProfileDescription>
        </UserProfileInfo>
        <ProfileNotification onClick={this.toggleNotification}>
          {notification}
        </ProfileNotification>
      </UserProfile>
    );
  }
}

export default connect(mapStateToProps)(UserPannel);
