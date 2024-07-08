import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import MovieDetail from './MovieDetail'


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        },
        {
            path : "/movie/:movieId",
            element : <MovieDetail/>
        }
    ])

    

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body