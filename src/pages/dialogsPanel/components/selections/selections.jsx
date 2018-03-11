import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Modal from 'react-responsive-modal';

// icons
import FaGroup from 'react-icons/lib/fa/group';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import FaQuestionCircle from 'react-icons/lib/fa/question-circle';
import FaDiamond from 'react-icons/lib/fa/diamond';
import FaPhone from 'react-icons/lib/fa/phone';
import FaCog from 'react-icons/lib/fa/cog';
import SlideToggle from '~/pages/common/slideToggle/SlideToggle';

// styles
import { SelectionsIcon, SelectionsWrap, SelectionsIconCont, SelectionsIconFa } from './styles.js';

// components
import DialogsSearch from './../dialogsSearch/dialogsSearch';
import DialogList from './../dialogList/dialogList';

// imgs
import messages from '~/files/img/message-icon.png';
import friends from '~/files/img/friends-icon.png';

// redux
import { connect } from 'react-redux';
import { toggleModal, showUserSettings, toggleActive } from '~/actions/actionCreators';

const mapStateToProps = (state) => ({
  userSettings: state.ui.userSettings,
  burgerActive: state.ui.burgerActive,
  modal1: state.toggleModal.modal1,
  modal2: state.toggleModal.modal2,
  modal3: state.toggleModal.modal3,
  modal4: state.toggleModal.modal4,

  messages: state.ui.messages,
  activeIconStatus: state.ui.newMessagesStatus.newIncomeMessage,
});

class Selections extends React.Component {
  onShowUserSettings = (e) => {
    e.stopPropagation();
    this.props.showUserSettings();
    this.props.toggleActive();
  }
  render() {
    return (
      <SelectionsWrap>
        <Tabs>
          <TabList className="tabList">
            <Tab>
              <SelectionsIconCont>
                <SelectionsIcon
                  status={this.props.activeIconStatus}
                  width={{ main: '20px' }}
                  height={{ main: '20px' }}
                  img={{ main: messages }}
                />
              </SelectionsIconCont>
            </Tab>
            <Tab>
              <SelectionsIconCont>
                <SelectionsIcon
                  friends
                  width={{ main: '22px' }}
                  height={{ main: '22px' }}
                  img={{ main: friends }}
                />
              </SelectionsIconCont>
            </Tab>
            <Tab>
              <SelectionsIconCont>
                <SelectionsIconFa>
                  <FaPhone className="FaPhone" />
                </SelectionsIconFa>
              </SelectionsIconCont>
            </Tab>
            <li>
              <SelectionsIconCont className="SelectionsIconCont" onClick={this.onShowUserSettings}>
                <SelectionsIconFa active={this.props.burgerActive}>
                  <FaEllipsisV className="FaMenu" />
                </SelectionsIconFa>
              </SelectionsIconCont>
            </li>
          </TabList>
          <TabPanel>
            <DialogsSearch inputRef={this.props.inputRef} />
            <DialogList messages={this.props.messages} />
          </TabPanel>
          <TabPanel>
            <DialogsSearch inputRef={this.props.inputRef} />
            friends list
          </TabPanel>
          <TabPanel>
            <DialogsSearch inputRef={this.props.inputRef} />
            numbers
          </TabPanel>
        </Tabs>
        <SlideToggle className="UserSettings" visible={this.props.userSettings} height="187px">
          <ul>
            <li>
              <div className="SettingsItem" onClick={() => this.props.toggleModal('modal1')} onKeyPress={() => this.props.toggleModal('modal1')} >
                <FaGroup className="faIcon" />
                New group
              </div>
            </li>
            <li>
              <div className="SettingsItem" onClick={() => this.props.toggleModal('modal2')} onKeyPress={() => this.props.toggleModal('modal2')}>
                <FaCog className="faIcon" />
                Settings
              </div>
            </li>
            <li>
              <div className="SettingsItem" onClick={() => this.props.toggleModal('modal3')} onKeyPress={() => this.props.toggleModal('modal3')}>
                <FaQuestionCircle className="faIcon" />
                Client FAQ
              </div>
            </li>
            <li>
              <div className="SettingsItem" onClick={() => this.props.toggleModal('modal4')} onKeyPress={() => this.props.toggleModal('modal4')}>
                <FaDiamond className="faIcon" />
                About
              </div>
            </li>
          </ul>
        </SlideToggle>
        <Modal
          open={this.props.modal1}
          onClose={() => this.props.toggleModal('modal1')}
          little
        >
          <h2>Модалка New Group</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
        <Modal
          open={this.props.modal2}
          onClose={() => this.props.toggleModal('modal2')}
          little
        >
          <h2>Модалка Settings</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
        <Modal
          open={this.props.modal3}
          onClose={() => this.props.toggleModal('modal3')}
          little
        >
          <h2>Модалка FAQ</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
        <Modal
          open={this.props.modal4}
          onClose={() => this.props.toggleModal('modal4')}
          little
        >
          <h2>Модалка About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </SelectionsWrap>
    );
  }
}

const SelectionsConnect = connect(mapStateToProps, { toggleModal, showUserSettings, toggleActive })(Selections);

export default SelectionsConnect;
