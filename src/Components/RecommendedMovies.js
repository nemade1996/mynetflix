// RecommendedMovies.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import MovieCard from './MovieCard';
import { API_OPTIONS } from '../utils/constant';

const RecommendedMovies = () => {
  const { movieId } = useParams();
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    fetchRecommendedMovies();
  }, [movieId]); // Include movieId in dependencies if needed

  const fetchRecommendedMovies = async () => {
    const moviesResult = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`, API_OPTIONS);
    const json = await moviesResult.json();
    const recommendMoviesResult = json.results;
    setRecommendedMovies(recommendMoviesResult);
  }

  return (
    <div>
      <div className='bg-black pt-14 pb-14 px-3'>
        <h2 className='text-white text-3xl mb-4 font-bold'>You may also like</h2>
        {
          recommendedMovies && (
            <Swiper
              spaceBetween={16}
              navigation
              modules={[Navigation]}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
                1280: { slidesPerView: 7 },
              }}
            >
              {recommendedMovies.map((movie) => (
                <SwiperSlide key={movie.id} className='w-auto'>
                  <MovieCard ogTitle={movie.title} id={movie.id} posterPath={movie.poster_path}/>
                </SwiperSlide>
              ))}
            </Swiper>
          )
        }
      </div>
    </div>
  );
};

export default RecommendedMovies;