import React from 'react'
import tick from '../public/images/tick-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus,faClipboardList,faNewspaper } from '@fortawesome/free-solid-svg-icons'


const Authentication = () => {
  return (
    <div className="">
    <div className="bg-purple-100 rounded-lg w-72 px-5 py-4">
      <h6 className='mb-4'>
        <b>Authentication Details</b>
      </h6>
      
     <h6  className="w-60 h-10 rounded-lg bg-white text-center mt-2 py-2 items-center">Username:</h6>
     

      <h6 className='mb-2'>
        <br />
        <b>Notifications</b>
      </h6>
      <h6 className='flex items-center text-gray-600 font-extrabold font-body'><img className='w-6 h-4' src={tick}/> SMS</h6>
      <br />
      
      <h6 className='text-justify text-gray-600'> <FontAwesomeIcon icon={faBus} className='mr-2'/>
        Bus: <span className="text-red-500 font-medium ml-7">Disabled</span>
      </h6>
      <h6 className='text-justify text-gray-600'> <FontAwesomeIcon icon={faNewspaper} className='mr-2'/>
        News:<span className="text-red-500 font-medium ml-5">Disabled</span>
      </h6>
      <h6 className='text-justify text-gray-600'> <FontAwesomeIcon icon={faClipboardList} className='mr-3'/>
        Notice:<span className="text-green-700 font-medium ml-4">Enabled</span>
      </h6>
      </div>
  
  </div>
  )
}

export default Authentication