import React from 'react'
import logo from "../images/logo.png"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import avatar from "../images/avatar.webp"
import { auth } from '../utils/firebase'
import { signOut } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { user_Avtar } from '../utils/constant'
import { toggleGptSearchView } from '../utils/gptSlice'
import {SUPPORTED_LANG} from "../utils/constant"
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  const hangleSignedOut =()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed In, signed Up
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : user_Avtar}));
            navigate("/browse")
        } else {
          // User is signed out
          dispatch(removeUser);
          navigate("/")
        }
      });

      return ()=> unsubscribe();
},[])

  const gptSearchHandler=()=>{
    // console.log(gptShow)
    dispatch(toggleGptSearchView())
  }

  const handleLangChange=(e)=>{
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='relative wrapper z-10'>
      <div className='bg-overlay'>
        <div className='xl:flex-row lg:flex-row !flex-nowrap items-center bg-gradient-to-b from-black to-transparent'>
          <div className="container mx-auto flex justify-between pr-2 pl-2">
            <div className='navbar-brand inline-blocks'>
              <Link to="/"><img src={logo} className='w-[150px]' /></Link>
            </div>
            {user && 
              <div className='flex items-center space-x-4'>
                <div className="flex justify-center items-center bg-gray-900">
                  {
                    showGptSearch && (
                      <select className="bg-black text-white py-2 px-4 rounded" onChange={handleLangChange}>
                    {SUPPORTED_LANG.map((lang) => (
                      <option key={lang.identifier} value={lang.identifier} className="bg-black text-white">
                        {lang.name}
                      </option>
                    ))}
                  </select>
                    )
                  }
                  
                </div>
                <button className='text-white bg-slate-800 px-5 py-2 rounded-sm' onClick={gptSearchHandler}>
                  {showGptSearch ? "Home" : "Search"}</button>
                <img src={avatar} className='w-10 h-10 rounded-full' alt="User Avatar" />
                <button onClick={hangleSignedOut} className='text-white py-2 rounded'
                >Sign Out</button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header