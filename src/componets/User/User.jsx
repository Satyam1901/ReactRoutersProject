import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
   
    <div className='p-4 text-3xl text-center text-white bg-gray-600'>User: {userid} </div>
  )
}

export default User