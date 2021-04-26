import React from 'react';
import VideoList from '../layout/videoList';

const Main = ({ list }) => {
  return (
    <main>
      <VideoList list={list} />
    </main>
  );
};

export default Main;
