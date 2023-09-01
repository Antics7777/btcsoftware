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
        <button className='p-3 bg-[#ffffff] mb-3'>
          Settings
        </button>
        <button className='p-3 bg-[#f79519] mb-3'>
          Use Proxy
        </button>
        <button className='p-3 bg-[#f79519] mb-3'>
          Dont Use Proxy
        </button>
        <div className="flex flex-row justify-start gap-2">
          <input type="checkbox" />
          <p className="text-white">5 Mins Reflection</p>
        </div>
        <div className="flex flex-row justify-start gap-2">
          <input type="checkbox" />
          <p className="text-white">25 Mins Reflection</p>
        </div>
        <div className="flex flex-row justify-start gap-2 mb-5">
          <input type="checkbox" />
          <p className="text-white">1 Hrs Reflection</p>
        </div>
        <p className='text-white mb-2 text-2xl'>Verification Balance </p>
        <button className='p-3 bg-[#ffffff] mb-3'>
          $20,000
        </button>
        <div className="flex flex-row justify-start gap-2">
          <input type="checkbox" />
          <p className="text-white">3/3 Confirmation</p>
        </div>
        <div className="flex flex-row justify-start gap-2">
          <input type="checkbox" />
          <p className="text-white">6/6 Confimation</p>
        </div>
        <div className="flex flex-row justify-start gap-2 mb-4">
          <input type="checkbox" />
          <p className="text-white">8/8 Confimation</p>
        </div>
        <Link href="/errorpage">
          <button className='p-3 w-full bg-[#ffffff] mb-3 hover:text-black hover:bg-[#f79519]'>
            Verify
          </button>
        </Link>
        <button className='p-3 bg-[#f79519] mb-3'>
          Check for more info
        </button>
      </div>

    </div>

  )
}

export default Sidebar3