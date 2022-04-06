import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import videofle from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full  absolute z-[-1] "
        src={videofle}
        autoPlay
        loop
        muted
        // oncontextmenu="return false;"
      ></video>
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center ">
        <h1>Decentralized</h1>
        <h1>
          <span className="py-2 text-primary-blue">Trading</span> protocol
        </h1>
        <p className="text-xl py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
          corrupti!
        </p>
        <div>
          <button className="m-2">Use Defi</button>
          <button className="m-2 bg-none border-primary-purple border hover:bg-gradient-to-r from-primary-purple to-primary-blue  ">
            Faq
          </button>
        </div>
      </div>
      <div>
          <p className="text-center text-white text-2xl font-bold">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Hero;
