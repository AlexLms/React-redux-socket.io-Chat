import React from 'react';
import { UserStatus, UserPhoto, UserName, UserProfile, ProfileDescription, UserInfo, ProfileNotification } from './styles.js';
import AnonImg from '~/files/img/user-img.png';
// redux
import { connect } from 'react-redux';
import { showNotify } from '~/actions/actionCreators';

// icons
import FaBellO from 'react-icons/lib/fa/bell-o';
import FaBellSlashO from 'react-icons/lib/fa/bell-slash-o';

const mapStateToProps = (state) => ({
  // currentUserData: state.ui.currentUserData,
  userName: state.chat.author,
  notify: state.ui.notify,
});

const CurrentUser = (props) => (
  <UserProfile>
    <UserPhoto>
      <img src={AnonImg} alt="" />
      <UserStatus onlineStatus="online" />
    </UserPhoto>
    <UserInfo>
      <UserName>{props.userName}</UserName>
      <ProfileDescription>Available for freelance work.</ProfileDescription>

      <ProfileNotification onClick={props.showNotify}>
        {props.notify ?
          <FaBellO className="FaBellO" />
          :
          <FaBellSlashO className="FaBellSlashO" />
        }
      </ProfileNotification>
    </UserInfo>
  </UserProfile>
);

const CurrentUserConnect = connect(mapStateToProps, { showNotify })(CurrentUser);

export default CurrentUserConnect;

