"use client"
import React from 'react'
import cloudDark from "../../public/cloudDark.png"
import heroBg from "../../public/girl.svg"
import lake from "../../public/lake.jpg"
import { motion } from "framer-motion";
import { ReactTypical } from '@deadcoder0904/react-typical'
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <div style={        
           {backgroundImage: `url(${cloudDark.src})`, backgroundSize: "cover"}
      }>
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col flex-wrap md:flex-row items-center justify-center md:justify-between h-screen"
        >
        

           {/* left */}
          <div className="md:w-1/2 sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">
              <motion.span
                className={" text-white"}
              >
                Hi, It's Love Time 
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline">
                <ReactTypical
                  steps={[
                    "I Love You ",
                    4000,
                    "I Want You ",
                    4000,
                    "I Need You ",
                    4000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className=
                 "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              
            >
              I am all about Story Telling , Reading and Loving.
            </p>
            
          
           
          </div>

          {/* Right */}
         <div className='md:w-1/2 flex items-center justify-center '>
         <Image
            height={350}
            width={350}
            src={heroBg.src}
            alt=""
            className="animate-pulse "
          />
         </div>
          
          <Link href="/home"  className=" text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2 ">
           Continue Your Journey 
        </Link>
      
        </main>
     
      </div>
  )
}

export default Hero