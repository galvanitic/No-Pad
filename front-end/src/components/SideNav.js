import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import portrait from '../img/portrait.jpg'
import { findByLabelText } from '@testing-library/react';

const SideNav = ( { user } ) => {

  const [newNoteMenuOpen, setNewNoteMenuOpen] = useState(false)

  const openNewNoteMenu = () => {
    setNewNoteMenuOpen(true)
  }
  const closeNewNoteMenu = () => {
    setNewNoteMenuOpen(false)
  }

  const [noteName, setNoteName] = useState("")
  const [isInputFilled, setIsInputFilled] = useState(false)

  const handleNoteNameChange = (e) => {
    const newNoteName = e.target.value

    setNoteName(newNoteName)
  }
  
  return(
    <aside className="sidenav">
      <div className="user">
        <img src={portrait} alt="Portrait of me" />
        <div className="user-text">
          <span id="name">{user.name}</span>
          <span id="email">{user.email}</span>
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

        <h1 id="NewNote" onClick={openNewNoteMenu}><span><FontAwesomeIcon id="NewNoteIcon" icon={['fas', 'plus-square']} className="sidenav-icon"/>New Note</span></h1>

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

      <div className="modal" id="newNoteModal" style={newNoteMenuOpen ? {display: "flex"} : {display: "none"}}>
        <div className="modal-content">
          <h1 onClick={closeNewNoteMenu}>New Note</h1>

          <form>
            <label htmlFor="noteName">Name</label>
            <input type="text" id="noteName" name="noteName" value={noteName} onChange={handleNoteNameChange}/>

            <button 
            type="submit"
            // onClick={handleButtonClick}
            className={!isInputFilled ? "disabled button_form" : "button_form"}>
            Create Account
            </button>
          </form>
        </div>
      </div>

    </aside>
  )

}

export default SideNav;