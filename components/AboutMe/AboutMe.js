import Image from "next/image";
import IntroBox from "./introbox";
import Works from "./Works";

import EmilProfilePic from "../../images/emil2.jpeg";
import cssbadge from "../../assets/css-badge.svg";
import htmlbadge from "../../assets/html-badge.svg";
import jsbadge from "../../assets/js-badge.svg";
import reactbadge from "../../assets/react-badge.svg";
import nodebadge from "../../assets/node-badge.svg";
import dockerbadge from "../../assets/docker-badge.svg";
import cbadge from "../../assets/c-badge.svg";
import cppbadge from "../../assets/cpp-badge.svg";
import pythonbadge from "../../assets/python-badge.svg";
import javabadge from "../../assets/java-badge.svg";



const AboutMe = () => {

  return (
    <div className="">
      <div className="max-w-3xl flex flex-col mx-8">
      <div className=" mb-2">
        <div className="flex justify-center md:mt-16 my:mt-8">
          <h2 className="text-4xl t md:tracking-[0.9em]">
            EMIL KANTANEVA <br></br>
          </h2>
        </div>
        <div className="flex justify-center md:my-8 my-4">
          <div className="md:h-64 md:w-64 h-32 w-32 relative rounded-full border-solid border-2 border-white">
            <Image
              src={EmilProfilePic}
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="rounded-full " // just an example
            />
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="text-left">
            <p className="text-xs sm:text-base">
              Web developer / Engineering student / IT enthusiast
            </p>
          </div>
        </div>

        <IntroBox />
      </div>
      </div>
      </div>
      
  
  );
};

export default AboutMe;
