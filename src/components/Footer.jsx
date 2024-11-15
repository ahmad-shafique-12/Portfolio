import React, { useState } from 'react';
import img1 from '../Images/img01.jpg'

const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    console.log('Form submitted:', formData);
  };
  return (
    <>
      <div className=' bg-[#000319] p-1'>

        <div className=' w-[80%] m-auto mt-10 lg:flex justify-between '>

          <div className='lg:w-[47%] '>
            <img src={img1} alt="" />
          </div>
          <div className="lg:w-[47%] ">
      <h1 className="text-3xl text-center text-[white] mt-5">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className=" mt-2 bg-transparent text-white">
          <label className="text-[15px] font-[500] text-[white] mt-5" htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            className="w-[100%] mt-2 bg-transparent text-white"
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mt-2 bg-transparent text-white">
          <label className="text-[15px] font-[500] text-[white] mt-5" htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            className="w-[100%] mt-2 bg-transparent text-white"
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mt-2 bg-transparent text-white">
          <label className="text-[15px] font-[500] text-[white] mt-5" htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            className="w-[100%] mt-2 bg-transparent text-white"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className=" px-5 border cursor-pointer block m-auto mt-5 text-[15px] font-[500] p-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
        </div>
      </div>
    </>


  )
}

export default Footer