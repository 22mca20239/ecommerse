import { useState } from "react";
import "./Slidder.css";

import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { ApiSlides } from "../apiFolder/slidderApi";

const Slidder = () => {
  // useState
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  // Style
  const arrowStyle =
    "rounded-full bg-gray flex justify-center items-center shadow-sm hover:cursor-pointer";

  // next picture on slide
  const nextSlide = () => {
    if (activeSlide === slides.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  // prev picure on slide
  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between mobile:hidden ">
      {/* leftArrow div */}
      <div className={arrowStyle} style={{ fontSize: "50px" }}>
        <ArrowLeftOutlined onClick={prevSlide} />
      </div>
      {/* slide div */}
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              key={index}
              className={
                "wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative bg-[#FFCC5F]" +
                slide.background
              }
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img className="h-[100%] object-cover" src={slide.src} alt="banner offer"/>
                </div>
                <div className="desc flex flex-col flex-1 place-items-start justify-center -ml-11">
                  <h2 className="text-[50px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      {/* rightArrow div */}
      <div className={arrowStyle} style={{ fontSize: "50px" }}>
        <ArrowRightOutlined onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slidder;
