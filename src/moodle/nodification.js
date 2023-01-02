import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu';
export default function Nodification()
{
    return(
      <div>
        <Menu/>
           <div className='head'>
              
              <div className='container col-lg-6'>
              <h1 className='text-center'>Notification</h1>
                <div className='bg-primary m-3 p-3 text-white'>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                  Information Message
                </div>
                <div className='bg-success m-3 p-3 text-white'>
                <FontAwesomeIcon icon={faCircleCheck}/>
                    Success Message
                </div>
                <div className='bg-warning m-3 p-3 text-white'>
                <FontAwesomeIcon icon={faBell}/>
                    Warning Message
                 </div>
                 <div className='bg-danger m-3 p-3 text-white'>
                 <FontAwesomeIcon icon={faCircleExclamation}/>
                    Error Message
                 </div>

              </div>
           </div>
           </div>
    );
}


