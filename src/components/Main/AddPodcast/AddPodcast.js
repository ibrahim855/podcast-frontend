import React, {  useState } from 'react';
import classes from './AddPodcast.module.css';

//REDUX STUFF
import { useSelector, useDispatch } from 'react-redux';
import { addPodcast as savePodcast } from '../../../context/podcast/podcast-actions';


// COMPONENTS
import Button from '../../UI/Button/Button';

// custom Hook
import useLoading from '../../../hooks/use-loading';



function AddPodcast() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
  const { loading, onLoadingChanged } = useLoading();
  const nice = new FormData();

  const changedDescription = (e) => {
    setDescription(e.target.value);
  };

  const changedFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  
  const addPodcast = (e) => {
    e.preventDefault();
    nice.append('image', selectedFile);
    nice.append('description', description);
    onLoadingChanged(true);
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      onLoadingChanged(false);
      dispatch(savePodcast(nice, token));
    }, 4000);
  };

  
  return (
    <div className={classes.addContainer}>
      <form onSubmit={addPodcast}>
      <label htmlFor="description">Description</label>
      <input onChange={changedDescription} type="text" name="description" />
      <label htmlFor="podcast">File</label>
      <input className={classes.uploadFile} type="file" name="podcast" onChange={changedFile} />
      <Button type="submit" content="CARICA PODCAST" loading={loading}/>
    </form>
    </div>
  );
}

export default AddPodcast;
