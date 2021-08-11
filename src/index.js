import React from 'react';
import ReactDOM from 'react-dom';
import MessageList from './components/message-list/MessageList';

const NewApp = require('./components/message-list/MessageList').default;

function renderApp(App) {
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp(MessageList);

if (module.hot) {
  module.hot.accept('./components/message-list/MessageList', () => {
    renderApp(NewApp);
  });
};
