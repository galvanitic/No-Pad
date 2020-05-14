import React, { useEffect, useState, useCallback } from 'react';

import { 
  updateNoteForUser
} from '../utils/localStorageUtils'

const Note = ( {user, note} ) => {

  const [noteContent, setNoteContent] = useState((note !== null) ? note.content : null)

  const handleNoteContentChange = (e) => {
    const newNoteContent = e.target.value
    setNoteContent(newNoteContent)
    note.content = noteContent

    updateNoteForUser(note)
  }

  const updateNote = useCallback((e) => {
    e.preventDefault();
    
  }, [])

  return(
    <div className="Note">
      <h2>{(note !== null) ? note.title : ""}</h2>
      {(note !== null) ? <textarea value={noteContent} onChange={handleNoteContentChange}></textarea> : <></>}

      {(note !== null) ? <button type="submit" onClick={updateNote} className="button_form">Submit</button> : <></>}
    </div>
  )
  
}

export default Note;