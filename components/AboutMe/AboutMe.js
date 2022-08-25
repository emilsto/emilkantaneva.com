import Image from "next/image";
import styles from "./aboutme.module.css";
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
        <div className="flex justify-center mt-16">
          <h2 className="text-4xl t md:tracking-[0.9em]">
            EMIL KANTANEVA <br></br>
          </h2>
        </div>
        <div className="flex justify-center my-8">
          <div className="h-64 w-64 relative rounded-full border-solid border-2 border-white">
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

        <div className="w-50 h-50 relative bg-black rounded-md text-left opacity-75 my-8 pb-2 drop-shadow-xl ">
          <div className="flex flex-row relative bg-slate-500 rounded-t opacity-100 py-2 mb-2">
            <div className="relative h-3 w-3 rounded-full bg-mac-red ml-2"></div>
            <div className="relative h-3 w-3 rounded-full bg-mac-yellow ml-1"></div>
            <div className="relative h-3 w-3 rounded-full bg-mac-green ml-1"></div>
          </div>
          <div className="transition-opacity ease-in duration-700 opacity-100 font-mono text-lg">
            <p className={styles.typing}>$ gcc aboutme.cpp && ./a.out</p>
            <p className={styles.aboutme}>
              Hello! My name is Emil. <br></br>I am a web developer and an IT
              enthusiast. <br></br>
              Im currently a third year student at the University of applied
              sciences in Tampere, Finland where I study Computer Science and
              Engineering. <br></br>
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-16">
          <div className=" h-screen">
          <h2 className="text-4xl mb-2" id="about">ABOUT</h2>
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
          <h2 className="text-4xl mb-2" id="works">WORKS</h2>
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
