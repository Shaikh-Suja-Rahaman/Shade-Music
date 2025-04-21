import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData } from '../assets/assets';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';
import { useContext } from 'react'

const DisplayAlbum = () => {

  const {id} = useParams();
  console.log(id);
  const albumData = albumsData[id];
  console.log(albumData)
  const {playWithId} = useContext(PlayerContext)

  return (
    <>
      <Navbar/>
      <div  className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='w-48 rounded' src={albumData.image}/>
        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className='mt-1 flex justify-between'>
            <img className='inline-block w-5' src={assets.spotify_logo}/>
            <b>Spotify</b>
            121212 likes
            <b>50 likes</b>
            about 4hr 90min
          </p>
        </div>
      </div>
      <div className='grid gird-cols-2 sm:grid-cols-2 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Ttile</p>
        {/* <p>Album</p> */}
        {/* <p className='hidden sm:block'>Date Added</p> */}
        <img src={assets.clock_icon} className='m-auto w-4'/>
      </div>
      <hr/>
      {
        albumData.songs.map((song, index) => (
          <div
            key={song.id}
            onClick={() => playWithId(song.id, albumData.id)}
            className='grid grid-cols-2 sm:grid-cols-2 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'
          >
            <p className='text-white'>
              <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
              <img className='inline w-10 h-10 mr-5 object-cover rounded' src={song.image}/>
              {song.name}
            </p>


            <p className='text-[15px] text-center'>{song.duration}</p>
          </div>
        ))
      }
    </>
  )
}

export default DisplayAlbum