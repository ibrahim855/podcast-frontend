import React, {  useState } from 'react';
import classes from './AddPodcast.module.css';

//REDUX STUFF
import { useSelector, useDispatch } from 'react-redux';
import { addPodcast as savePodcast } from '../../../context/podcast/podcast-actions';




function AddPodcast() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
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
    dispatch(savePodcast(nice, token));
  };

  return (
    <form onSubmit={addPodcast} className={classes.addContainer}>
      <label htmlFor="description">Description</label>
      <input onChange={changedDescription} type="text" name="description" />
      <label htmlFor="podcast">File</label>
      <input type="file" name="podcast" onChange={changedFile} />
      <button type="submit">Aggiungi Podcast</button>
    </form>
  );
}

export default AddPodcast;
