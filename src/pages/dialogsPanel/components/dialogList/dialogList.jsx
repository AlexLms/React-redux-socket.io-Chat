import React from 'react';
import { NavPills } from './styles.js';

// components
import DialogMessage from './../dialogMessage/dialogMessage';

const DialogList = (props) => (
  <div>
    <NavPills>
      {
        props.messages.map(user =>
          (<DialogMessage
            userName={user.name}
            userMessage={user.text}
            userSeen={user.seen}
            userImg={user.img}
            onlineStatus={user.onlineStatus}
            messageStatus={user.messageStatus}
          />))
      }
    </NavPills>
  </div>
);

export default DialogList;
