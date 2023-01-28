import React from 'react'
import { ImCheckmark2 } from 'react-icons/im'
import { BsPencilSquare } from 'react-icons/bs'
import { GoTrashcan } from 'react-icons/go'



export const TodoList = ({ todos, setTodos }) => {
  return (
    <div className='text-gray-700 w-full'>
        {todos.map((todo) => (
            <li 
                key={todo.id} 
                className='flex flex-wrap'
            >
                <input 
                    type="text"
                    value={todo.title}
                    onChange={(event) => event.preventDefault()}
                    className='
                        bg-transparent text-2xl font-normal'
                />  
                <div className='flex gap-2'>
                    <button >
                        <ImCheckmark2 size={25}/>
                    </button>
                    <button>
                        <BsPencilSquare size={25}/>
                    </button>
                    <button>
                        <GoTrashcan size={25}/>
                    </button>
                </div>
            </li>
        ))}
    </div>
  )
}
