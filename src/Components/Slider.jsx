import React, { useEffect, useRef, useState } from 'react'
import {HiChevronLeft,HiChevronRight} from 'react-icons/hi2'
import GlobleApi from '../Service/GlobleApi';
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;

export default function Slider() {

    const elementRef=useRef();

    const [movieList,setMovieList]=useState([]);
    useEffect(()=>{
        getApiData();
    },[]);
    const getApiData=()=>{
        GlobleApi.trandingVideos.then(res=>{
            console.log(res.data.results);
            setMovieList(res.data.results);
        });
    }
    const sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110;
    }
    const sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110;
    }
  return (
    <div >
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)} />
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] right-0 cursor-pointer' onClick={()=>sliderRight(elementRef.current)}/>
        <div className='flex overflow-x-auto px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}> 
        {movieList.map((item)=>(
            <img key={item.id} src={IMAGE_BASE_URL+item.backdrop_path} 
            className='min-w-full  md:h-[310px] object-cover
            object-left-top mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in'/>
        ))}
    </div>
    </div>
  )
}
