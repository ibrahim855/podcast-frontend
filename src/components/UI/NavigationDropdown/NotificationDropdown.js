import React from 'react';


import classes from './NotificationDropdown.module.css';

//FOR NOW THIS COMPONENTS HAS DUMMY CONTENT
// framer motion stuff
import { motion } from 'framer-motion';

//CUSTOM LINK 
import CustomLink from '../CustomLink/CustomLink';

function NotificationDropdown() {
  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      className={classes.dropdown}
    >
      <div className={classes.containerDropdowItems}>
        <ul>
          <li>
            <CustomLink to="/" content="items "/>
          </li>
          <li>another</li>
          <li>Something else</li>
          <li>
          <CustomLink to="/podcasts" content="Podcasts "/>
          </li>
          <li>podcasts video</li>
          <li>podcast only audio</li>
          <li>My favorites</li>
          <li>Podcast I liked</li>
          <li>Settings</li>
          <li>Esci</li>
        </ul>
        <ul>
          <li>items</li>
          <li>another</li>
          <li>Something else</li>
          <li>Podcasts</li>
          <li>podcasts video</li>
          <li>podcast only audio</li>
          <li>My favorites</li>
          <li>Podcast I liked</li>
          <li>Settings</li>
          <li>Esci</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default NotificationDropdown;
