import React from "react";
import Image from "next/image";

//array of work experience data
const data = [

    {
        title: "Bachelor of Engineering, Information Technology and Software Engineering",
        school: "Tampere University of Applied Sciences",
        description: "Bachelor's degree in Information Technology and Software Engineering. The degree included courses in programming, AI, networking, security, databases, and other IT related topics. The degree also included courses in business, project management, and other non-IT related topics.",
        started: "2020",
        ended: "current",
        id: 2,
    },
    {
        title: "Vocation Qualification in Business and Administration",
        school: "Salpaus Further Education",
        description: "Vocational qualification in Business and Administration. The qualification included courses in business, accounting, and other business related topics.",
        started: "31.8.2014",
        ended: "1.6.2017",
        id: 1,
    },

];



const Education = () => {
    return (
        <div className="flex flex-col p-5">
        <h1 className="text-3xl tracking-[0.1em] mb-5">Education</h1>
        <p className="text-l">
        </p>
        <div className="grid">
            {data.map((data)  => (
                <div key={data.id} className="border-y py-2" >
                    <p className="py-1 text-xl font-bold">{data.title} </p> 
                    <p className="text-xl">{data.school}</p>
                    <p className="py-2">{data.description}</p>
                    <p className="py-2">{data.started} - {data.ended}</p>
                </div>
            ))}
            </div>
    </div>
    );
    };

export default Education;