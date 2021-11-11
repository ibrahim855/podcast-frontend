import React, { useEffect, useState } from 'react';
import classes from './Podcasts.module.css';

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/podcasts/')
      .then((res) => {
        return res.json();
      })
      .then((podcasts) => {
        console.log(podcasts);
        setPodcasts(podcasts);
      });
  }, []);

  return (
    <div className={classes.containerPodcasts}>
      {podcasts.map((podcast) => (
        <audio
          key={podcast._id}
          controls
        >
            <source  src={`http://localhost:8000/podcasts/${podcast.podcastId}/listen`} />
        </audio>
      ))}
    </div>
  );
};

export default React.memo(Podcasts);
