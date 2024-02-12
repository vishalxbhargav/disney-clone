import React, { useState } from 'react'
import GenresList from '../Constant/GenresList';

import MovieList from './MovieList';

export default function GenreMovieList({id,index}) {
   
  return (
    <div className='p-8 px-8 md:px-16'>
        {
           GenresList.genere.map((item,index)=>(
           <div>
             <h1 className='text-white text-[20px] font-bold'>{item.name}</h1>
             <MovieList id={item.id} index_={index}/>
           </div>
           ))
        }
    </div>
  )
}
