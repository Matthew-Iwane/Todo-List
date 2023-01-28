import React, { useState } from 'react'
import {Form} from './Form.jsx'

export const Card = () => {
    const [userInput, setUserInput] = useState("");
    const [todos, setToDos] = useState([])


  return (
    <div className='
    w-1/3 h-auto pb-72 pt-4
    flex flex-col items-center
    bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 shadow-lg shadow-gray-600'>
        <h1 className='text-4xl font-bold text-gray-100'>Todo List</h1>
        <Form 
            input={userInput}
            setInput={setUserInput}
            todos={todos}
            setToDos={setToDos}
        />
    </div>
  )
}