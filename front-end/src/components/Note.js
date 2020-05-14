import React, { useEffect, useState } from 'react';

const Note = ( {user, note} ) => {

  // const [note, setNote] = useState(null)

  
  return(
    <div className="Note">
      <h1>{(note !== null) ? note.title : ""}</h1>
      <p>{(note !== null) ? note.content : ""}</p>
    </div>
  )
  
}

export default Note;