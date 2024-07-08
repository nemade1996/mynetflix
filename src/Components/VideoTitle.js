import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from 'react-icons/io'

const VideoTitle = ({title, description}) => {
  return (
    <div className='z-10 mx-auto absolute bottom-[0%] left-[0%]  md:left-[5%] p-8'>
        <h2 className='text-4xl font-bold mb-4 text-white'>{title}</h2>
        <p className='text-lg mb-3 max-w-500px text-white'>{description}</p>
        <div className="flex space-x-2">
          <button className="flex gap-1 justify-center items-center bg-white text-gray-800 border-black-900 border-4 rounded px-4 py-2 hover:bg-red-600 hover:border-red-600 hover:text-white">Play <FaPlay/></button>
          <button className="flex gap-1 justify-center items-center bg-gray-800 text-white  rounded px-4 py-2 hover:bg-dark-red hover:bg-red-600 hover:border-red-600 hover:text-white">More Info <IoMdInformationCircleOutline/></button>
        </div>
    </div>
  )
}

export default VideoTitle