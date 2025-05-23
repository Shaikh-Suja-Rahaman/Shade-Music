import React, { useRef } from 'react'
import DisplayHome from './DisplayHome'
import {Routes, Route, Link, useLocation} from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'


const Display = () => {

  const displayRef = useRef();
  const location = useLocation()
  console.log(location)
  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum ? location.pathname.split("/")[2] : "";
  console.log(albumId)


  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path='/' element={<DisplayHome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
      </Routes>
    </div>
  )
}

export default Display