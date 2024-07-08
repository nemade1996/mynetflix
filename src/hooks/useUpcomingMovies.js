
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useUpcomingMovies=()=>{
    const dispatch = useDispatch();

  const getUpcomingMoviesData = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results))
  }

  useEffect(()=>{
    getUpcomingMoviesData();
  },[])
}

export default useUpcomingMovies;