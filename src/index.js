import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ChessApp from './reducers';
import { Provider } from 'react-redux';
import { createPersistentStore } from './persistence';
import '../style/index.scss';

const store = createPersistentStore(ChessApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
