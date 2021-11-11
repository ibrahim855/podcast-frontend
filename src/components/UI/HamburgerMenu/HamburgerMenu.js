import React from 'react';

import classes from './HamburgerMenu.module.css';
// this will be our static menu bar

//REDUX STUFF
import { useDispatch } from 'react-redux';
import { UiActions } from '../../../context/ui/ui-slice';

function HamburgerMenu() {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(UiActions.toggleDropDown());
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
      onClick={toggle}
      className={classes.HamburgerMenu}
    >
      <path d="M1,6H23a1,1,0,0,0,0-2H1A1,1,0,0,0,1,6Z" fill="#ffffff" />
      <path d="M23,9H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" fill="#ffffff" />
      <path d="M23,19H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" fill="#ffffff" />
      <path d="M23,14H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" fill="#ffffff" />
    </svg>
  );
}

export default HamburgerMenu;