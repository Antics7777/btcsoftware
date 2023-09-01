import React from 'react'
import qr from "@/public/assets/zwFLujeuWk.gif"
import Image from 'next/image'

const page = () => {
    return (
        <div className='flex-col flex'>
            <div className='text-center justify-center flex'>

                <Image src={qr} alt='qr' width={300} height={300} />
            </div>
            <div className='text-center justify-center flex  lg:ml-[200px] ml-[30px]'>

            <input type="text" className=' bg-transparent placeholder:text-white text-white h-10 w-full  focus:outline-none rounded-md pl-3  border-gray-1' placeholder='bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh' />
            </div>
        </div>
    )
}

export default page