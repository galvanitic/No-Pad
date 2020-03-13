import React from 'react';
import SideNav from './SideNav';
import Note from './Note';
import Overview from './Overview';
// import '../manage';
import '../style/style-dashboard.css';

const Dashboard = ( { email } ) => {

  return(
    <body>
      <SideNav className='sidenav' email={email}/>
      <div className='grid-container'>
        <Overview className='Overview' email={email}/>
        <Note className='Note' />
      </div>
    </body>
  )
  
}

export default Dashboard;