import React from 'react'
import { useSelector } from 'react-redux'
import nowPlayingMovies from "../utils/moviesSlice"
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies)
    // console.log(movies)
    if(!movies) return;

    const mainMovie = movies[0];
    // console.log(mainMovie)

    const {original_title, overview, id} = mainMovie;

    return (
        <div className='relative mt-[-100px]'>
            <VideoBackground movieId={id}/>
            <VideoTitle title={original_title} description={overview}/>
        </div>
    )
}

export default MainContainer