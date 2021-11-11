import React from 'react';
import classes from './PodcastFocus.module.css';

import { useParams } from 'react-router-dom';

function PodcastFocus() {
  const params = useParams();
  const { podcastId } = params;
  console.log(podcastId);
  return (
    <div>
      <audio controls autoPlay>
        <source src={`http://localhost:8000/podcasts/${podcastId}/listen`} />
      </audio>
    </div>
  );
}

export default PodcastFocus;
