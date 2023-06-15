import React from 'react';
import Sidebar from '../components/Sidebar';
import wee from '../images/wee.gif';
import './landingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function LandingPage() {
  return (
    <div className='main'>
      <Sidebar />


      <div className="container">
        <img src={wee} alt="Welcome" className="welcome-image" />
        <p className='bold'>Welcome! Let's Get Started!</p>
        <p className='light'>Start by requesting POSM Materials</p>
        <button className='button'> <FontAwesomeIcon className='icon' icon={faPlus} />Request POSM</button>
      </div>

    </div>
  );
}

export default LandingPage;
