import React from 'react'
import { SlDirection } from 'react-icons/sl'

export const NavBar = () => {
  return (
    <div className='bg-slate-800 w-screen absolute py-4'>
        <div className='flex justify-between'>
            <h3 className='text-white mx-3 text-2xl uppercase tracking-widest font-thin'>
                Matthew Iwane
            </h3>
            <a 
                href="https://matthewtiwane.web.app/"
                rel="noreferrer"
                target="_blank"
                className='
                text-white mx-3 text-2xl uppercase tracking-widest font-thin cursor-pointer 
                flex gap-2 animate-pulse'
            >
                Portfolio <SlDirection />
            </a> 
        </div>
    </div>
  )
}
