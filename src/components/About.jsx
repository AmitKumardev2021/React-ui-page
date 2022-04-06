import { faHive, faStripe } from "@fortawesome/free-brands-svg-icons";
import { faServer, faShieldVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-full bg-black text-white text-center">
      <div className=" max-w-[1240px] mx-auto px-4 py-16  ">
        <div>
          <h1 className="py-4">Growing Protocol Ecosystem</h1>
          <p className="py-4 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic
            eum aspernatur! Ex, voluptas consectetur.
          </p>
          {/* card-Container */}
          <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-4">
            {/* card */}
            <AboutCard
              icon={<FontAwesomeIcon icon={faHive} size="2xl" />}
              heading="Reliable, Tamper-proof network"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  eaque fugit quaerat modi rem repellendus officia harum
                  blanditiis, minus optio!"
            />
            <AboutCard
              icon={<FontAwesomeIcon icon={faStripe} size="2xl" />}
              heading="Seamless connection to any Api"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  eaque fugit quaerat modi rem repellendus officia harum
                  blanditiis, minus optio!"
            /><AboutCard
              icon={<FontAwesomeIcon icon={faShieldVirus} size="2xl" />}
              heading="Secure with full form"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  eaque fugit quaerat modi rem repellendus officia harum
                  blanditiis, minus optio!"
            /><AboutCard
              icon={<FontAwesomeIcon icon={faServer} size="2xl" />}
              heading="Server security always"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  eaque fugit quaerat modi rem repellendus officia harum
                  blanditiis, minus optio!"
            />

            
          </div>
        </div>
          <button className="my-6">use Defi</button>
      </div>
    </div>
  );
};

export default About;
