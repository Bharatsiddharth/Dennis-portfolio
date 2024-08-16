import React from 'react'

const navbar = () => {
  return (
    <>

      <div className='py-9 text-white px-12 z-20  w-screen flex items-center justify-between fixed'>
        <h1>©
          Code byDennis </h1>

        <div className='hidden sm:block '>
          <ul className='flex justify-evenly  gap-14 text-xl'>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='block sm:hidden '>
          <ul>
            <li className='list-disc' >menu</li>
          </ul>
        </div>

      </div>

      

    </>
  )
}

export default navbar
