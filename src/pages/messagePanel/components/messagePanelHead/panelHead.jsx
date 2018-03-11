import React from 'react';
import Modal from 'react-responsive-modal';
import SlideToggle from '~/pages/common/slideToggle/SlideToggle';

// img
import settingsImg from '~/files/img/settingsIcon.png';

// styles
import { MessagePeerImg, MessagePeerStatus, MessagePanelHead, MessagePeerInfo, MessagePeerTitle, MessageHeadStatus, MessagePeerTitleWrap, MessagePeerAboutWrap, ChatMembers, ChatLink, PeerMedia, PeerChatSettings } from './styles.js';

const PanelHead = (props) => (
  <MessagePanelHead>
    <MessagePeerTitleWrap>
      <MessagePeerImg>
        <img src={props.chatPanel.groupImg} alt="" />
        <MessagePeerStatus onlineStatus={props.chatPanel.groupStatus} />
      </MessagePeerImg>
      <MessagePeerInfo>
        <MessagePeerTitle>{props.chatPanel.groupName}</MessagePeerTitle>
        <MessageHeadStatus>{props.chatPanel.groupInfo}</MessageHeadStatus>
      </MessagePeerInfo>
    </MessagePeerTitleWrap>
    <MessagePeerAboutWrap>
      <ChatMembers onClick={() => props.toggleModal('modal5')}>{`${props.chatPanel.groupMemb} participants`}</ChatMembers>
      <ChatLink onClick={() => props.toggleModal('modal6')}>Invite</ChatLink>
      <PeerMedia className="PeerMedia" onClick={props.showChatSettings}>
        <img src={settingsImg} alt="" />
      </PeerMedia>
      <PeerChatSettings>
        <SlideToggle className="PeerChatSettings" visible={props.visibleChatSettings} height="245px">
          <ul>
            <li><div className="PeerChatNav" onClick={props.handleFocus} onKeyPress={props.handleFocus}>Search messages</div></li>
            <li><div className="PeerChatNav">Photos</div></li>
            <li><div className="PeerChatNav">Videos</div></li>
            <li><div className="PeerChatNav">Files</div></li>
            <li><div className="PeerChatNav">Audio</div></li>
            <li><div className="PeerChatNav">Shared links</div></li>
          </ul>
        </SlideToggle>
      </PeerChatSettings>
    </MessagePeerAboutWrap>
    <Modal
      open={props.modal5}
      onClose={() => props.toggleModal('modal5')}
      little
    >
      <h2>Модалка участники</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
        hendrerit risus, sed porttitor quam.
      </p>
    </Modal>
    <Modal
      open={props.modal6}
      onClose={() => props.toggleModal('modal6')}
      little
    >
      <h2>Модалка пригласить</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
        hendrerit risus, sed porttitor quam.
      </p>
    </Modal>
  </MessagePanelHead>
);


export default PanelHead;
