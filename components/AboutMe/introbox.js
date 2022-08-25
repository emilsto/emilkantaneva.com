import styles from "./aboutme.module.css";


const IntroBox = () => {

    return (

<div className="w-50 h-50 relative bg-black rounded-md text-left opacity-75 my-8 pb-2 drop-shadow-xl">
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
    )
}

export default IntroBox;
