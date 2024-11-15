import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

import Description from './components/Description';
import Career from './components/Career';
import SliderDv from './components/SliderDv';

import RecentProjects from './components/RecentProjects';
import Footer from './components/Footer';
// import { IoMdDownload } from 'react-icons/io';


const Home = () => {
  const [loading, setLoading] = useState(false);
  const duration = 3000;

  const handleClick = (e) => {
    e.preventDefault();

    if (!loading) {
      setLoading(true);

      // Simulating animation effects
      setTimeout(() => {
        setLoading(false);
      }, duration);
    }
  };
  return (
    <div>
      <div className="parent h-[max-content] w-full">
        <div className="mainnn h-[100vh] pb-20 w-full flex flex-col  justify-start items-center -z-20 py-2">
          <Navbar />
          <div className="h-auto mt-4 w-[90%]  gap-20 m-auto  grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            <div className=" w-full m-auto  h-full   text-white font-bold ">
              <h1 className="sm:text-5xl text-3xl mt-10 ">Hello</h1>
              <h1 className="sm:text-5xl text-3xl mt-10 ">
                This is <span className="text-red-400 sm:text-5xl text-3xl mt-3">Ahmad Shafique</span>,<br /> I'm a Professional <span className="text-[rgb(22,242,179)]">Web Developer.</span>
              </h1>

              <div className="gap-5 flex px-5 w-max mt-10">
                <FaGithub className='Gitss hover:text-yellow-200 cursor-pointer text-4xl text-red-400' />
                <BsLinkedin className='Gitss hover:text-yellow-200 cursor-pointer text-4xl text-red-400 rounded-full' />
              </div>

              <div className=" w-[max-content] btn-responsive gap-2  flex justify-between items-center mt-10">
                <button className=" text-lg flex justify-evenly items-center rounded-full p-2 bg-transparent px-3 border-2">CONTACT ME <FaHandshake className='iconn ml-2' /></button>
                <button
      className={`${
        loading
          ? 'bg-[linear-gradient(45deg,#813ae8,#e146a0)] hover:bg-[linear-gradient(45deg,#813ae8,#e146a0)]'
          : 'bg-[linear-gradient(45deg,#e146a0,#813ae8)] hover:bg-[linear-gradient(45deg,#813ae8,#e146a0)]'
      } transition-all duration-300 text-lg flex justify-evenly items-center rounded-full p-2 px-3`}
      onClick={handleClick}
    >
      {loading ? 'Downloading...' : 'GET RESUME'}
      <IoMdDownload className="iconn ml-2" />
    </button>
              </div>

            </div>
            <div className="border-contanier  mt- ">
              <div class="  from-[#0d1224] w-full border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
                <div class="flex flex-row">
                  <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                  <div class="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                </div>
                <div class="px-4 lg:px-8 py-5">
                  <div class="flex flex-row space-x-2">
                    <div class="h-3 w-3 rounded-full bg-red-400"></div>
                    <div class="h-3 w-3 rounded-full bg-orange-400"></div>
                    <div class="h-3 w-3 rounded-full bg-green-200"></div>
                  </div>
                </div>
                <div class="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                  <code class="font-mono text-xs md:text-sm lg:text-base">
                    <div class="blink">
                      <span class="mr-2 text-pink-500">const</span>
                      <span class="mr-2 text-white">coder</span>
                      <span class="mr-2 text-pink-500">=</span>
                      <span class="text-gray-400">&#123;</span>
                    </div>
                    <div>
                      <span class="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                      <span class="text-gray-400">'</span>
                      <span class="text-amber-300">Ahmad Shafique</span>
                      <span class="text-gray-400">',</span></div>

                    <div class="ml-4 lg:ml-8 mr-2">
                      <span class=" text-white">skills:</span>
                      <span class="text-gray-400">['</span>
                      <span class="text-amber-300">JavaScript</span>
                      <span class="text-gray-400">', '</span>
                      <span class="text-amber-300">React</span>
                      <span class="text-gray-400">', '</span>
                      <span class="text-amber-300">Bootstrap</span>
                      <span class="text-gray-400">', '</span>
                      <span class="text-amber-300">Tailwind CSS</span>
                      <span class="text-gray-400">', '</span>
                      <span class="text-amber-300">NextJS</span>
                      <span class="text-gray-400">', '</span>
                      <span class="text-amber-300">Redux</span>
                      <span class="text-gray-400">', '</span>
                      <span class="text-amber-300">Express</span>
                      <span class="text-gray-400">', '</span>
                      <span class="text-amber-300">MongoDB</span>
                      <span class="text-gray-400">', '</span>
                      <span class="text-amber-300">NodeJS</span>
                      <span class="text-gray-400">'],</span></div>

                    <div>
                      <span class="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                      <span class="text-orange-400">true</span><span class="text-gray-400">,</span>
                    </div>
                    <div><span class="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                      <span class="text-orange-400">true</span>
                      <span class="text-gray-400">,</span>
                    </div>

                    <div>
                      <span class="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                      <span class="text-orange-400">true</span>
                      <span class="text-gray-400">,</span>
                    </div>

                    <div>

                      <span class="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                      <span class="text-orange-400">function</span>
                      <span class="text-gray-400">() &#123;</span>
                    </div>

                    <div>
                      <span class="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                      <span class="text-gray-400">(</span>
                    </div>

                    <div>
                      <span class="ml-12 lg:ml-24 text-cyan-400">this.</span>
                      <span class="mr-2 text-white">hardWorker</span>
                      <span class="text-amber-300">&amp;&amp;</span>
                    </div>

                    <div>
                      <span class="ml-12 lg:ml-24 text-cyan-400">this.</span>
                      <span class="mr-2 text-white">problemSolver</span>
                      <span class="text-amber-300">&amp;&amp;</span>
                    </div>

                    <div>
                      <span class="ml-12 lg:ml-24 text-cyan-400">this.</span>
                      <span class="mr-2 text-white">skills.length</span>
                      <span class="mr-2 text-amber-300">&gt;=</span>
                      <span class="text-orange-400">5</span>
                    </div>
                    <div>

                      <span class="ml-8 lg:ml-16 mr-2 text-gray-400">);</span>
                    </div><div><span class="ml-4 lg:ml-8 text-gray-400">&#125;</span>
                    </div><div><span class="text-gray-400">&#125;</span>
                    </div></code>
                </div></div>
            </div>
          </div>

        </ div>
        <Description />
        <Career />
       <SliderDv/>
        {/* <Projects/> */}
        <RecentProjects />
        <Footer />


      </div>
    </div>
  )
}

export default Home