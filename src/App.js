import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react';

//PAGES
import Auth from './pages/Auth';
import Home from './pages/Home';

//COMPONENTS
import Notification from './components/UI/Notification/Notification';
import Modal from './components/UI/Modal/Modal';
//REDUX STUFF
import { useSelector } from 'react-redux';

// REACT CONTETX STUFF
import uiContext from './context/react-context/context';

//AUTO LOGIN
import AutoLogin from './Auto/AutoLogin';

//GUARDS
import Guard from './Guards/Guard';

function App() {
  const notification = useSelector((state) => state.ui.notification);
  const ctx = useContext(uiContext);
  const { modal } = ctx;

  return (
    <AutoLogin>
      {modal && <Modal modal={modal} />}
      {notification && (
        <Notification
          status={notification.status}
          content={notification.content}
        />
      )}
      <Routes>
        <Route
          path="/auth"
          exac
          notAuthenticatedRequired={true}
          t
          element={
            <Guard noAuthenticationRequired={true}>
              <Auth />
            </Guard>
          }
        />
        <Route
          path="*"
          element={
            <Guard authenticationRequired={true}>
              <Home />
            </Guard>
          }
        />
      </Routes>
    </AutoLogin>
  );
}

export default App;
