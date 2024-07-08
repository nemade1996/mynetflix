import React from 'react'
import { IMG_CDN } from '../utils/constant'
import dummy from "../images/dummy.jpg"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const MovieCard = ({posterPath,ogTitle,id}) => {
  const { movieId } = useParams();

  const imageUrl = posterPath ? IMG_CDN + posterPath : dummy;

  return (
    <div className='flex-shrink-0 w-full sm:w-48 '>
      <Link to={`/movie/${id}`}>
      <img 
        src={imageUrl} 
        alt={ogTitle} 
        className='w-full sm:w-48 h-auto rounded-lg shadow-lg' 
      />      
      <h6 className='text-2xl sm:text-lg text-white mt-2 text-center'>{ogTitle}</h6>
      </Link>
    </div>
  )
}

export default MovieCard