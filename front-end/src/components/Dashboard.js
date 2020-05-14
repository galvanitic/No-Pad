import React, { useState } from 'react';
import SideNav from './SideNav';
import Note from './Note';
import Overview from './Overview';
// import '../manage';
import '../style/style-dashboard.css';
import { getAllNotesForUser } from '../utils/localStorageUtils';

const Dashboard = ( { user } ) => {

  const [notes, setNotes] = useState(getAllNotesForUser(user))
  const [note, setNote] = useState(null)

  // const handleNoteObjSelection = useCallback((id) => {
  //   setNoteId(id)
  //   console.log(noteId)
  // }, [noteId, setNoteId])

  // Removed <body> since there is already a body in the root HTML document
  return(
    <>
      <SideNav className='sidenav' user={user} notes={notes} setNotes={setNotes}/>
      <div className='grid-container'>
        <Overview className='Overview' user={user} notes={notes} note={note} setNote={setNote}/>
        <Note className='Note' user={user} note={note}/>
      </div>
    </>
  )
  
}

export default Dashboard;