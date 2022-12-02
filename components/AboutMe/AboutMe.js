import Image from "next/image";
import IntroBox from "./introbox";

import EmilProfilePic from "../../images/emil2.jpeg";

const AboutMe = () => {
  return (
    <div className="">
      <div className="max-w-3xl flex flex-col md:mx-8 mx-2">
        <div className=" mb-2">
          <div className="flex justify-center md:mt-16 mt-8">
            <h2 className="text-4xl t md:tracking-[0.9em]">
              EMIL KANTANEVA <br></br>
            </h2>
          </div>
          <div className="flex justify-center md:my-8 my-4">
            <div className="md:h-64 md:w-64 h-48 w-48 relative rounded-full border-solid border-2 border-white">
              <Image
                src={EmilProfilePic}
                alt="Picture of the author"
                className="rounded-full "
              />
            </div>
          </div>

          <div className="justify-center ">
   
                <p className="md:text-2xl text-xl text-center">
                  Web developer <br></br> Engineering student<br></br> IT enthusiast
                </p>
          </div>

          <IntroBox />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
