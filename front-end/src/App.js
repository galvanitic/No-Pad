import React from 'react';
import Router from './Router'
import { BrowserRouter } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight, faFileAlt, faStar, faFolder, faUserFriends, faBriefcase, faChalkboardTeacher, faUser, faTrash, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretRight, faFileAlt, faStar, faFolder, faUserFriends, faBriefcase, faChalkboardTeacher, faUser, faTrash, faCog);

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
