import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='hidden sm:flex justify-around items-center bg-slate-100 py-6 fixed w-full'>
        <div>
          <h1 className='font-bold'>KOPI LOMBOK BY KEVIN</h1>
        </div>
        <div className='flex justify-center items-center gap-5'>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/contact'}>Contact</Link>
        </div>
      </div>

      <div className='sm:hidden flex justify-between py-3 fixed bg-white w-full' >
        <div className='mx-5' onClick={() => setOpen(!open)}>
          <svg viewBox="0 0 100 80" width="30" height="30">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>

      </div>
      <div className={`${open ? 'w-[100vw]' : 'w-0'} h-screen fixed top-[50px] z-20 duration-300 bg-white`}>
        <p className={`font-bold mx-4 text-xl ${open ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'} duration-300`}>KOPI BALI BY KEVIN</p>
        <div className='flex flex-col gap-2'>
          <Link to={'/'} className={`text-lg font-semibold mx-4 ${open ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'} duration-300`}>Home</Link>
          <Link to={'/about'} className={`text-lg font-semibold mx-4 ${open ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'} duration-300`}>About</Link>
          <Link to={'/contact'} className={`text-lg font-semibold mx-4 ${open ? 'opacity-100 cursor-pointer' : 'opacity-0 pointer-events-none'} duration-300`}>Contact</Link>
        </div>

      </div>



    </>
  )
}
