import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl  rounded-tr-3xl text-black'>
           <h1 className='font-["Neue Montreal"] text-[3.5vw] leading-[3.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
           </h1>

           <div className='w-full border-t-[1px] mt-20 pt-10 border-[#808d48] flex gap-5 '>
               <div className='w-1/2 '>
                   <h1 className='text-7xl'>Our approach</h1>
                   <button className='flex gap-10 uppercase items-center px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white'>Read More
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                   </button>
               </div>
               <div className='w-1/2 h-[70vh] bg-[url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg)] rounded-3xl bg-cover bg -center'></div>
           </div>
    </div>
  )
}

export default About