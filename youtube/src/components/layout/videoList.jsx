import React from "react";
import VideoCard from "./videoCard";

const VideoList = ({ list }) => {
  return (
    <main>
      <ul>
        {list.length > 0
          ? list.map((item) => (
              <VideoCard key={item.id} id={item.id} snippet={item.snippet} />
            ))
          : "loading..."}
      </ul>
    </main>
  );
};

export default VideoList;
