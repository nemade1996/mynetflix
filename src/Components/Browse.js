import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import Footer from './Footer';

const Browse = () => {
  const showGptSearchView = useSelector(store=>store.gpt.showGptSearch)
  console.log(showGptSearchView)
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      {
        showGptSearchView ? <GptSearch/> : 
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>      
      }
      <Footer/>
    </div>
  )
}

export default Browse