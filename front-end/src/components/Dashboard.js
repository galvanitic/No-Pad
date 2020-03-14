import React from 'react';
import SideNav from './SideNav';
import Note from './Note';
import Overview from './Overview';
// import '../manage';
import '../style/style-dashboard.css';

const Dashboard = ( { user } ) => {

  // Removed <body> since there is already a body in the root HTML document
  return(
    <>
      <SideNav className='sidenav' user={user}/>
      <div className='grid-container'>
        <Overview className='Overview' user={user}/>
        <Note className='Note' />
      </div>
    </>
  )
  
}

export default Dashboard;