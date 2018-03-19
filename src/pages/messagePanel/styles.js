import styled from 'styled-components';

export const MessagesPanel = styled.div`
  width: 69%;
`;
export const MessagePanelBody = styled.div`
  background-color: #ebeafd;
  height: 95vh;
  height: -webkit-calc(100vh - 205px);
  height: -moz-calc(100vh - 205px);
  height: calc(100vh - 205px);
  height: calc(100vh - 205px);
  .historyMessagesGroup {
    height: 95%;
    height: -webkit-calc(100% - 26px);
    height: -moz-calc(100% - 26px);
    height: calc(100% - 26px);
    height: calc(100% - 26px);
  }
`;
const isTyping = typing => {
  if (typing === 'typing') {
    return 'block';
  } else if (typing === 'notTyping') {
    return 'none';
  }
};
export const MessageTyping = styled.div`
  margin-left: 60px;
  padding-bottom: 10px;
  display: ${(props) => isTyping(props.typing)};
  span {
    font-family: 'catamaran-regular';
    font-size: 12px;
    color: #8b8da9;
    &:not(:first-child) {
      margin-left: 5px;
    }
  }
`;
