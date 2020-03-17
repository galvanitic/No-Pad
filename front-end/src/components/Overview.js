import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NoteObj from './NoteObj'

const Overview = ( { user, handleNoteObjSelection } ) => {

  return(
    <div className="Overview">

      <div className="selected">
        <div className="menu-icon active"><FontAwesomeIcon icon={['fas', 'bars']} /></div>
        <h2>All Notes</h2>
      </div>


      {user.notes.map(({ title, id, content, lastModified }, index) => {
        return <NoteObj key={`note-object-${index}`} title={title} id={id} content={content} lastModified={lastModified} handleNoteObjSelection={handleNoteObjSelection}/>
      })}
      

    </div>
  )
  
}

export default Overview;