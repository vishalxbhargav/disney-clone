import React from 'react'

export default function HeaderItems({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3 cursor-pointer font-semibold hover:underline underline-offset-8 mb-3'>
        <Icon/>
        <h2 className='font-[15px]'>{name}</h2>
    </div>
  )
}
