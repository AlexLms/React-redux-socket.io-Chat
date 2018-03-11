import React from 'react';
import { UserStatus, UserPhoto, UserName, UserProfile, ProfileDescription, UserInfo, ProfileNotification } from './styles.js';

// redux
import { connect } from 'react-redux';
import { showNotify } from '~/actions/actionCreators';

// icons
import FaBellO from 'react-icons/lib/fa/bell-o';
import FaBellSlashO from 'react-icons/lib/fa/bell-slash-o';

const mapStateToProps = (state) => ({
  currentUserData: state.ui.currentUserData,
  notify: state.ui.notify,
});

const CurrentUser = (props) => (
  <UserProfile>
    <UserPhoto>
      <img src={props.currentUserData.userImg} alt="" />
      <UserStatus onlineStatus={props.currentUserData.userStatus} />
    </UserPhoto>
    <UserInfo>
      <UserName>{props.currentUserData.userName}</UserName>
      <ProfileDescription>{props.currentUserData.userTopic}</ProfileDescription>

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

