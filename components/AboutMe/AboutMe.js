import Image from "next/image";
import IntroBox from "./introbox";
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
      <div className="h-screen mb-2">
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




        <div className="flex flex-col">
          <div className="h-screen"id="about">
          <h2 className="text-4xl mb-2 mt-16 pt-1" >ABOUT</h2>
          <div>
            <p>
              Here I tell about the projects I have worked on, and projects that
              I am currently working on. There will also be links to my works! I
              guess Ia have to type some more text here, because this text block
              will be too small otherwise! Yup, even for a placeholder, It would
              be too small! I have to have lots to say when I write this out for
              real.
              </p>
            <h2>My tech stack</h2>
            <p>
                Here are some of the technologies I have used in my works.
            </p>
            <div>
            <Image src={jsbadge} alt="javascript badge" className=""></Image>
            <Image src={htmlbadge} alt="html badge"></Image>
            <Image src={cssbadge} alt="css badge"></Image>
            <Image src={reactbadge} alt="react badge"></Image>
            <Image src={nodebadge} alt="node badge"></Image>
            <Image src={dockerbadge} alt="docker badge"></Image>
            <Image src={cbadge} alt="c badge"></Image>
            <Image src={cppbadge} alt="cpp badge"></Image>
            <Image src={pythonbadge} alt="python badge"></Image>
            <Image src={javabadge} alt="java badge"></Image>
            </div>
          </div>
          </div>

          <div className="h-screen">
          <h2 className="text-4xl mt-16 pt-1" id="works">WORKS</h2>
          <div className="mb-16">
            <p>
              Here I tell about the projects I have worked on, and projects that
              I am currently working on. There will also be links to my works! I
              guess Ia have to type some more text here, because this text block
              will be too small otherwise! Yup, even for a placeholder, It would
              be too small! I have to have lots to say when I write this out for
              real.
            </p>
          </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutMe;
