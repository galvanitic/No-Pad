import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NoteObj from './NoteObj'
import { getAllNotesForUser } from '../utils/localStorageUtils'

const Overview = ( { user, notes } ) => {

  return(
    <div className="Overview">

      <div className="selected">
        <div className="menu-icon active"><FontAwesomeIcon icon={['fas', 'bars']} /></div>
        <h2>All Notes</h2>
      </div>

      {notes.map((note, index) => {
        return <NoteObj key={`note-object-${index}`} note={note}/>
        // console.log(`note-object-${index}`)
      })}

    </div>
  )
  
}

export default Overview;