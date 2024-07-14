import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-300 flex gap-5 items-center px-32 '>
        <div className='cardcntainer w-1/2 h-[50vh]'>
             <div className='card relative w-full h-full bg-[#004D43] flex items-center justify-center rounded-xl '>
                <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-2 border-2 rounded-full'>&copy;2019-2022</button>
             </div>
        </div>

        <div className='cardcntainer w-1/2 h-[50vh] flex gap-5'>
        <div className='card relative w-full h-full bg-zinc-900 flex items-center justify-center rounded-xl '>
                <img className='w-30 ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-2 border-2 rounded-full'>RATING 5.0 ON CLUTCH</button>
             </div>
             <div className='card relative w-full h-full bg-zinc-900 flex items-center justify-center rounded-xl '>
                <img className='w-28 ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute left-10 bottom-10 px-5 py-2 border-2 rounded-full'>BUSINESS BOOTCAMP ALUMINI</button>
             </div>
        </div>
    </div>
  )
}

export default Cards