import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portrait from '../img/portrait.jpg'

import data from '../database/database.json';

const SideNav = ( { email } ) => {

  const user_data = data[email];
  
  return(
    <aside className="sidenav">
      <div className="user">
        <img src={portrait} alt="Portrait of me" />
        <div className="user-text">
          <span id="name">{user_data.name}</span>
          <span id="email">{email}</span>
        </div>
      </div>

      <div className="QuickAccess">
        {/* <!-- <h2 id="AllNotes"><i className="fas fa-sticky-note"></i>All Notes</h2>
        <h2 id="Important"><i className="fas fa-star"></i>Important</h2>
        <h2 id="Folders"><i className="fas fa-folder"></i>Folders</h2> -->
        <!-- <ul className="QuickAccess_list fa-ul">
          <li><span className="fa-li"><i className="fas fa-sticky-note"></i></span>All Notes</li>
          <li><span className="fa-li"><i className="fas fa-star"></i></span>Important</li>
          <li><span className="fa-li"><i className="fas fa-folder"></i></span>Folders</li>
          <li><span className="fa-li"><i className="far fa-square"></i></span>Shared with Me</li>
        </ul> --> */}
        <ul className="QuickAccess_list fa-ul">
          <li><span className="fa-li"><i className=""></i></span><FontAwesomeIcon icon={['fas', 'file-alt']} className="sidenav-icon"/>All Notes</li>
          <li><span className="fa-li"><FontAwesomeIcon icon={['fas', 'caret-right']} className="sidenav-icon"/></span><FontAwesomeIcon icon={['fas', 'star']} className="sidenav-icon"/>Important</li>
          <li><span className="fa-li"><FontAwesomeIcon icon={['fas', 'caret-right']} className="sidenav-icon"/></span><FontAwesomeIcon icon={['fas', 'folder']} className="sidenav-icon"/>Folders</li>
          <li><span className="fa-li"><FontAwesomeIcon icon={['fas', 'caret-right']} className="sidenav-icon"/></span><FontAwesomeIcon icon={['fas', 'user-friends']} className="sidenav-icon"/>Shared with Me</li>
        </ul>
      </div>

      <div className="Workspaces">
        <h2>Workspaces</h2>
        <ul className="Workspaces_list fa-ul">
          <li><span className="fa-li"><i className=""></i></span><FontAwesomeIcon icon={['fas', 'briefcase']} className="sidenav-icon"/>Work</li>
          <li><span className="fa-li"><i className=""></i></span><FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} className="sidenav-icon"/>School</li>
          <li><span className="fa-li"><i className=""></i></span><FontAwesomeIcon icon={['fas', 'user']} className="sidenav-icon"/>Personal</li>
        </ul>
      </div>

      <div className="Misc">
        <ul className="Misc_list fa-ul">
          <li><FontAwesomeIcon icon={['fas', 'trash']} className="sidenav-icon"/>Trash</li>
          <li><FontAwesomeIcon icon={['fas', 'cog']} className="sidenav-icon"/>Settings</li>
        </ul>
      </div>
    </aside>
  )

}

export default SideNav;