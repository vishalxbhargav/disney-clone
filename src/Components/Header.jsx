import React, { useReducer, useState } from 'react'
import { HiDotsVertical } from "react-icons/hi";
import {HiHome,HiMagnifyingGlass,HiStar,HiPlus,HiPlayCircle,HiTv} from 'react-icons/hi2'
import logo from '../assets/Images/logo.png'
import user from '../assets/Images/user.jpg';
import HeaderItems from './HeaderItems'


export default function Header() {

  const [togle,setTogle]=useState(false);

  const menu=[
    {
        name:'HOME',
        icon:HiHome
    },
    {
        name:'SEARCH',
        icon:HiMagnifyingGlass
    },
    {
        name:'WATCH LIST',
        icon:HiPlus
    },
    {
        name:'ORIGINALS',
        icon:HiStar
    },
    {
        name:'MOVIES',
        icon:HiPlayCircle
    },
    {
        name:'SERIES',
        icon:HiTv
    }
]
  return (
    <div className='flex items-center justify-between p-5 font-[15px] '>
      <div className='flex items-center gap-8'>
        <img src={logo} className='w-[80px] object-cover md:w-[115px]' />
          <div className="hidden md:flex gap-8">
          
            {menu.map((item)=>(
              <HeaderItems name={item.name} Icon={item.icon}/>
            ))}
          </div>
          <div className='flex  md:hidden gap-8'>
            {menu.map((item,index)=>index<3&&(
              <HeaderItems name={''} Icon={item.icon}/>
            ))}
            <div className='text-white cursor-pointer'>
              <HiDotsVertical onClick={()=>{setTogle(!togle)}}/>
              {
                togle?(<div className='absolute mt-3 bg-[#121212] 
                border-[1px] border-gray-700 p-3 px-5 py-4'>
                {menu.map((item,index)=>index>2&&(
                <HeaderItems name={item.name} Icon={item.icon}/>
                ))}
              </div>):null
              }
              
            </div>
          </div>
      </div>
      <img className='w-[50px] rounded-full' src={user}/>
    </div>
  )
}
