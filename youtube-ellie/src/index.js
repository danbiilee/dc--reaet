import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';
import Youtube from './service/youtube';

// index.js가 호출될 때 딱 한번만 만들어짐!
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
