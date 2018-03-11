import React from 'react';

import { SendForm, SendField, SendButtons, AttachBtn, IconEmoji, SubmitSend } from './styles.js';

const MessageSend = () => (
  <div className="messagePanelBottom">
    <div className="sendPanelWrap">
      <SendForm>
        <SendField>
          <textarea name="" id="" className="message_field" placeholder="Write a message" />
        </SendField>
        <SendButtons>
          <AttachBtn>
            <input type="file" id="file1" className="inputfile" multiple />
            <label htmlFor="file1" />
          </AttachBtn>
          <div className="composerEmoji">
            <IconEmoji />
          </div>
          <div className="submitSendWrap">
            <SubmitSend />
          </div>
        </SendButtons>
      </SendForm>
    </div>
  </div>
);

export default MessageSend;
