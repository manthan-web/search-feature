import React from 'react'
import { ModeToggle } from './mode-toggle'

const Navbar = () => {
  return (
    <div className='w-full px-12 bg-zinc-900 flex items-center justify-between h-[5rem]'>
        <div>
            <h1 className='text-white'>Logo</h1>
        </div>
        <div>
            <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar