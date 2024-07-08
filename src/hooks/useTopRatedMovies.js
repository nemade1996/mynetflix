
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useTopRatedMovies=()=>{
    const dispatch = useDispatch();

  const getTopRatedMoviesData = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(()=>{
    getTopRatedMoviesData();
  },[])
}

export default useTopRatedMovies;