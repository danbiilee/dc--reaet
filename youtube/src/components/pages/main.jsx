import React from 'react';
import Header from '../layout/header';
import VideoList from '../layout/videoList';

const Main = ({ list }) => {
  return (
    <>
      <Header />
      <main>
        <VideoList list={list} />
      </main>
    </>
  );
};

export default Main;
