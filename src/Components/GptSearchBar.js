import React, { useRef } from 'react'
import {searchInputText} from "../utils/langConstant"
import {searchBtnText} from "../utils/langConstant"
import lang from '../utils/langConstant'
import { useSelector } from 'react-redux'
import openai from "../utils/openai"
import {API_OPTIONS} from "../utils/constant"
import { useState } from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'


const GptSearchBar = () => {
  const langKey = useSelector(store=>store.config.lang);
  const searchText = useRef(null);
  const [searchResultList, setSearchResultList] = useState([]);


  const handleGptSearchClick  =  async ()=>{
    console.log(searchText.current.value)    
    const searchQuery = searchText.current.value;
    // make api call to gpt api and get movie result
    const searchResult = await 
    fetch("https://api.themoviedb.org/3/search/movie?query="+searchQuery+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json = await searchResult.json();
    setSearchResultList(json.results);
    console.log(json)

  }
  
  console.log(searchResultList);

  return (
    <div className='bg-black'>
      <div className="-mt-20 flex flex-col justify-center items-center pt-40 bg-black">
        <div className=''>
          <form onSubmit={(e)=>e.preventDefault()} className="w-[300px] md:w-[400px] flex-col md:flex-row flex justify-center items-center" >
            <input
              ref={searchText}
              type="text"
              className="border-2 border-neutral-800 w-full py-3 pl-4 text-white bg-black rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder={lang[langKey].searchInputText}
            />
            <button className="h-full w-full md:w-auto px-6 py-3 text-white bg-red-500 rounded-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={handleGptSearchClick }>
              {lang[langKey].searchBtnText}
            </button>
          </form>
        </div>
      </div>
      {
        searchResultList.length === 0 ? (
          <div className='h-[500px] bg-black'></div>
        ) : (
          <div className='h-0 bg-black'></div>
        )
      }
      <div className="bg-black grid grid-cols-6 gap-5 mt-10 mx-auto max-w-7xl">
        {searchResultList.map(movie => (
          <MovieCard
            key={movie.id} 
            posterPath={movie.poster_path}
            ogTitle={movie.original_title}
            id={movie.id} 
          />
        ))}
      </div>
     
    
      
    </div>
  )
}

export default GptSearchBar