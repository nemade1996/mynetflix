
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useNowPlayingMovies=()=>{
    const dispatch = useDispatch();

  const getUpcomingMoviesData = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    getUpcomingMoviesData();
  },[])
}

export default useNowPlayingMovies;