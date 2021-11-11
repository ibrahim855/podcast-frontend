import React, { useRef, useState, useEffect, useCallback } from 'react';
import classes from './PodcastFocus.module.css';
import { useParams } from 'react-router-dom';


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

  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const params = useParams();
  const { podcastId } = params;

  useEffect(() => {
   setDurationString(transformPodcastDuration(duration));
  }, [duration]);

  useEffect(() => {
    setCurrentTimeString(transformCurrentTiming(currentTime, (durationString.split(':'))));
  }, [currentTime]);


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
    </div>
  );
}

export default PodcastFocus;
