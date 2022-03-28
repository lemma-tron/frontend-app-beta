import React from 'react'

const Rewards = () => {
  return (
    <div className='w-full pt-8 px-4 flex flex-col items-center md:items-start'>
        <h1 className='text-gradient text-3xl font-bold'>BALANCE</h1>
        <div className='w-full flex mt-4 flex-col md:flex-row items-center'>
            <div className='flex-1'>
                <h3 className='text-lg font-semibold uppercase text-white'>Your balance</h3>
                <h1 className='text-3xl font-regular text-white'>$ 0.00</h1>
            </div>
            <div className='w-full md:flex-[3]'>
                <div className='gradient-box w-full gap-4 p-14 flex flex-col md:flex-row md:justify-between items-center rounded-lg'>
                    <h1 className='flex-1 text-lg font-semibold text-black uppercase'>Your Rewards</h1>
                    {/* Earned */}
                    <div className='flex-1 flex flex-col items-center'>
                        <h3 className='text-sm text-black uppercase font-light'>EARNED</h3>
                        <h1 className='text-3xl text-black'>$ 0.00</h1>
                    </div>
                    {/* Available */}
                    <div className='flex-1 flex flex-col items-center'>
                        <h3 className='text-sm text-black uppercase font-light'>Available</h3>
                        <h1 className='text-3xl text-black'>$ 0.00</h1>
                    </div>
                    {/* Button */}
                    <button className='black-gradient-bg  rounded px-8 py-2 text-white'>CLAIM</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rewards