import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ id, snippet }) => {
  return (
    <Link to={`/v=${id}`}>
      <li>
        <img src={snippet.thumbnails.medium.url} alt="thumbnail" />
        <p>{snippet.title}</p>
        <p>{snippet.channelTitle}</p>
        <p>{snippet.publishedAt}</p>
      </li>
    </Link>
  );
};

export default VideoCard;
