import React, { useEffect, useRef } from 'react'
import img1 from '../Images/webdevelopmentt.gif'
const Career = () => {


  return (
    <div>
      <div className=" bg-[#000319] h-[max-content] w-full py-8">
        <h1 className=" w-max m-auto text-[#16f2b3] text-4xl font-bold cursor-pointer text-center ">Experiences</h1>
        <div className=" h-[max-content] w-full lg:grid-cols-2 grid md:grid-cols-1 sm:grid-cols-1 mt-10">
          <div className="h-[max-content] w-full flex justify-center items-center">

            <img src={img1} alt="" className=" rounded-md w-[80%]" />

          </div>

          <div className="education w-full   flex-col   items-center">

            <div className="bg-black gap-5 pt-5 pb-5 m-auto mt-10 rounded-2xl w-[70%] flex flex-wrap items-center justify-center sm:justify-around border px-5">
              <div className="rounded-full border w-[100px] overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwx73bzeALGqR31ortF6I7QEGbe_Wc7RJHw&s"
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <div className="">
                <p className="text-md text-orange-400 font-semibold">(2023-2024)</p>
                <p className="text-md text-green-400 font-semibold">Frontend Developer</p>
                <p className="text-md text-white font-bold">Webdevrs</p>
              </div>
            </div>


            <div className="bg-black gap-5 pt-5 pb-5 m-auto mt-10 rounded-2xl w-[70%] border flex flex-wrap items-center justify-center sm:justify-around  px-5">
              <div className="rounded-full w-[100px]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwlkWGXN7bxbNCQOCZyqacjSNInpSPUU5xnA&s" alt="" className="rounded-full h-[100%] w-[100%]" />
              </div>
              <div className=" ">
                <p className=" text-md text-orange-400 font-semibold">(2024 - Continue)</p>
                <p className=" text-md text-green-400 font-semibold">MERN Stack developer</p>
                <p className=" text-md text-white font-bold">Letskill</p>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>

  )
}

export default Career