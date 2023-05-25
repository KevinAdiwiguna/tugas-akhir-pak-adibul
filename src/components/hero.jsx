import React from 'react'

export const Hero = () => {
    return (
        <div className="!w-full h-screen flex-col flex justify-center items-center !bg-center !bg-cover !bg-no-repeat !bg-fixed " style={{
            background: `linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),  url("https://www.gotravelly.com/blog/wp-content/uploads/2020/11/kopi-bali.jpg")`}}>
            <div className='text-center'>
                <p className="text-white text-xl font-semibold sm:text-2xl lg:text-3xl">Nikmati Keajaiban Kopi Asli Lombok  </p>
                <p className='text-white text-sm mb-10 sm:text-lg'>Rasakan Keharuman dan Kenikmatan yang Autentik!</p>
                <a href="#product" className="mt-20 bg-white text-black p-4 rounded-sm font-semibold hover:text-white hover:bg-black duration-300">Beli Sekarang</a>
            </div>
        </div>
    )
}
