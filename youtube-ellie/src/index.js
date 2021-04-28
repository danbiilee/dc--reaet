import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './app';
import './index.css';
import Youtube from './service/youtube';

/* 
  유튜브와 통신하는 base client 생성
  -> 유튜브 클래스 내부에서는 어떤 것들을 사용해서 통신을 하는지 모르게 하는 방법!
*/
const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }, // base params 설정
});

// index.js가 호출될 때 딱 한번만 만들어짐!
const youtube = new Youtube(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);
