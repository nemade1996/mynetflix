import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useParams } from 'react-router-dom';
import dummy from "../images/dummy.jpg"
import { FaStar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import RecommendedMovies from './RecommendedMovies';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const MovieDetail = () => {
    const [singleMovie, setSingleMovie] = useState();
    const {movieId} = useParams();

    useEffect(()=>{
      fetchMovieDetail();
    },[movieId])

    const fetchMovieDetail= async ()=>{
      const movieData = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"?language=en-US", API_OPTIONS)
      const json = await movieData.json();
      setSingleMovie(json)
    }

    const {title, tagline, status, poster_path, origin_country, original_language, release_date, overview, vote_average} = singleMovie || {};
    const imageUrl = poster_path ? "https://image.tmdb.org/t/p/w500" + poster_path : dummy;

    // console.log(singleMovie)

  return (
    <>
      <div className='bg-black section-frame br-fix overflow-hidden'>
        <div className='wrapper image-wrapper bg-cover bg-image bg-overlay bg-overlay-500 bg-[center_center] bg-no-repeat bg-scroll relative z-0'>
          <div className='container'>
            <div className='block md:flex justify-center items-center'>
              <div className='w-full md:w-8/12 p-4'>
                <div className="flex flex-col h-full px-1 md:px-12">
                  <p className="flex items-center gap-1 mb-2">
                    <FaStar className="text-yellow-600 text-xl" />
                    <span className="text-white text-xl">{ Math.floor(vote_average)+".0"}</span>
                  </p>
                  <h1 className='text-3xl md:text-5xl font-extrabold text-white mb-3 md:mb-7'>{title}</h1>
                  <h6 className='text-2xl text-white'>{tagline}</h6>
                  <h5 className='text-lg mt-3 text-gray-500'>{origin_country} | {original_language} | {release_date}</h5>
                  <p className='text-md mt-3 text-gray-400'>{overview}</p>
                </div>
                </div>
              <div className="w-full md:w-4/12">
                <img src={imageUrl} alt={title} className='w-full'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecommendedMovies/>
      <div className='text-center bg-black pb-20'>
        <Link to="/"><button className='text-white bg-red-700 px-5 py-2 rounded-sm'>Back To Home</button></Link>
      </div>
      <Footer/>
    </>
  )
}

export default MovieDetail