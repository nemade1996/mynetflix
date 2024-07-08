import React, { useState, useRef } from 'react'
import Header from './Header'
import introbg from "../images/intro-bg.jpg"
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase'
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null)
  const dispatch = useDispatch("user")

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick =()=>{

    const msg = checkValidateData(email.current.value,password.current.value)
    setErrorMsg(msg)

    if(msg) return;

    // signIn signUp logic

    if(!isSignInForm){
      // Signed up logic
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/12824231?v=4"
          })
          
          .then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
          })
          
          .catch((error) => {
            setErrorMsg(error.message)
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage)
      });
    }
    else{
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage)
        });
      }
    }


  const toggleSignInForm = ()=>{
    setSignInForm(!isSignInForm)
  }

  return (
    <div className='h-screen introbg'>
      <Header/>

      <div className='mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16'>
        <div className='py-0'>
        <div className="flex justify-center mt-20">
          <div className="bg-black bg-opacity-80 rounded-lg p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
            <form onSubmit={(e)=>e.preventDefault()}>
              { !isSignInForm && 
                <div className="mb-4">
                  <label for="name" className="block text-white mb-2">Name</label>
                  <input type="text" ref={name} name="name" placeholder="Name" className="border border-gray-600 w-full bg-gray-900 rounded-md py-3 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500" />
                </div>
              }
              <div className="mb-4">
                <label for="email" className="block text-white mb-2">Email Address</label>
                <input type="email" ref={email} name="email" placeholder="Email" className="border border-gray-600 w-full bg-gray-900 rounded-md py-3 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label for="password" className="block text-white mb-2">Password</label>
                <input type="password" ref={password}  name="password" placeholder="Password" className="border border-gray-600 w-full bg-gray-900 rounded-md py-3 px-3 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500" />
              </div>
              <p className="text-md mt-4 font-normal text-red-600">{errorMsg}</p>
              <button type="submit" className="w-full bg-red-600 text-white rounded-md py-2 px-4 font-semibold hover:bg-red-700 transition duration-300" onClick={handleButtonClick} >{isSignInForm ? "Sign In" : "Sign Up"}</button>
              <p className="text-md mt-4 font-normal mb-4 text-white" onClick={toggleSignInForm}>New to Netflix? Sign up now.</p>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login