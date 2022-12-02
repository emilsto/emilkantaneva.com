import Link from "next/link";
import styles from "./aboutme.module.css";

const IntroBox = () => {
  return (
    <div className="w-50 h-50 relative bg-black rounded-md text-left opacity-75 my-8 pb-2 drop-shadow-xl">
      <div className="flex flex-row relative bg-slate-500 rounded-t opacity-100 py-2 mb-2">
        <div className="relative h-3 w-3 rounded-full bg-mac-red ml-2"></div>
        <div className="relative h-3 w-3 rounded-full bg-mac-yellow ml-1"></div>
        <div className="relative h-3 w-3 rounded-full bg-mac-green ml-1"></div>
      </div>
      <div className="transition-opacity ease-in duration-700 opacity-100 font-mono md:text-s text-lg text-white">
        <p className={styles.typing}>$ cd greetings && node greet.js</p>
        <p className={styles.aboutme}>
          Hello! My name is Emil. <br></br>I am a web developer and an IT
          enthusiast. <br></br>
          Im a third year student at the Tampere University of applied sciences where I
          study software engineering. <br></br>
          Click{" "}
          <Link href="/projects">
            <nobr className="text-red-500 cursor-pointer">here</nobr>
          </Link>{" "}
          to see my projects, or{" "}
          <Link href="/resume">
            <nobr className="text-red-500 cursor-pointer">here</nobr>
          </Link>{" "}
          to view my resume.
        </p>
      </div>
    </div>
  );
};

export default IntroBox;
