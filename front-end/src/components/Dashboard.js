import React, { useState, useCallback } from 'react';
import SideNav from './SideNav';
import Note from './Note';
import Overview from './Overview';
// import '../manage';
import '../style/style-dashboard.css';

const Dashboard = ( { user } ) => {

  const [noteId, setNoteId] = useState(null)

  const handleNoteObjSelection = useCallback((id) => {
    setNoteId(id)
    console.log(noteId)
  }, [noteId, setNoteId])

  // Removed <body> since there is already a body in the root HTML document
  return(
    <>
      <SideNav className='sidenav' user={user}/>
      <div className='grid-container'>
        <Overview className='Overview' user={user} handleNoteObjSelection={handleNoteObjSelection}/>
        <Note className='Note' user={user} noteId={noteId}/>
      </div>
    </>
  )
  
}

export default Dashboard;