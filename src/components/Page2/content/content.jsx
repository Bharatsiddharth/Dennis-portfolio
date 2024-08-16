import React, { useEffect } from 'react'
import SplitType from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Content = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const typeSplit = new SplitType('[animate]', {
          types: 'lines, words, chars',
          tagName: 'span',
        });
    
        gsap.from('[animate] .line', {
          y: '100%',
          opacity: 0,
          duration: 0.2,
          ease: 'linear',
          stagger: 0.25,
          scrollTrigger: {
            trigger: '[animate]',
            start: 'top center',
            end: 'bottom center',
            // markers: true,
            scrub:1
          },
        });

      }, []);

  return (
    <div  className='main mt-0 mb-10 sm:mt-60 px-20'>
      <div  className='flex gap-20 justify-between flex-col sm:flex-row'>
        <p animate="true" className='text-2xl sm:text-3xl px-5  w-full sm:w-[70%]'>
        Helping brands stand out in the digital era.
        Together we will set the new status quo.
        No nonsense, always on the cutting edge.
        </p>

        <p className='w-full sm:text-lg sm:w-[30%] px-5 pr-28 sm:pr-5  text-base'>
        The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
        </p>
      </div>
    </div>
  )
}

export default Content;
