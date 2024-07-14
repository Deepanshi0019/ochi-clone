import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-950 pt-1'>
        <div className='textstructure mt-52 px-20'>
           {["we create","eye opening","presentations"].map((item,index)=>{
               return <div className="masker font-['Founder Grotesk']">
                <div className="w-fit flex">
                {index ===1 && (<motion.div initial={{width:0}} transition={{ease:[0.76,0,0.24,1]}} animate={{width:"9vw"}} className='w-[9vw] h-[5.5vw] bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-cover bg-center mt-4'></motion.div>)}
                <h1 className=' flex items-center uppercase leading-[6.5vw] tracking-tighter font-medium text-[7.5vw]'>{item}</h1>
                </div>
           </div>
           })} 

        </div>
        <div className='border-t-2 border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
             {["For public and private companies","From the first pitch to IPO"].map((item,index)=><p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
             <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full text-md font-light  uppercase'>start the project</div>
                <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500'>
                    <MdArrowOutward/>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Landing