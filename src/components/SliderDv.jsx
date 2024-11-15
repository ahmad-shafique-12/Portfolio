import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderDv = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>


            <div className='bg-[#000319] pt-20 pb-20'>
                <div className="slider-container w-[80%] m-auto  ">
                    <Slider {...settings}>
                        <div className='w-full'>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">JavasScript</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">React</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM46UmKP_IaPy34N9lsi1hF0hHeX_vBpZLDA&s" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">JQuery</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://logowik.com/content/uploads/images/bootstrap-new725.logowik.com.webp" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Bootstrap</h1>
                            </div>
                        </div>
                        <div>

                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Tailwind CSS</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Next.JS</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://ih1.redbubble.net/image.370541834.7231/flat,750x1000,075,f.jpg" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Redux</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">

                                <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="" className="rounded-full h-[60px] w-[60px]" />

                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Express.JS</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://seekvectors.com/files/download/40a750173673c890d7e081387b76469d.jpg" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Node.JS</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">MongoDB</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">JavasScript</h1>
                            </div>
                        </div>

                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">React</h1>
                            </div>
                        </div>

                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://logowik.com/content/uploads/images/bootstrap-new725.logowik.com.webp" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Bootstrap</h1>
                            </div>
                        </div>
                        <div>

                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Tailwind CSS</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Next.JS</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://ih1.redbubble.net/image.370541834.7231/flat,750x1000,075,f.jpg" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Redux</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">

                                <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="" className="rounded-full h-[60px] w-[60px]" />

                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Express.JS</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://seekvectors.com/files/download/40a750173673c890d7e081387b76469d.jpg" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">Node.JS</h1>
                            </div>
                        </div>
                        <div>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">MongoDB</h1>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="tech ml-6 sm:h-[150px] h-[200px] sm:w-[150px] bg-[#0f172a] relative rounded-xl flex flex-col justify-evenly items-center">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" className="rounded-full h-[60px] w-[60px]" />
                                <h1 className="deta bottom-4 font-semibold text-xl text-white text-center">JavasScript</h1>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default SliderDv