import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect } from 'react';
// gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
    const mediaSources = [
        { type: 'video', src: 'https://dennissnellenberg.com/assets/img/home-item-2.mp4' },
        { type: 'image', src: 'https://dennissnellenberg.com/assets/img/home-item-8.jpg' },
 
        { type: 'image', src: 'https://dennissnellenberg.com/assets/img/home-item-3.jpg' },
        { type: 'video', src: 'https://dennissnellenberg.com/assets/img/home-item-4.mp4' },
        
    ];

    const mediaSources2 = [
        { type: 'video', src: 'https://dennissnellenberg.com/assets/img/home-item-5.mp4' },
        { type: 'image', src: 'https://dennissnellenberg.com/assets/img/home-item-6.jpg' },
        { type: 'video', src: 'https://dennissnellenberg.com/assets/img/home-item-7.mp4' },
        
        { type: 'image', src: 'https://dennissnellenberg.com/assets/img/home-item-1.jpg' }
    ]

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.to(".cardtop", {
          x: 200,
          scrollTrigger: {
            trigger: "#cardContainer",
            start: "380px center",
            end: "bottom center",
            scrub: 2,
            // markers: true,
          }
        });
    
        gsap.to(".cardbottom", {
          x: -200,
          scrollTrigger: {
            trigger: "#cardContainer",
            start: "380px center",
            end: "1000px center",
            scrub: 2,
            // markers: true,
          }
        });
      }, []);

    return (
        <>
            <div id='cardContainer' className='   flex flex-col  gap-10 -ml-44 overflow-hidden'>
                <div className='cardtop w-full flex flex-shrink-0 gap-10'>
                    {mediaSources.map((item, index) => (
                        <div className='w-[27rem]  flex-shrink-0 '
                            key={index}>
                            {item.type === 'video' ? (
                                <video className='object-cover' autoPlay loop muted >
                                    <source src={item.src} />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img className='w-[27rem]' src={item.src} />
                            )}
                        </div>
                    ))}
                </div>

                <div className='cardbottom w-full flex flex-shrink-0 gap-10'>
                    {mediaSources2.map((item, index) => (
                        <div className='w-[27rem] bg-red-200 flex-shrink-0 '
                            key={index}>
                            {item.type === 'video' ? (
                                <video className='' autoPlay loop muted >
                                    <source src={item.src} />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img className='w-[27rem]' src={item.src} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}

export default Cards;
