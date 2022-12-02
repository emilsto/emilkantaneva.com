//resume to list work experience

import React from "react";
import Image from "next/image";

//array of work experience data
const data = [
  {
    title: "Project worker",
    company: "Tampere Universities",
    description:
      "Helped to setup school lab for networking and security courses.",
    started: "17.10.2022",
    ended: "4.11.2022",
    id: 3,
  },
  {
    title: "IT Support person",
    company: "Tampere Universities",
    description:
      "Part time IT support person after internship, responsibilities same as during internship.",
    started: "1.9.2021",
    ended: "31.12.2021",
    id: 2,
  },
  {
    title: "IT Support person intern",
    company: "Tampere Universities",
    description:
      "Helped staff and students with IT related issues, such as setting up their computers, installing software, troubleshooting, and other IT related issues. Customer service, communication and general IT skills were required to succeed in this position.",
    started: "3.5.2021",
    ended: "31.8.2021",
    id: 1,
  },
  {
    title: "Accountant",
    company: "Isännöintitoimisto iMasa Ky, Lahti",
    description:
      "The tasks of an accountant, including day-today accounting and finical reporting, taxes and tax returns, payroll, finical statements, and Maintanance of Visma Fivaldi based online environment.",
    started: "1.8.2018",
    ended: "31.8.2020",
    id: 4,
  },
  {
    title: "Accountant",
    company: "Isännöintitoimisto iMasa Ky, Lahti",
    description:
      "A summer job as an accountant before military service. Duties same as above.",
    started: "1.5.2017",
    ended: "31.6.2017",
    id: 5,
  },
];

const WorkExp = () => {
  return (
    <div className="flex flex-col p-5">
      <h1 className="bg-dark-grey md:text-4xl text-2xl p-2 text-beige-g">
        Work experience
      </h1>
      <p className="text-l"></p>
      <div className="grid">
        {data.map((data) => (
          <div key={data.id} className="border-y py-2">
            <p className="py-2 md:text-xl font-bold">
              {data.title}, {data.company}
            </p>
            <p className="py-2">
              {data.started} - {data.ended}
            </p>
            <p className="py-2">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;
