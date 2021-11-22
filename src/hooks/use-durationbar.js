import { useState} from 'react';

import { URL } from '../utility/baseURL';

let listened = false;

const useDurationBar = (podcastId) => {
  const [percentage, setPercentage] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


    


    const changedPlayBack = async (referenceAudio) => {
      const currentTime = Math.floor(referenceAudio.current.currentTime);
      const time = referenceAudio.current.duration;
      const currentPercentage = Math.floor((currentTime / time) * 100);
      
      if(currentTime >= time/2 && !listened) {
        await fetch(URL + '/listen/' + podcastId);
        listened = true;
      };


      
      setCurrentTime(currentTime);
      setDuration(time);
      setPercentage(currentPercentage);
  };


  return {
    percentage,
    currentTime,
    duration,
    changedPlayBack,
  }
}

export default useDurationBar;