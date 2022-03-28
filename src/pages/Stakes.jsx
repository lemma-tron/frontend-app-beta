import React from 'react'
import Rewards from '../components/Rewards'
import Stakers from '../components/Stakers'

const Stakes = () => {
  return (
    <div className='w-full min-h-screen flex flex-col gap-16 bg-midnight md:px-10 pt-8'>
        {/* CurrentBalance */}
        <Rewards />
        {/* Validator */}
        <Stakers />
    </div>
  )
}

export default Stakes