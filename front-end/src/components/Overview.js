import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NoteObj from './NoteObj'

import data from '../database/database.json';
const user_notes = data.DiegoPerez.notes;

class Overview extends React.Component {
  render () {
    return(
      <div className="Overview">

        <div className="selected">
          <div className="menu-icon active"><FontAwesomeIcon icon={['fas', 'bars']} /></div>
          <h2>All Notes</h2>
        </div>


        {user_notes.map(({ title, content, lastModified }) => {
          return <NoteObj title={title} content={content} lastModified={lastModified} />
        })}
        

      </div>
    )
  }
}

export default Overview;