import React from 'react';

import classes from './NotificationDropdown.module.css';

//FOR NOW THIS COMPONENTS HAS DUMMY CONTENT
// framer motion stuff
// import { motion } from 'framer-motion';

//REDUX STUFF
import { useDispatch } from 'react-redux';
import { authActions } from '../../../context/auth/auth-slice';
import { UiActions } from '../../../context/ui/ui-slice';
//CUSTOM LINK
import CustomLink from '../CustomLink/CustomLink';

function NotificationDropdown() {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authActions.logout());
    dispatch(UiActions.toggleDropDown());
  }

  return (
    <div
      // initial={{ y: -200 }}
      // animate={{ y: 0 }}
      // exit={{ y: -1000 }}
      className={classes.dropdown}
    >
      <div className={classes.containerDropdowItems}>
        <ul>
          <li>
            <CustomLink to="/" content="items " />
          </li>
          <li>
            <CustomLink to="/add-podcast" content="Add Podcast" />
          </li>
          <li>Something else</li>
          <li>
            <CustomLink to="/podcasts" content="Podcasts " />
          </li>
          <li>podcasts video</li>
          <li>podcast only audio</li>
          <li>My favorites</li>
          <li>Podcast I liked</li>
          <li>Settings</li>
          <li onClick={logout}>Esci</li>
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
    </div>
  );
}

export default NotificationDropdown;
