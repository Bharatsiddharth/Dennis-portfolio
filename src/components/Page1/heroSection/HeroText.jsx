import React, { useEffect, useState } from 'react'
import { motion , useScroll } from 'framer-motion'

const HeroText = () => {

  const scrollY = useScroll().scrollY;
  const [scrollDirection, setScrollDirection] = useState(1);

  useEffect(() => {
    scrollY.on("change", function () {
      const currentScrolling = scrollY.get() - scrollY.getPrevious();

      if (currentScrolling > 0) {
        setScrollDirection(1);
      } else {
        setScrollDirection(0);
      }
    });
  }, [scrollY]);


  return (
    
      <div className='-mt-[20rem] sm:-mt-[25vw] overflow-hidden '>
        <motion.div 

        initial={{ x: -2106 }}
        animate={{ 
          x: scrollDirection > 0 ? -4212 : 0,
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}

        
        className='flex 
        '>
        <h1 className='text-white whitespace-nowrap font-medium  text-[14.5vw]'>- Dennis Snellenberg</h1>
        <h1 className='text-white whitespace-nowrap font-medium  text-[14.5vw]'>- Dennis Snellenberg</h1>
        <h1 className='text-white whitespace-nowrap font-medium  text-[14.5vw]'>- Dennis Snellenberg</h1>
        </motion.div>
      </div>
   
  )
}

export default HeroText
