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


const LeftNav = () => {
    return (
        <div className="max-w-3xl flex flex-col mx-8">

            <div className="md:h-64 md:w-64 h-32 w-32 relative rounded-full border-solid border-2 border-white">
                <Image
                src={EmilProfilePic}
                alt="Picture of the author"
                layout="fill" 
                objectFit="cover" 
                className="rounded-full "
                />
            </div>
            <h3 className="text-2xl mt-2">💻 Skills</h3>
            <div className="grid grid-cols-2 gap-3 mt-2">
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
            <h3 className="text-2xl mt-2">📚 Interests</h3>
            <div className="grid grid-cols-2 gap-3 mt-2">
                <p>🎮 Gaming</p>
                <p>📚 Reading</p>
                <p>🎧 Music</p>
                <p>🏋️‍♂️ Fitness</p>
                <p>💻 Software </p>
                <p>🔧 Tech</p>
                <p>🐧 Linux</p>
            </div>
            <h3 className="text-2xl mt-2">📫 Contact</h3>
            <div className="grid grid-cols-1 gap-3 mt-2">
                <p>📧 emil.kantaneva@gmail.com</p>
                <p>📱 +358 400 628825</p>
                <p>🌐 <a href="https://www.emilkantaneva.com">emilkantaneva.com</a></p>
                <p>🤓 <a href="https://github.com/emilsto">Github</a></p>
            </div>


            </div>
    );
}

export default LeftNav;
            