import { URL } from '../../../utility/baseURL';


import React, { useRef } from 'react';


const Audio = (props) => {
    const { podcastId } = props;
    const { changedPlayBack } = props;
    const podcastRef = useRef();

    const handleIt = () => {
        changedPlayBack(podcastRef);    
    }

    return (
         <audio ref={podcastRef} autoPlay onTimeUpdate={handleIt}>
        <source src={`${URL}/podcasts/${podcastId}/listen`} />
      </audio>
    )

}

export default Audio;