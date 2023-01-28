import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { TodoList } from './TodoList.jsx'


export const Form = () => {
    const [userInput, setUserInput] = useState("");
    const [todos, setToDos] = useState([])

    const onInputChange = (event) => {
        setUserInput(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
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
                required //ensures that the user has to put an input
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
        <TodoList todos={todos} setToDos={setToDos}/>
    </div>
  )
}
