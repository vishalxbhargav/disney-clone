import React, { useEffect,useRef, useState } from 'react'
import GlobleApi from '../Service/GlobleApi'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';
import MovieCard from './MovieCard';

export default function MovieList({id,index_}) {
    const elementRef=useRef(null);
    const [movieList,setMovieList]=useState([]);
    useEffect(()=>{
        getMovieListById();
    },[])
    const getMovieListById=()=>{
        GlobleApi.getMovieByGenerId(id).then(res=>{
            console.log(res.data.results);
            setMovieList(res.data.results);
        })
    }
    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index_%3==0?'mt-[80px]':'mt-[140px]'} `}/>
        <div className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4' ref={elementRef}>
        {
            movieList.map((item)=>(
                <>
                {index_%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
                 </> 
            ))
        }
        </div>
        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[140px]'}`}/> 
  
    </div>
    
  )
}

