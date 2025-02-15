import React, { useEffect, useState } from "react";
import { YOUTUBE_Videos_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_Videos_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default Videocontainer;
