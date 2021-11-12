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
  

  return (
    <div className={classes.containerPodcasts}>
      {podcasts.map((podcast) => (
        <Podcast key={podcast._id} podcast={podcast} />
      ))}
    </div>
  );
};

export default React.memo(Podcasts);
