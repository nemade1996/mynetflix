import React from 'react'
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store)=>store.movies?.trailerVideo)
  
  useMovieTrailer(movieId);

  return (
    <div className='overflow-hidden bg-gradient-to-t from-black to-transparent'>
      <div className='trailer-overlay'></div>
      <iframe className='w-screen h-screen ' src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&loop=1&rel=0"
        }></iframe>
    </div>
  )
}

export default VideoBackground