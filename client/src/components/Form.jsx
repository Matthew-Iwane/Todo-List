import React from 'react'
import {v4 as uuidv4} from 'uuid'

export const Form = ({userInput, setUserInput, todos, setToDos }) => {

    const onInputChange = (event) => {
        setUserInput(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventdefault();
        setToDos([...todos, {id:uuidv4(), title:userInput, completed: false}]);
        setUserInput("")
    }

  return (
    <div className='
        font-bold text-gray-100'
    >
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder="Enter a todo: " 
                className='rounded m-3 py-3 px-4 border-none cursor-pointer text-black'
                value={userInput}
                required
                onChange={onInputChange}

            >
            </input>
            <button 
                type="submit"
                className='bg-red-400 text-gray-100 py-3 px-4 rounded-md font-bold hover:bg-red-500 duration-300'
            >
                Add
            </button>
        </form>
    </div>
  )
}
