import React from 'react'

const Sidebar2 = () => {
  return (
    <div className='flex flex-1 flex-col'>
      <div>
        <p className='text-[#f79519] text-2xl mb-2 '>Wallet Email</p>
        <input type="text" className=" h-10 w-full focus:outline-none rounded-md pl-3 mb-3 "
          placeholder='Input Email'
        />
      </div>
      <div>
        <p className='text-[#f79519] text-2xl mb-2'>Wallet Phrase</p>
        <input type="text" className=" h-10 w-full focus:outline-none rounded-md pl-3 mb-3 "
          placeholder='Password'
        />
      </div>
      <div>
        <p className='text-[#f79519] text-2xl mb-2 mt-3'>Wallet Input</p>
        <div className='flex flex-row gap-2'>
          <input type="checkbox" className=""
            placeholder='Password'
          />
          <p className='text-white'> Verified</p>
        </div>
      </div>
      <div className='flex flex-col mt-5'>
        <button className='p-3 bg-[#f79519]'>
          Submit
        </button>
      </div>
      <div className='flex flex-col mt-5'>
        <button className='p-3 bg-[#ffffff]'>
          Create New Transaction
        </button>
      </div>

    </div>
  )
}

export default Sidebar2