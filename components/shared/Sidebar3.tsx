import React from 'react'
import Link from 'next/link'

const Sidebar3 = () => {
   
  return (
    
    <div className='flex flex-1 flex-col'>
    <div>
      <p className='text-[#f79519] text-2xl mb-2 '>Address</p>
      <input type="text" className=" h-10 w-full focus:outline-none rounded-md pl-3 mb-3 "
        placeholder='bc1qxy2kgdygjrsqtzq2n0yr'
      />
    </div>
    <div>
      <p className='text-[#f79519] text-2xl mb-2'>Amount (BTC)</p>
      <input type="text" className=" h-10 w-full focus:outline-none rounded-md pl-3 mb-3 "
        placeholder='Input Amount'
      />
    </div>
    <div className='flex flex-col mt-5'>
      <Link href="/send" className='l'>
      <button className='p-3 bg-[#f79519] w-full '>
          Send
        </button>
      </Link>
      </div>
      <div className='flex flex-col mt-5'>
        <button className='p-3 bg-[#f79519]'>
          Authentication
        </button>
      </div>
      <div className='flex flex-col mt-5'>
        <button className='p-3 bg-[#f79519]'>
         View Transaction 
        </button>
      </div>
      <div className='flex flex-col mt-5'>
        <button className='p-3 bg-[#f79519]'>
         Check Wallet Info
        </button>
      </div>
      <div className='flex flex-col mt-5'>
        <p className='text-white mb-2'>Advance Setting</p>
        <button className='p-3 bg-[#ffffff]'>
         QR CODE
        </button>
      </div>
      <div className='flex flex-col mt-5'>
        <p className='text-white mb-2'>Proxy Setting</p>
        <button className='p-3 bg-[#ffffff]'>
         Settings
        </button>
      </div>

  </div>
  )
}

export default Sidebar3