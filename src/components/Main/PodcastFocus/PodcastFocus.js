import React, { useRef, useState, useEffect, useCallback } from 'react';
import classes from './PodcastFocus.module.css';
import { useParams } from 'react-router-dom';


//REDUX STUFF
import { useDispatch, useSelector } from 'react-redux';
import {likeUnlikePodcast} from '../../../context/podcast/podcast-actions';

//COMPONENTS
import PlayPause from '../../UI/PlayPause/PlayPause';


//utility
import {transformPodcastDuration, transformCurrentTiming} from '../../../utility/format.date';



function PodcastFocus() {
  const podcastRef = useRef();
  const [percentage, setPercentage] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [durationString, setDurationString] = useState("00:00:00");
  const [currentTimeString, setCurrentTimeString] = useState("00:00:00");
  
  const username = useSelector(state => state.authentication.username);
  const token = useSelector(state => state.authentication.token);

  const dispatch = useDispatch();
  const [like, setLike] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const params = useParams();
  const { podcastId } = params;


  useEffect(() => {
    fetch(`http://localhost:8000/podcasts/${podcastId}/get`).then(res => {
    console.log(res); 
    return res.json();
    }).then((data) => {
      const { likes } = data;
      const index = likes.findIndex(like => like.author === username);
      if(index >=  0) {
        setLike(true)
      } else {
        setLike(false);
      };

    }).catch(err => console.log(err));
  }, [podcastId, username]);


  const toggleLike = () => {
    dispatch(likeUnlikePodcast(podcastId, token, username));
    setLike(prevState => !prevState);
  };
  
  

  useEffect(() => {
   setDurationString(transformPodcastDuration(duration));
  }, [duration]);

  useEffect(() => {
    setCurrentTimeString(transformCurrentTiming(currentTime, (durationString.split(':'))));
  }, [currentTime, durationString]);


  const changedPlayBack = (e) => {
      const currentTime = Math.floor(podcastRef.current.currentTime);
      const time = podcastRef.current.duration;
      const currentPercentage = Math.floor((currentTime / time) * 100);
      setCurrentTime(currentTime);
      setDuration(time);
      setPercentage(currentPercentage);
  };

  const playerClicked = useCallback(() => {
      setClicked(prevState => !prevState);
  }, []);

  
  const pausePlayPodcast = (e) => {
    if(e) {
      e.stopPropagation();
    };

    setClicked(false);
    if(!paused) {
      podcastRef.current.pause();
      setPaused(true);
    } else {
      podcastRef.current.play();
      setPaused(false);
    }
  };



  return (
    <div className={classes.listenPodcast}>
      <audio ref={podcastRef} autoPlay onTimeUpdate={changedPlayBack}>
        <source src={`http://localhost:8000/podcasts/${podcastId}/listen`} />
      </audio>
      <div className={classes.player} onClick={playerClicked} >

          <div style={{width: percentage + "%",
                      transition: "all 3s ease"}} className={classes.barPodcast}>
          </div>
          <div className={classes.barBackground}>

          </div>
         { clicked &&  <PlayPause hide={playerClicked} play={ pausePlayPodcast } paused={paused} /> }
      </div>

      <p className={classes.currentTime}>{currentTimeString}/{durationString}</p>
      <p onClick={toggleLike}>{like ? "Unlike" : "Like"}</p>
    </div>
  );
}

export default PodcastFocus;
