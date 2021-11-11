import React, { useRef, useState } from 'react';
import classes from './AddPodcast.module.css';

//REDUX STUFF
import { useSelector } from 'react-redux';

function AddPodcast() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState('');
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

    fetch('http://localhost:8000/podcasts/add-podcast', {
      body: nice,
      headers: {
        // 'Content-Type':'multipart/form-data',
        // "Content-Type": "application/x-www-form-urlencoded",
        authorization: token,
      },
      method: 'POST',
    })
      .then((res) => {
        return res.json();
      })
      .then((obj) => console.log(obj));
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
