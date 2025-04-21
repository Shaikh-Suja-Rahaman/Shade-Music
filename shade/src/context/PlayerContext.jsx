import {createContext, useRef, useState, useEffect} from "react"
import { songsData, albumsData, topHitsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) =>{

  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]) //first song
  const [playStatus, setPlayStatus] = useState(false) //to know if its paused or not
  const [time, setTime] = useState({

    currentTime:{
      seconds:0,
      minutes: 0,
    },
    totalTime:{
      seconds:0,
      minutes: 0,
    }})


    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () =>{
              seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%" //we get the percentage of width
              setTime({currentTime:{
                seconds:Math.floor(audioRef.current.currentTime%60),
                minutes: Math.floor(audioRef.current.currentTime/60),
              },
              totalTime:{
                seconds:Math.floor(audioRef.current.duration%60),
                minutes: Math.floor(audioRef.current.duration/60),
              }})
            }
        }, 1000);
    },[audioRef]);

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  }
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  }

  const playWithId = async (songId, albumId) => {
    const album = albumsData[albumId];
    const song = album.songs.find(s => s.id === songId);
    await setTrack(song);
    await audioRef.current.play();
    setPlayStatus(true);
  }

  const next = async () => {
    // First check if current track is from topHits
    const topHitIndex = topHitsData.findIndex(song => song.id === track.id);

    if (topHitIndex !== -1) {
      // Current song is from topHits
      if (topHitIndex < topHitsData.length - 1) {
        const nextSong = topHitsData[topHitIndex + 1];
        await setTrack(nextSong);
        await audioRef.current.play();
        setPlayStatus(true);
      }
      return;
    }

    // If not in topHits, check albums
    const currentAlbum = albumsData.find(album =>
      album.songs.some(song => song.id === track.id)
    );

    if (currentAlbum) {
      const currentSongIndex = currentAlbum.songs.findIndex(song => song.id === track.id);
      if (currentSongIndex < currentAlbum.songs.length - 1) {
        const nextSong = currentAlbum.songs[currentSongIndex + 1];
        await setTrack(nextSong);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    }
  }

  const previous = async () => {
    // First check if current track is from topHits
    const topHitIndex = topHitsData.findIndex(song => song.id === track.id);

    if (topHitIndex !== -1) {
      // Current song is from topHits
      if (topHitIndex > 0) {
        const prevSong = topHitsData[topHitIndex - 1];
        await setTrack(prevSong);
        await audioRef.current.play();
        setPlayStatus(true);
      }
      return;
    }

    // If not in topHits, check albums
    const currentAlbum = albumsData.find(album =>
      album.songs.some(song => song.id === track.id)
    );

    if (currentAlbum) {
      const currentSongIndex = currentAlbum.songs.findIndex(song => song.id === track.id);
      if (currentSongIndex > 0) {
        const prevSong = currentAlbum.songs[currentSongIndex - 1];
        await setTrack(prevSong);
        await audioRef.current.play();
        setPlayStatus(true);
      }
    }
  }

  const seekSong = async (e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration);
  }

  const playSingleTrack = async (songId) => {
    const song = topHitsData.find(s => s.id === songId);
    if (song) {
      await setTrack(song);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }

  const contextValue = {
      audioRef, seekBar, seekBg,
      track, setTrack,
      playStatus, setPlayStatus,
      time, setTime,
      play, pause,
      playWithId,
      previous, next,
      seekSong,
      playSingleTrack
  }

  return(
    <PlayerContext.Provider value = {contextValue}>
      {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;