import Image from "next/image";
import Navbar from "../navbar";
import styles from "./aboutme.module.css";
import EmilProfilePic from "../../images/emil2.jpeg";
import EmilPixel from "../../images/emilpxl.png";


const AboutMe = () => {
  return (
    <div className="">
    <div className="max-w-3xl flex flex-col">


<div className="flex justify-center mt-16">

<h2 className="text-4xl t md:tracking-[0.9em]">
              EMIL KANTANEVA <br></br>
              </h2>
</div>
<div className="flex justify-center my-8">
    
    <div className="h-64 w-64 relative rounded-full border-solid border-2 border-nice-yellow">
            <Image
              src={EmilProfilePic}
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="rounded-full " // just an example
            />
          </div>
    </div>

    <div className="flex justify-center mb-8">
          <div className="text-left">

              <p className="text-base">
                Web developer / Engineering student / IT enthusiast
              </p>
          </div>

        </div>

        <div className="w-50 h-50 relative bg-black rounded-md text-left opacity-75 my-16 pb-2 drop-shadow-xl">
        <div className="flex flex-row relative bg-slate-500 rounded-t opacity-100 py-2 mb-2">
        <div className="relative h-3 w-3 rounded-full bg-mac-red ml-2">
        </div>
        <div className="relative h-3 w-3 rounded-full bg-mac-yellow ml-1">
        </div>
        <div className="relative h-3 w-3 rounded-full bg-mac-green ml-1">
        </div>

        </div>
        <div className="transition-opacity ease-in duration-700 opacity-100 font-mono text-lg">
            <p className={styles.typing}>$ gcc aboutme.cp  && ./a.out</p>
            <p className="">Hello! My name is Emil</p>
            <p className="">Contact me here!</p>
            <p className="">My GitHub profile</p>
            <p className="">My LinkedIn profile</p>
            </div>
        </div>


    </div>
    </div>
  );
};

export default AboutMe;
