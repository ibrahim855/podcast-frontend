import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

//PAGES
import Auth from './pages/Auth';
import Home from './pages/Home';

//COMPONENTS
import Notification from './components/UI/Notification/Notification';

//REDUX STUFF
import { useSelector } from 'react-redux';

function App() {
  const notification = useSelector((state) => state.ui.notification);

  return (
    <React.Fragment>
      {
      notification && (
        <Notification
          status={notification.status}
          content={notification.content}
        />
      )}  
      <Routes>
        <Route path="/auth" exact element={<Auth />} />
        <Route path="*" element={<Home  />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
