import { EastOutlined, WestOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./Slider.scss"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/7848989/pexels-photo-7848989.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3977908/pexels-photo-3977908.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? (data.length - 1) : ((prev) => prev - 1))
  }
  const nextSlide = () =>{
    setCurrentSlide(currentSlide === (data.length - 1) ? 0 : ((prev) => prev + 1))
  }
  return (
    <div className="slider">
      <div className="container" style={{transform : `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt=""></img>
        <img src={data[1]} alt=""></img>
        <img src={data[2]} alt=""></img>
        <img src={data[3]} alt=""></img>
        <img src={data[4]} alt=""></img>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
