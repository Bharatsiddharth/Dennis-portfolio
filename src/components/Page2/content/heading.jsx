import React from 'react'

const heading = () => {
  return (
    <div className=' py-[3vw] px-[5.3vw]'>
    <div className=' flex w-full justify-between  flex-col sm:flex-row items-end'>
      <p className='text-xs sm:text-base font-semibold text-gray-600 px-5  w-full sm:w-[70%]'>
        Recent Work
      </p>

      <div className='w-full sm:text-lg sm:w-[30%] px-5 pr-44 sm:pr-5  text-base'>
       <div className='h-[20vh] rounded-full w-[20vh] bg-black'></div>
      </div>
    </div>
  </div>
  )
}

export default heading
