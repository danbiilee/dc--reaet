import React from 'react';
import styled, { css } from 'styled-components';
import { useRouteMatch } from 'react-router-dom';
import VideoCard from './videoCard';

const Ul = styled.ul`
  ${(props) =>
    props.orientation === 'portrait' &&
    css`
      display: flex;
      flex-wrap: wrap;
      padding: 30px;
      li {
        width: 25%;
      }
    `}
`;

const VideoList = ({ list }) => {
  /* 
    Differentiate component orientation for using common component 
    - landscape: at main page
    - portrait: at detail/filtered page
  */
  const match = useRouteMatch();
  const orientation = match.params.hasOwnProperty('videoId')
    ? 'landscape'
    : 'portrait';

  return (
    <Ul orientation={orientation}>
      {list.length > 0
        ? list.map((item) => (
            <VideoCard key={item.id} id={item.id} snippet={item.snippet} />
          ))
        : 'loading...'}
    </Ul>
  );
};

export default VideoList;
