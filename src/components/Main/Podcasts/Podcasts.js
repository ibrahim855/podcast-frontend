import React from "react";
import classes from "./Podcasts.module.css";

//REDUX STUFF
import { useSelector } from "react-redux";

//COMPONENTS
import Podcast from "./Podcast/Podcast";

const Podcasts = () => {
  // const [podcasts, setPodcasts] = useState([]);
  const podcasts = useSelector((state) => state.podcast.podcasts);

  //  if(!podcasts) {
  //    return <p>Loading...</p>
  //  }

  //  if(podcasts.length === 0) {
  //    return <p>Non vi è alcun podcast</p>
  //  }
    return (
    <div className={classes.containerPodcasts}>
      {podcasts.map((podcast) => (
        <Podcast key={podcast._id} podcast={podcast} />
      ))}
    </div>
  );
};

export default React.memo(Podcasts);
