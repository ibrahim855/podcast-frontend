import React from 'react';
import { Routes, Route } from 'react-router-dom';

import classes from './Main.module.css';


// not found page
import NotFound from '../UI/NotFound/NotFound';
import Landing from './Landing/Landing';



function Main() {
  return (
    <div className={classes.homeContainer}>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/podcasts" exact element={<p>podcasts</p>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default React.memo(Main);