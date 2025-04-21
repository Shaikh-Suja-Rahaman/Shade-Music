import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({image, name, desc, id}) => {
  const {playSingleTrack} = useContext(PlayerContext)

  const handleClick = () => {
    console.log('Song clicked:', id)  // Debug log
    playSingleTrack(id)
  }

  return (
    <div
      onClick={handleClick}
      className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all ease-in-out duration-200'
    >
      <img src={image} className='rounded' alt=""/>
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem