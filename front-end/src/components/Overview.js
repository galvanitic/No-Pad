import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Overview extends React.Component {
  render () {
    return(
      <div className="Overview">

        <div className="selected">
          <div className="menu-icon active"><FontAwesomeIcon icon={['fas', 'bars']} /></div>
          <h2>All Notes</h2>
        </div>

        
        <div className="note_file"></div>
        <div className="note_file"></div>
        <div className="note_file"></div>
        <div className="note_file"></div>

      </div>
    )
  }
}

export default Overview;