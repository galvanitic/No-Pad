import React from 'react';


const NoteObj = ({ title, content, lastModified }) => (

  // Need to change div to a button to be 'selectable' by the user
  <div className="NoteObj">
    <h2>{title}</h2>
    <p>{content}</p>
    <h6>{lastModified}</h6>
  </div>
)

export default NoteObj;

