import React from 'react'

const footer = () => {
  return (
    <div className='w-full min-h-screen bg-[#1C1D20] py-10 sm:py-0 '>
      <div className='w-full h-[90%] flex items-center justify-center  mb-20 pt-10 md:pt-36 overflow-hidden'>
        <div className=' text-white px-[15rem] '>

          <div className='w-full flex justify-between gap-[10vw] sm:gap-[15vw] lg:gap-[20vw]'>
            <div className='font-serif  w-[50vw]  sm:w-full '>
              <h1 className='text-4xl md:text-5xl lg:text-8xl flex items-center justify-start gap-4'><img className='h-[7vw] w-[7vw] rounded-full' src="https://dennissnellenberg.com/assets/img/DSC07033.jpg" alt="" />Let's work</h1>
              <h1 className='text-4xl md:text-5xl lg:text-8xl'>together</h1>
            </div>
            <i class="text-5xl ri-arrow-left-down-line"></i>
          </div>

          <hr className='my-20 b-[0.2px] hr-thin' />

          <div className='flex gap-5 flex-col md:flex-row'>
            <button className='px-16 py-4 border-[0.1px] text-xl  rounded-full'>info@gmail.com</button>
            <button className='px-16 py-4 border-[0.1px] text-xl  rounded-full'>+9195893599892</button>

          </div>
        </div>



      </div>


      <div>

      </div>

      <div className='w-full md:pt-20 lg:pt-0 flex flex-col-reverse md:flex-row justify-between text-white px-12'>
        <div className='flex gap-10 '>
          <div>
            <h3 className='text-sm font-mono text-[#D2D2D2;] pb-3'>VERSION</h3>
            <h1 className='text-base'>2022 © Edition</h1>
          </div>
          <div>
            <h3 className='text-sm font-mono text-[#D2D2D2;] pb-3'>Local time</h3>
            <h1>09:26 AM GMT+2</h1>
          </div>
        </div>

        <div className='border-b-[1px] md:border-none mb-5 md:mb-0 pb-5 md:pb-0'>
          <h3 className='text-sm font-mono text-[#D2D2D2;] pb-3'>Socials</h3>
          <ul className='flex gap-7'>
            <li>Awwwards</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default footer
