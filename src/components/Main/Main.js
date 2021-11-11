import React from 'react';
import { Routes, Route } from 'react-router-dom';

import classes from './Main.module.css';


// not found page
import NotFound from '../UI/NotFound/NotFound';
import Landing from './Landing/Landing';
import Podcasts from './Podcasts/Podcasts';
import AddPodcast from './AddPodcast/AddPodcast';
import PodcastFocus from './PodcastFocus/PodcastFocus';




function Main() {
  return (
    <div className={classes.homeContainer}>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/podcasts" exact element={<Podcasts /> } />
        <Route path="/podcasts/listen/:podcastId" exact  element={<PodcastFocus />} />
        <Route path="/add-podcast" exact element={ <AddPodcast /> } />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default React.memo(Main);