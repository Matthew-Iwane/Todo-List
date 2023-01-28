import React from 'react'
import {Form} from './Form.jsx'

export const Card = () => {
  return (
    <div className='
      w-1/3 h-auto pt-4 my-32
      flex flex-col items-center
    bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 shadow-lg shadow-gray-600'
    >
        <h1 className='text-4xl font-bold text-slate-600'>Todo List</h1>
        <Form />
    </div>
  )
}
