import React from 'react';

const NoteObj = ({ 
  title, content, lastModified 
}) => (

  <div className="NoteObj">
    {/* <h2>{title}</h2>
    <p>{content}</p>
    <h6>{lastModified}</h6> */}

    <button
    type="submit"
    onClick={handleNoteObjSelection}
    className="NoteObj_Button"
    >
      <h2>{title}</h2>
      <p>{content}</p>
      <h6>{lastModified}</h6>
    </button>

  </div>
)

export default NoteObj;

