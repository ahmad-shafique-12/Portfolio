import React from 'react'
import img1 from '../Images/img03.png'

const Description = () => {
    return (
        <>
<div className="w-full p-1 bg-black pb-10">
    <div className="lg:w-[75%] w-[90%] card border mt-5 h-max rounded-xl gap-10 m-auto grid lg:grid-cols-2 md:grid-cols-1">
        <div className="introz gap-3 flex flex-col pt-5 pb-5 justify-evenly items-start rounded-l-xl text-wrap">
            <h1 className="intro text-4xl font-bold pl-[8%] text-[#cbacf9] italic mt-2">My journey:</h1>
            <p className="text-white text-[18px] font-[500] italic mt-2 px-4 text-wrap">
                I'm a MERN Stack Developer based in Lahore, with practical experience in both front-end and back-end development. Since 2023, I've been working on creating fast, scalable, and reliable web applications using the MERN stack (MongoDB, Express, React, Node.js). I'm skilled at building user-friendly and responsive interfaces, as well as strong backend systems to ensure smooth user experiences. I'm eager to bring my skills to a team where I can help create innovative and high-quality digital solutions.
            </p>
            <p className="qoute text-white text-lg font-semibold italic pl-[8%] text-wrap">Strongly believe in <span className="text-xl font-semibold text-red-400">Hardwork</span></p>
        </div>
        <div className="h-full flex justify-center items-center gap-3">
            <div className="h-[250px] w-max  rounded-2xl border">
                <img src={img1} alt="" className="h-full w-full rounded-2xl" />
            </div>
        </div>
    </div>
</div>

        </>
    )
}

export default Description