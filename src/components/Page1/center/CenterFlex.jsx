import React from 'react'
import LeftFlex from './LeftFlex'
import RightFlex from './RightFlex'

const CenterFlex = () => {
  return (
    <div className='absolute flex flex-row-reverse sm:flex-row justify-between items-end w-[100%] sm:w-[90%]  top-[70%] sm:top-[30%]'>
      
      <LeftFlex/>
      <RightFlex/>

    </div>
  )
}

export default CenterFlex
