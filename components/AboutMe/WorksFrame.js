//a component that displays information about a single work
//used to display information about a single work

import React from "react";
import Image from "next/image";

const WorksFrame = (data) => {

    return (
        <div className="bg-slate-600 mt-3 rounded-xl w-full border-slate-300 border-2 ">
            <p>{data.work.title}</p>
            <p>{data.work.description}</p>
            </div>
);
    }

export default WorksFrame;