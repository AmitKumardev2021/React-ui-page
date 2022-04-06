import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handlebtn=()=>{
    setNav(!nav)
  }

  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full ">
        <div>
          <h1 className="text-primary-blue">
            <FontAwesomeIcon icon={faCoffee} className="text-primary-blue" />
            DEFI
          </h1>
        </div>

        <div className="hidden md:flex">
          <ul className="flex text-white items-center">
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className="ml-4">Use Defi</button>
          </ul>
        </div>
        <div onClick={handlebtn}  className="block md:hidden">

        {
          !nav?(
          <FontAwesomeIcon icon={faBars} className="text-white text-3xl" />

          ):(
            <FontAwesomeIcon icon={faTimes} className="text-white text-3xl"/>
          )
        }
        </div>
        {/* mobile menu */}
        <div className={!nav?(" absolute hidden"):("w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center md:hidden")}>
          <ul>
            <li className="text-xl">Platform</li>
            <li className="text-xl">Developers</li>
            <li className="text-xl">Community</li>
            <li className="text-xl">About</li>
            <button className="m-3 px-8">Use Defi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
