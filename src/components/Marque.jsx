import { motion } from 'framer-motion'
import React from 'react'

const Marque = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed = ".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
         <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden'>
           <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[20vw] leading-none font-["Founder Grotesk"] uppercase pt-5 mb-4 mr-20 font-semibold '>we are ochi</motion.h1>
           <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} className='text-[20vw] leading-none font-["Founder Grotesk"] uppercase pt-5 mb-4 mr-20 font-semibold'>we are ochi</motion.h1> 
             
        </div>  
    </div>
  )
}

export default Marque