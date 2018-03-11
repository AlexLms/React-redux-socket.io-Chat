import styled from 'styled-components';

const slideToggle = visible => {
  if (visible === true) {
    return 'visible';
  } else if (visible === false) {
    return 'hidden';
  }
};
const heightToggle = (visible, height = '100px') => {
  if (visible === true) {
    return height;
  } else if (visible === false) {
    return '0px';
  }
};
export const ToggleHeader = styled.div`
  height: ${(props) => heightToggle(props.visible, props.height)};
  transition: all .5s ease;
  overflow: hidden;
  z-index: 2;
  visibility: ${(props) => slideToggle(props.visible)};
  width: 100%;
`;
