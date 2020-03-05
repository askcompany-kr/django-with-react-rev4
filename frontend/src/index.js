import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from 'App3';
import App4 from 'App4';
import App5 from 'App5';
import App6 from 'App6';
import TodoList from 'TodoList';
import EpisodeList from 'EpisodeList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App6 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
