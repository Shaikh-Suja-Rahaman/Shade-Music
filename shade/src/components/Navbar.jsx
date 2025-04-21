import React, {useState} from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import Payment from './Payment'

const Navbar = () => {

  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
      <div className='flex items-center gap-2'>
        <img onClick={()=> navigate(-1)} src={assets.arrow_left} alt="" className='w-8 bg-black opacity-50 hover:opacity-100 transition-all ease-in-out  p-2 rounded-2xl cursor-pointer'/>
        <img onClick={()=> navigate(1)} src={assets.arrow_right} alt="" className='w-8 bg-black opacity-50 hover:opacity-100 transition-all ease-in-out p-2 rounded-2xl cursor-pointer'/>
      </div>
      <div className='flex items-center gap-4'>
      <p
          onClick={openModal}
          className='bg-white text-black cursor-pointer text-[15px] px-4 py-1 rounded-2xl hidden md:block'
        >
          Get me a coffee ☕
        </p>        {/* <p className='bg-black py-1 px-3 rounded-2xl text-[15px]'>Install App</p> */}
        <a href='https://github.com/Shaikh-Suja-Rahaman' target="_blank"  ><p className='bg-purple-500 text-black w-7 h-7 flex justify-center items-center py-1 px-3 rounded-2xl text-[15px]'>S</p></a>
      </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
      <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' >All</p>
      {/* <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer' >Music</p>
      <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer' >Podcasts</p> */}

    </div>
    {isModalOpen && (
        <div
          className=" fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 h-full w-full bg-brown-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 "
          onClick={closeModal}

        >
          <div
            className="relative w-full max-w-md bg-white p-6 rounded-2xl shadow-lg"
            onClick={e => e.stopPropagation()}
          >
            <Payment/>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar