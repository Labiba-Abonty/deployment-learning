import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faFileAlt, faMap, faPhone, faStore, faUpload, faTasks, faUser, faClipboardList, faChartLine, faDatabase, faUserMd } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css'
import bip from '../images/biponon.png'

function Sidebar() {
     return (
          <div className="sidebar">
               <ul className="sidebar-menu">
                    <img src={bip} alt="biponon" className="logo" />
                    <button>
                         <FontAwesomeIcon className='icon' icon={faChartBar} />
                         Dashboard
                    </button>
                    <button>
                         <FontAwesomeIcon className='icon' icon={faFileAlt} />
                         Report
                    </button>
                    <button>
                         <FontAwesomeIcon className='icon' icon={faMap} />
                         Route Plan
                    </button>
                    <button>
                         <FontAwesomeIcon className='icon' icon={faPhone} />
                         Calls
                    </button>
                    <button>
                         <FontAwesomeIcon className='icon' icon={faStore} />
                         Outlets
                    </button>
                    <button>
                         <FontAwesomeIcon className='icon' icon={faTasks} />
                         POSM Request
                    </button>
                    <button>
                         <FontAwesomeIcon className='icon' icon={faUpload} />
                         Upload Route Plan
                    </button>
                    <button>
                         <FontAwesomeIcon className='icon' icon={faClipboardList} />
                         POSM Reporting
                    </button>
                    <button>
                         <FontAwesomeIcon className='icon' icon={faUser} />
                         Field Force
                    </button>
                    <button>
                         <FontAwesomeIcon className='icon' icon={faChartLine} />
                         Summary
                    </button>
                    <button>
                         <FontAwesomeIcon className='icon' icon={faDatabase} />
                         Data Visualization
                    </button>
                    <button>
                         <FontAwesomeIcon className='icon' icon={faUserMd} />
                         MR Module
                    </button>
               </ul>
          </div>
     );
}

export default Sidebar
