import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import configureStore from './redux/store/configureStore'
import './firebase/firebase'
import { loadAndSetTodo } from './redux/actions/todo';

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>)

ReactDOM.render(
  <p>Loading</p>,
  document.getElementById('root')
);

store.dispatch(loadAndSetTodo()).then(() => {
  ReactDOM.render(
    jsx,
    document.getElementById('root')
  );
})
