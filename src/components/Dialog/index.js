import React from 'react';

// import DogImg from 'src/static/imgs/dog.jpg';
import {
  UserPhotoContainer,
  UserPhoto,
  UserStatus,
  DialogPeer,
  PeerId,
  PeerStatus,
  DialogShortMessage,
  DialogContainer,
  DialogMessageContainer,
  UnreadCount,
} from './styles';

const Dialog = ({ dialog }) => {
  return (
    <DialogContainer href="#">
      <UserPhotoContainer>
        <UserPhoto src={dialog.dialogPhoto} alt="UserPhoto" />
        <UserStatus status={dialog.status} />
      </UserPhotoContainer>
      <DialogMessageContainer>
        <DialogPeer>
          <PeerId>{dialog.peerId}</PeerId>
          <PeerStatus>{dialog.seenStatus}</PeerStatus>
        </DialogPeer>
        <DialogShortMessage>{dialog.message}</DialogShortMessage>
        <UnreadCount>
          {dialog.unreadCount}
        </UnreadCount>
      </DialogMessageContainer>
    </DialogContainer>
  );
};

export default Dialog;
