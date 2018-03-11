import styled from 'styled-components';
import status from '~/files/img/status_online.png';


const toggleMessageStatus = active => {
  if (active) {
    return '1';
  } else if (active === false) {
    return '0';
  } else if (active === undefined) {
    return '0';
  }
};
const toggleIconOpacity = active => {
  if (active) {
    return '1';
  } else if (active === false) {
    return '.5';
  } else if (active === undefined) {
    return '.5';
  }
};
export const SelectionsIcon = styled.div`
  width: ${props => props.width.main};
  height: ${props => props.height.main};
  background-image: url(${(props) => props.img.main});
  background-position: ${props => props.friends ? '0px 4px' : '0 0'};
  opacity: ${(props) => toggleIconOpacity(props.status)};
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  &:before {
    content: '';
    background-size: 100%;
    position: absolute;
    top: -9px;
    right: -9px;
    opacity: ${(props) => toggleMessageStatus(props.status)};
    background-repeat: no-repeat;
    background-image: url(${status});
    padding: 10px;
  }
`;
const toggleActive = active => {
  if (active) {
    return '1';
  } else if (active === false) {
    return '.5';
  }
};
export const SelectionsIconFa = styled.div`
  width: 22px;
  height: 22px;
  .FaPhone {
    font-size: 21px;
    color: #fff;
    opacity: ${props => props.status.opacity};
  }
  .FaMenu {
    font-size: 21px;
    color: #fff;
    opacity: ${(props) => toggleActive(props.active)};
  }
`;
SelectionsIconFa.defaultProps = {
  status: {
    opacity: '.5',
  },
};
export const SelectionsWrap = styled.div`
  position: relative;
  .tabList {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
  li.react-tabs__tab--selected {
    ${SelectionsIcon} {
      opacity: 1;
    },
    ${SelectionsIconFa} {
      .FaPhone {
        opacity: 1;
      }
    }
  }
  .UserSettings {
    position: absolute;
    top: 40px;
    right: 0;
    background-color: #fff;
    ul {
      padding-top: 14px;
    }
    .SettingsItem {
      cursor: pointer;
      font-size: 18px;
      font-family: 'catamaran-regular';
      padding: 11px 19px 10px 21px;
      color: #261c46;
      &:hover {
        background-color: #261c461c;
        color: #000;
      }
    }
    .faIcon {
      min-width: 18px;
      margin-right: 40px;
      position: relative;
      top: -1px;
    }
  }
`;
export const SelectionsIconCont = styled.div`
  cursor: pointer;
  padding: 5px;
`;
export const TabList = styled.div`
  display: flex;
`;