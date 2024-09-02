import React from 'react'
import { useParams } from 'react-router-dom'
export default function NotFound() {
    const {id}=useParams()
  return (
    <div className='flex flex-col items-center '>
        <h1 className='text-center text-2xl bg-gray-400 p-4 my-8'>Not found page for parameter: {id}</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/6261/6261498.png" alt="img" className="w-64 h-64 " />
    </div>
  )
}
