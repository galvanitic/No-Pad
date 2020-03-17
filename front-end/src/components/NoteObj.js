import React from 'react';

const NoteObj = ({ 
  title, id, content, lastModified, handleNoteObjSelection 
}) => (

  <div className="NoteObj" onClick={event => {
    handleNoteObjSelection(id)
  }}>
    <h2>{title}</h2>
    <p>{content}</p>
    <h6>{lastModified}</h6>

    {/* <button
    type="submit"
    onClick={handleNoteObjSelection}
    className="NoteObj_Button"
    >
      <h2>{title}</h2>
      <p>{content}</p>
      <h6>{lastModified}</h6>
    </button> */}

  </div>
)

export default NoteObj;

