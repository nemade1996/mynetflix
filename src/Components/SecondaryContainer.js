import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  // console.log(movies)

  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular on Netflix"} movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>
    )
  )
}

export default SecondaryContainer