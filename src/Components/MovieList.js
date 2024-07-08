import React from 'react'
import MovieCard from './MovieCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import "swiper/swiper-bundle.css"

const MovieList = ({title, movies, id}) => {

  return (
    <div className='p-6'>
      <h1 className='text-3xl mb-4 text-white font-bold'>{title}</h1>
      <Swiper
        spaceBetween={16}
        navigation
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 7,
          },
        }}
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id} className='w-auto'>
            <MovieCard posterPath={movie.poster_path} ogTitle={movie.original_title} id={movie.id}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieList