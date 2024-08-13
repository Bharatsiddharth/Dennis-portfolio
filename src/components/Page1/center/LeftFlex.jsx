import React from 'react'

const LeftFlex = () => {
  return (
    <div className=" flex items-center gap-10 py-4 pl-12 pr-4  rounded-e-full sm:bg-[#1C1D20] bg-transparent text-white">
      <h2 className="font-medium hidden sm:block text-lg leading-6">
        Located <br />
        in the <br />
        Netherlands
      </h2>
      <div className="flex items-center justify-center bg-[#999D9E] h-[5vw] w-[5vw] rounded-full">
        <i className="ri-global-line text-4xl font-thin inline-block rotate-12"></i>
      </div>
    </div>
  )
}

export default LeftFlex
