import React, { useEffect } from 'react';
import classes from './Notification.module.css';

//REDUX STUFF
import { useDispatch } from 'react-redux';
import {UiActions} from '../../../context/ui/ui-slice';


function Notification(props) {
  const dispatch = useDispatch();
  const { status, content } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      dispatch(UiActions.clearNotification());
    }, 3000);
    return () => clearTimeout(timeout);
  }, [dispatch]);
  

  return (
    <div className={`${classes.notification} ${classes[status]}`}>
      <p>{content}</p>
    </div>
  );
};

export default Notification;