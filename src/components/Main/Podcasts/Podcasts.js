import React, { useEffect } from 'react';
import classes from './Podcasts.module.css';

//REDUX STUFF
import { useSelector, useDispatch } from 'react-redux';
import { fetchPodcasts } from '../../../context/podcast/podcast-actions';

//COMPONENTS
import Podcast from './Podcast/Podcast';


let fetched = false;

const Podcasts = () => {
  // const [podcasts, setPodcasts] = useState([]);
  const podcasts = useSelector((state) => state.podcast.podcasts);
  const dispatch = useDispatch();

  // this runs one time
  useEffect(() => {
    if(!fetched) {
      dispatch(fetchPodcasts());
    };
    fetched = true;
  }, [dispatch]);


   if(!podcasts) {
     return <p>Loading...</p>
   } 

   if(podcasts.length === 0) {
     return <p>Non vi è alcun podcast</p>
   }

  return (
    <div className={classes.containerPodcasts}>
      { podcasts.map((podcast) => (
        <Podcast key={podcast._id} podcast={podcast} />
      ))}
    </div>
  );
};

export default React.memo(Podcasts);
