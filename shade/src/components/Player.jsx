import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import {PlayerContext} from '../context/PlayerContext'

function Player() {

  const {seekBar, seekBg, playStatus, play, pause} = useContext(PlayerContext)

  return (
    <div className='h-[10%] bg-black justify-between items-center flex pl-4 text-white'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={songsData[0].image} alt=""/>
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img src={assets.shuffle_icon} className='w-4 cursor-pointer' alt=""/>
          <img src={assets.prev_icon} className='w-4 cursor-pointer' alt=""/>
          {playStatus
          ? <img src={assets.pause_icon} onClick={pause} className='w-4 cursor-pointer' alt=""/>
          : <img src={assets.play_icon} onClick={play} className='w-4 cursor-pointer' alt=""/>}


          <img src={assets.next_icon} className='w-4 cursor-pointer' alt=""/>
          <img src={assets.loop_icon} className='w-4 cursor-pointer' alt=""/>
        </div>
        <div className='flex items-center gap-5'>

          <p>1:06</p>
          <div ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
          </div>
          <p>3:20</p>

        </div>

      </div>


    </div>
  )
}

export default Player