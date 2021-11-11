import React, { useEffect, useState } from 'react';
import classes from './Podcasts.module.css';


//COMPONENTS
import Podcast from './Podcast/Podcast';


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
        <Podcast key={podcast._id} podcast={podcast} />
      ))}
    </div>
  );
};

export default React.memo(Podcasts);
