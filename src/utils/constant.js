
import avtar from "../images/user.png"
export const user_Avtar = avtar;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    }
  };


  export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

  export const SUPPORTED_LANG = [
    {
      identifier : "english",
      name : "English"
    }
    ,{
      identifier : "hindi",
      name : "Hindi"
    }
    ,{
      identifier : "spanish",
      name : "Spanish"
    },
  ]

