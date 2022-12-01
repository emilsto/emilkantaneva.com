//loop the works data and return the work component
import React from "react";
import WorksFrame from "./WorksFrame";
import WinkuApp from "../../images/works/winku.png";

const data = [
    {
        title: "WinkuApp",
        description: "Social media app, twitter clone",
        Image: WinkuApp,
        link: "",
        id: 1,
    },
    {
        title: "Portfolio",
        description: "This website!",
        link: "",
        id: 2,
    },
];


const Works = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
          {data.map((data) => (
            <WorksFrame key={data.id} work={data} />
          ))}
        </div>
      );
};

export default Works;

        
