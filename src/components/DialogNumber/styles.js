import styled from 'styled-components';
import {
  DialogContainer,
  UserPhoto,
  PeerId,
  DialogShortMessage,
  DialogMessageContainer,
  PeerStatus,
} from 'src/components/Dialog/styles';
import styles from 'src/styles/base/colors';

export const DialogNumberContainer = styled(DialogContainer)`

`;
export const NumberImgContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  top: -2px;
  &:before {
    width: 32px;
    height: 32px;
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    border: 2px solid ${styles.darkPurple};
    border-radius: 50%;
  }
`;
export const NumberImg = styled(UserPhoto)`
  background-color: #fff;
  width: 30px;
  height: 30px;
`;
export const NumberTopic = styled.div`
  display: flex;
  align-items: center;
`;
export const NumberId = styled(PeerId)`
  font-size: 14px;
`;
export const CallCount = styled.div`
  color: ${styles.greyPurple};
  font-family: "catamaran-regular";
  margin-left: 10px;
`;
export const NumberStatus = styled(DialogShortMessage)`
  margin-top: -2px;
`;
export const NumberTime = styled(PeerStatus)`
  top: 20px;
  right: 27px;
`;
export const NumberInfo = styled(DialogMessageContainer)`
`;
