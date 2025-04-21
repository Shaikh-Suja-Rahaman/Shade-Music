import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {PlayerContext} from '../context/PlayerContext'

function Player() {

  const {track, seekSong, seekBar, seekBg, playStatus, play, pause, time, previous, next} = useContext(PlayerContext)

  return (
    <div className='h-[10%] bg-black justify-between items-center flex pl-4 text-white'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt=""/>
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img src={assets.shuffle_icon} className='w-4 cursor-pointer' alt=""/>
          <img src={assets.prev_icon} onClick={previous} className='w-4 cursor-pointer' alt=""/>
          {playStatus
          ? <img src={assets.pause_icon} onClick={pause} className='w-4 cursor-pointer' alt=""/>
          : <img src={assets.play_icon} onClick={play} className='w-4 cursor-pointer' alt=""/>}


          <img src={assets.next_icon} onClick={next} className='w-4 cursor-pointer' alt=""/>
          <img src={assets.loop_icon} className='w-4 cursor-pointer' alt=""/>
        </div>
        <div className='flex items-center gap-5'>

          <p>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
          </div>
          <p>{time.totalTime.minutes}:{time.totalTime.seconds}</p>

        </div>

      </div>


    </div>
  )
}

export default Player