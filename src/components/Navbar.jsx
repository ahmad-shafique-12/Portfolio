import React, { useRef, useState } from 'react'
import { FaBars } from "react-icons/fa6";
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="w-full flex justify-between items-center py-5 px-5">
        <div className=" px-2 flex justify-between items-center">
          <h1 className="text-[#F87171] text-4xl font-bold cursor-pointer pl-8">Ahmad Shafique</h1>
        </div>
        <FaBars onClick={toggleMenu} className='bars lg:hidden block text-white text-2xl font-semibold cursor-pointer mx-4' />


        <ul className="  gap-10 px-2 lg:flex hidden ">

          <div className="">
            <li className="infox relative text-white text-xl font-semibold cursor-pointer hover:text-yellow-400">Home</li>
            <div className="linethrough h-1 w-[0%] bg-red-500"></div>
          </div>
          <div className="">
            <li className="infox relative text-white text-xl font-semibold cursor-pointer hover:text-yellow-400">About</li>
            <div className="linethrough h-1 w-[0%] bg-red-500"></div>
          </div>
          <div className="">
            <li className="infox relative text-white text-xl font-semibold cursor-pointer hover:text-yellow-400">Skills</li>
            <div className="linethrough h-1 w-[0%] bg-red-500"></div>
          </div>
          <div className="">
            <p className="infox relative text-white text-xl font-semibold cursor-pointer hover:text-yellow-400">Projects</p>
            <div className="linethrough h-1 w-[0%] bg-red-500"></div>
          </div>
          <div className="">
            <li className="infox relative text-white text-xl font-semibold cursor-liointer hover:text-yellow-400">Contact</li>
            <div className="linethrough h-1 w-[0%] bg-red-500"></div>
          </div>
        </ul>
      </div>
{isMenuOpen &&(

      <div className='bg-[#0000009f] w-full h-[100vh] fixed top-[90px] z-40   '>
        <ul className='flex  flex-col items-center gap-10'>
          <li className='text-white text-[30px] font-[700] cursor-pointer mt-20 '>Home</li>
          <li className='text-white text-[30px] font-[700] cursor-pointer'>About</li>
          <li className='text-white text-[30px] font-[700] cursor-pointer'>Skill</li>
          <li className='text-white text-[30px] font-[700] cursor-pointer'>Project</li>
          <li className='text-white text-[30px] font-[700] cursor-pointer'>Contact</li>
        </ul>
      </div>

)}
    </>


  )
}

export default Navbar