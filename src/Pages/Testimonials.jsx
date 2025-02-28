import { Carousel } from "react-responsive-carousel";
import Testimonial from "../ApiJson/Testimonial.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ".././App.css";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosStarHalf } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

export const Testimonials = () => {
  const [slidePercentage, setSlidePercentage] = useState(33.33); // Default for medium screens (3 items)

  useEffect(() => {
    const updateSlidePercentage = () => {
      if (window.innerWidth < 640) {
        setSlidePercentage(100); // 1 item on small screens
      } else if (window.innerWidth < 1024) {
        setSlidePercentage(50); // 2 items on tablets
      } else {
        setSlidePercentage(33.33); // 3 items on larger screens
      }
    };
    window.addEventListener("resize", updateSlidePercentage);
    updateSlidePercentage(); // Initial check

    return () => window.removeEventListener("resize", updateSlidePercentage);
  }, []);

  return (
    <section className="w-full">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col gap-2 justify-center items-center margin2">
          <h1 className="text-3xl font-[800] text-blue-600">Testimonials</h1>
          <p className="flex gap-2 justify-center items-center">
            Our Student Love{" "}
            <span className="">
              <FaHeart className="text-red-600" />
            </span>
          </p>
        </div>
        <Carousel
          className="flex gap-4"
          showArrows={true}
          infiniteLoop
          autoPlay
          showThumbs={false}
          showStatus={false}
          centerMode
          centerSlidePercentage={slidePercentage}
          interval={2000}
        >
          {Testimonial.map((curr, index) => (
            <div
              className="font-[800] text-2xl w-[85%] h-[70%] flex flex-col justify-between items-start gap-4 margin shadow-[2px_2px_7px_gray,-2px_-2px_7px_gray] rounded-2xl max-sm:m-b-4"
              key={index}
            >
              <div className="padding-left">
                <Ratting stars={curr.star} />
              </div>
              <div>
                <p className="text-[16px] font-[400] text-start max-sm:text-xs">{curr.msg}</p>
              </div>

              <div className="flex gap-4 justify-center">
                <div>
                  <img
                    src={curr.img}
                    alt={curr.name}
                    className="h-12 rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="font-[600] text-xs max-sm:text-[10px]">{curr.name}</h1>
                  <p className="font-[400] text-[16px] max-sm:text-[8px]">{curr.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="w-[80%] mx-auto flex justify-end margin-bottum">
          <button className="bg-cyan-800 ring-2 rounded-xs text-white margin2 cursor-pointer transition-all duration-300 hover:bg-cyan-500 hover:ring-cyan-800 hover:scale-[1.02] flex items-center gap-2 group" >
            Give FeedBack <GrLinkNext className="transition-all duration-300 group-hover:translate-x-1.5"/></button>
        </div>
      </div>
    </section>
  );
};

const Ratting = ({ stars }) => {
//   console.log(stars);

  const ratestar = Array.from({ length: 5 }, (ele, index) => {
      let numbers = index + 0.5;
      return (
        <span key={index}>
          {stars >= index+1 ? (
            <FaStar className="text-yellow-500 rotate-90"/>
          ) : stars >= numbers ? (
            <IoIosStarHalf className="text-yellow-500 rotate-90"/>
          ) : (
            <FaRegStar  className="text-yellow-500 rotate-90"/>
          )}
        </span>
      );
    });
  
  console.log(ratestar);
  

  return (
            <span className="flex w-[100%] h-[20px] mx-auto">
            <span className="-rotate-90">{ratestar}</span>
            </span>
  
        
  )
};
