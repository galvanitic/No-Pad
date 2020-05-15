import React, { useEffect, useState, useCallback } from 'react';

import { 
  updateNoteForUser
} from '../utils/localStorageUtils'

const Note = ( {user, note} ) => {

  const [noteContent, setNoteContent] = useState((note !== null) ? note.content : "")

  const handleNoteContentChange = (e) => {
    const newNoteContent = e.target.value
    setNoteContent(newNoteContent)
  }

  const updateNote = useCallback((e) => {
    e.preventDefault();
    note.content = noteContent
    updateNoteForUser(note)
    console.log("Note Updated")
  }, [note])

  return(
    <div className="Note">
      <h2>{(note !== null) ? note.title : ""}</h2>
      {(note !== null) ? <textarea value={noteContent} onChange={handleNoteContentChange}></textarea> : ""}
      {(note !== null) ? <button type="submit" onClick={updateNote} className="button_form">Submit</button> : ""}

    </div>
  )
  
}

export default Note;