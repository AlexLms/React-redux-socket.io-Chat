import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import MainApp from './app';

import io from 'socket.io-client';
import { sendMessage } from './actions/actionCreators';
const socket = io('http://localhost:5001');

socket.on('chat message', (message) => {
  store.dispatch(sendMessage(message.author, message.text));
});

const Main = (
  <Provider store={store}>
    <MainApp />
  </Provider>
);

ReactDOM.render(Main, document.getElementById('root'));

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as actionCreators from './actions/actionCreators';

// const mapStateToProps = (state) => ({
//   chatPanel: state.chatPanel,
//   chatMessage: state.chatMessage,
//   currentUserData: state.currentUserData,
//   messages: state.messages,
// });
// const mapDispachToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

// const MainApp = connect(mapStateToProps, mapDispachToProps)(App);

// export default MainApp;
