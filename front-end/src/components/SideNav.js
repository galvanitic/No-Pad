import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portrait from '../img/portrait.jpg'
class SideNav extends React.Component {
  render () {
    return(
     <aside className="sidenav">
       <div className="user">
          <img src={portrait} alt="Portrait of me" />
          <div className="user-text">
            <span id="name">Diego Perez</span>
            <span id="email">email@example.com</span>
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
            <li><span className="fa-li"><i className=""></i></span><FontAwesomeIcon icon={['fas', 'file-alt']} />All Notes</li>
            <li><span className="fa-li"><FontAwesomeIcon icon={['fas', 'caret-right']} /></span><FontAwesomeIcon icon={['fas', 'star']} />Important</li>
            <li><span className="fa-li"><FontAwesomeIcon icon={['fas', 'caret-right']} /></span><FontAwesomeIcon icon={['fas', 'folder']} />Folders</li>
            <li><span className="fa-li"><FontAwesomeIcon icon={['fas', 'caret-right']} /></span><FontAwesomeIcon icon={['fas', 'user-friends']} />Shared with Me</li>
          </ul>
        </div>

        <div className="Workspaces">
          <h2>Workspaces</h2>
          <ul className="Workspaces_list fa-ul">
            <li><span className="fa-li"><i className=""></i></span><FontAwesomeIcon icon={['fas', 'briefcase']} />Work</li>
            <li><span className="fa-li"><i className=""></i></span><FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} />School</li>
            <li><span className="fa-li"><i className=""></i></span><FontAwesomeIcon icon={['fas', 'user']} />Personal</li>
          </ul>
        </div>

        <div className="Misc">
          <ul className="Misc_list fa-ul">
            <li><FontAwesomeIcon icon={['fas', 'trash']} />Trash</li>
            <li><FontAwesomeIcon icon={['fas', 'cog']} />Settings</li>
          </ul>
        </div>
     </aside>
    )
  }
}

export default SideNav;