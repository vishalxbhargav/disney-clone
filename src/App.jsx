import React from 'react';
import './App.css'
import Slider from './Components/Slider';
import Header from './Components/Header';
import ProductionHouse from './Components/ProductionHouse';
import GenreMovieList from './Components/GenreMovieList';

function App() {
  
  return (
    <div className='bg-[#131520]'>
     <Header/>
     <Slider/>
     <ProductionHouse/>
     <GenreMovieList/>
    </div>
  )
}

export default App
