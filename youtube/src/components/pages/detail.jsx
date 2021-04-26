import React, { useState, useEffect, useRef } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import VideoList from '../layout/videoList';

const Main = styled.article`
  display: flex;
  padding: 30px 100px;
`;
const Article = styled.article`
  background-color: pink;
`;
const Aside = styled.aside`
  background-color: yellow;
`;

const Detail = ({ list }) => {
  // Set video id from router param
  const match = useRouteMatch();
  if (!match.params.hasOwnProperty('videoId')) {
    throw new Error('wrong access!!!');
  }
  const [videoId, setVideoId] = useState(match.params.videoId);
  const [snippet, setSnippet] = useState();
  const videoRef = useRef();

  useEffect(() => {
    setVideoId(match.params.videoId);
  }, [match.params.videoId]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_BASE_URL}/videos?key=${process.env.REACT_APP_API_KEY}&id=${videoId}`;

    // Render video iframe
    fetch(`${url}&part=player`)
      .then(res => res.json())
      .then(data => {
        const div = document.createElement('div');
        div.innerHTML = data.items[0].player.embedHtml;
        videoRef.current.appendChild(div.firstChild);
      })
      .catch(console.log);

    // Get snippet
    fetch(`${url}&part=snippet`)
      .then(res => res.json())
      .then(data => setSnippet(data.items[0].snippet))
      .catch(console.log);

    return () => {};
  }, [videoId]);

  return (
    <Main>
      <Article>
        <section ref={videoRef}></section>
        {snippet && (
          <>
            <section>
              <h2>{snippet.title}</h2>
              <p>{snippet.publishedAt}</p>
            </section>
            <section>
              <h3>{snippet.channelTitle}</h3>
              <p>{snippet.description}</p>
            </section>
          </>
        )}
      </Article>
      <Aside>
        <VideoList list={list} />
      </Aside>
    </Main>
  );
};

export default Detail;
