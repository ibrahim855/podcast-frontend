import React from 'react';

//FRAMER MOTION STUFF
// import { AnimatePresence } from 'framer-motion';

//COMPONENTS
import Navigation from '../Navigation/Navigation';
import NotificationDropdown from '../UI/NavigationDropdown/NotificationDropdown';
import Main from '../Main/Main';

//REDUX STUFF
import { useSelector } from 'react-redux';

function Home() {
  const dropdown = useSelector((state) => state.ui.dropdown);

  return (
    <React.Fragment>
      <Navigation />
      {/* <AnimatePresence> */}
        {dropdown && <NotificationDropdown />}
      {/* </AnimatePresence> */}
      <Main />
    </React.Fragment>
  );
}

export default Home;
