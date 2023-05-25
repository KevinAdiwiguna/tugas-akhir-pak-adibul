import React from 'react'
import { Navbar } from '../components/Navbar'

export const Contact = () => {
    return (
        <div>
            <Navbar />
            <div style={{
                background: `linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
          ),  url("https://tramvaj.rs/wp-content/uploads/2016/12/Coffee-wallpaper-hd-wallpapers-download.jpg")`}} className='flex justify-center items-center h-screen w-full !bg-center !bg-cover !bg-fixed !bg-no-repeat'>

                <form className='w-[80%] md:w-[50%]'>
                    <div className='flex flex-col gap-5'>
                        <input className='bg-transparent border-white border-2 p-3 text-white' placeholder="Name" type="text" />
                        <input className='bg-transparent border-white border-2 p-3 text-white' placeholder="Gmail" type="email" />
                        <textarea className='bg-transparent border-white border-2 p-3 text-white' rows={4} placeholder='Message' />
                        <button className='text-center text-white bg-green-400 hover:bg-green-700 duration-200 p-3 rounded-md mt-4'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
