
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const usePopularMovies=()=>{
    const dispatch = useDispatch();

  const getPopularMoviesData = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addPopularMovies(json.results))
  }

  useEffect(()=>{
    getPopularMoviesData();
  },[])
}

export default usePopularMovies;