import React, { useState, useEffect } from 'react';


//UTILITY FUNCTIONS
import { transformPodcastDuration, transformCurrentTiming } from '../utility/format.date';





const useTextDuration = () => {
    const [durationString, setDurationString] = useState("00:00:00");
    const [currentTimeString, setCurrentTimeString] = useState("00:00:00");


    const changeDurationString = (duration) => {
           setDurationString(transformPodcastDuration(duration));
    };


    const changeCurrentTimeString = (currentTime) => {
        setCurrentTimeString(transformCurrentTiming(currentTime, (durationString.split(':'))));
    }

    return {
        durationString, 
        currentTimeString,
        changeDurationString,
        changeCurrentTimeString
    };

}


export default useTextDuration;