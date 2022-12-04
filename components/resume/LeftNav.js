//a profile component that displays name, skills, inreests and contact information

import React from "react";
import Image from "next/image";

import EmilProfilePic from "../../images/emil2.jpeg";
import jsbadge from "../../assets/js-badge.svg";
import cssbadge from "../../assets/css-badge.svg";
import htmlbadge from "../../assets/html-badge.svg";
import reactbadge from "../../assets/react-badge.svg";
import nodebadge from "../../assets/node-badge.svg";
import dockerbadge from "../../assets/docker-badge.svg";
import cbadge from "../../assets/c-badge.svg";
import cppbadge from "../../assets/cpp-badge.svg";
import pythonbadge from "../../assets/python-badge.svg";
import javabadge from "../../assets/java-badge.svg";
import github from "../../images/github-dark.png";

const LeftNav = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
      console.log(isMobile);

    }
  }, [isMobile]);

  //if mobile, display a hamburger menu
  //if not mobile, display a list of links


  return (
    
    <div className="flex flex-col md:mx-8 m-2">
        <Image
          src={EmilProfilePic}
          alt="Picture of the author"
          objectFit="cover"
          className="rounded-full border border-white"
        />
      <h3 className="md:text-2xl text-lg md:mt-2 font-bold">💻 Skills</h3>
      <div className="grid md:grid-cols-2 gap-3 mt-2">
        <Image src={jsbadge} alt="js badge" />
        <Image src={reactbadge} alt="react badge" />
        <Image src={cssbadge} alt="css badge" />
        <Image src={htmlbadge} alt="html badge" />
        <Image src={nodebadge} alt="node badge" />
        <Image src={dockerbadge} alt="docker badge" />
        <Image src={javabadge} alt="java badge" />
        <Image src={cbadge} alt="c badge" />
        <Image src={cppbadge} alt="cpp badge" />
        <Image src={pythonbadge} alt="python badge" />
      </div>
      <h3 className="md:text-2xl text-lg mt-2 font-bold">📚 Interests</h3>
      <div className="grid md:grid-cols-2 gap-3 mt-2 text-clip">
        <p className="">🎮 Gaming</p>
        <p>📚 Reading</p>
        <p>🎧 Music</p>
        <p>🏋️‍♂️ Fitness</p>
        <p>💻 Software </p>
        <p>🔧 Tech</p>
        <p>🐧 Linux</p>
      </div>
      <h3 className="md:text-2xl text-lg mt-2 font-bold">📫 Contact</h3>
      <div className="grid grid-cols-1 gap-3 mt-2 truncate">
      <p>
          <Image src={github} height={20} width={20} alt="dark cat"></Image> <a href="https://github.com/emilsto">Github</a>
        </p>
        <a href="mailto:emil.kantaneva@gmail.com" >📧 emil.kantaneva@gmail.com</a>
        <p>📱 +358 400 628825</p>
        <p>
         🌐 <a href="https://www.emilkantaneva.com">emilkantaneva.com</a>
        </p>
   
      </div>
    </div>
  
  );

};

export default LeftNav;
