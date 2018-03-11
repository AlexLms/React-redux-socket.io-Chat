import React from 'react';
import { DialogWrap, Dialog, DialogPhoto, DialogMessageWrapp, DialogPeer, PeerId, PeerStatus, DialogShortMessage, ChatUserStatus, DialogMetaStatus } from './styles.js';

const DialogMessage = (props) => (
  <DialogWrap>
    <Dialog href="">
      <DialogPhoto>
        <img src={props.userImg} alt="" />
        <ChatUserStatus onlineStatus={props.onlineStatus} />
      </DialogPhoto>
      <DialogMessageWrapp>
        <DialogPeer>
          <PeerId>{props.userName}</PeerId>
          <PeerStatus>{props.userSeen}</PeerStatus>
        </DialogPeer>
        <div className="dialogMessageCont">
          <DialogShortMessage>{props.userMessage}</DialogShortMessage>
        </div>
      </DialogMessageWrapp>
      <div className="dialogMeta">
        <DialogMetaStatus status={props.messageStatus} />
      </div>
    </Dialog>
  </DialogWrap>
);

export default DialogMessage;
