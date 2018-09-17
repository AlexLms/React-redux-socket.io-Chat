import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import store from 'src/store';
import { sendMessage } from 'src/actions/chat';

// sockets
import io from 'socket.io-client';
const socket = io();

socket.on('chat message', (message) => {
  store.dispatch(sendMessage(message.author, message.text));
});

// components
import Home from 'src/pages/Home';

import './styles';

const Main = (
  <Provider store={store}>
    <Home />
  </Provider>
);

ReactDOM.render(Main, document.getElementById('root'));
