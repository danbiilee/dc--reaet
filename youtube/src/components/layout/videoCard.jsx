import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ id, snippet }) => {
  return (
    <li>
      <Link to={`/v=${id}`}>
        <img src={snippet.thumbnails.medium.url} alt="thumbnail" />
        <p>{snippet.title}</p>
        <p>{snippet.channelTitle}</p>
        <p>{snippet.publishedAt}</p>
      </Link>
    </li>
  );
};

export default VideoCard;
