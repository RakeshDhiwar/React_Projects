import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {params} = useParams()
  return (
    <div className='bg-gray-400 text-white text-3xl p-4'>User: {params}</div>
  )
}

export default User