import React, { useEffect, useState, useCallback } from 'react';

const Note = ( {user, note} ) => {

  const updateNote = useCallback((e) => {
    e.preventDefault();
    
  }, [])

  return(
    <div className="Note">
      <h2>{(note !== null) ? note.title : ""}</h2>
      {/* <textarea>{(note !== null) ? note.content : ""}</textarea> */}
      {(note !== null) ? <textarea>{note.content}</textarea> : <></>}

      {(note !== null) ? <button type="submit" onClick={updateNote} className="button_form">Submit</button> : <></>}
    </div>
  )
  
}

export default Note;