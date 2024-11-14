import React from 'react'
import Logo from './logo'
import prof from '../assets/icon/powerlogopng'
import progress from '../assets/images/progress.svg'
import wallet from '../assets/images/wallet.svg'

export default function Sidebar() {
  return (
    <div className='relative'>
       
            <div className='absolute top-0 left-0 w-60 h-[100vh]  border-slate-500 border-[0.5px]'>
           <Logo/> 
           <div className='flex px-5'>
            <img src={prof} alt="" />
            <p>Admin</p>
           </div>
            {/* <button className='ml-5 text-white bg-red-500 text-xs p-1 rounded-sm'>logout-{'>'}</button> */}
            <div className='my-10'>
                <button className='leftButt p-1 text-sm'><img className='inline' src={progress} alt="" />Installation Progress </button>
            </div>
            <div className='my-10'>
                <button className='p-1 leftButt text-sm ease-in'><img className='inline' src={wallet} alt="" />Payment Record </button>
            </div>
            
        </div>
    </div>
  )
}
