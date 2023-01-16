//Carousell component, shows a list of projects


import portfolioImage from "../../images/portfolio.png";
import winkuImage from "../../images/works/winku.png";
import birdImage from "../../images/works/birdnest.png";
import ProjectRender from "./ProjectRender";


const Winku = [
  {
    title: "WinkuApp",
    description: "Winku app is a social media application that allows users to create posts, follow other users and like posts. The application is built using React with a NodeJS backend using MySQL database. It is a full CRUD application with authentication and authorization using JWT tokens. The application is currently in development, and plans are to deploy backend to AWS and frontend to NGINX raspberry pi server. Check out the github repository for more information about the project!",
    id: 3,
    tags: ["React", "Docker", "MySQL", "Node.js", "Express.js", "Fullstack"],
    source: "https://www.github.com/emilsto/winkuapp",
    image : winkuImage
  },
];


const PROJECT_BIRDNEST = [
  {
    title: "Project Birdnest",
    description: "This is my solution to the pre-assignment for the Reaktor summer 2023 internship. In short, the task was to monitor no-fly-zone violations of drones in a 500x500 meter square, updating every 2 seconds, with a no-fly zone of 100 meter radius.   Application built using React + TypeScript for the front-end and NodeJS + TypeScript for the back-end. It uses MongoDB as its database and is deployed on AWS. The live version can be accessed via the GitHub project page, atleast until the internship application period is over. Check out the github repository for more information about the project!",
    id: 4,
    tags: ["TypeScript", "MongoDB", "React", "Node.js", "AWS", "Full Stack"],
    source: "https://www.github.com/emilsto/project-birdnest",
    image : birdImage
  },
];


const portfolio = [
  {
    title: "Portfolio",
    description: "This portfolio website is built using Next.js and TailwindCSS. It is deployed to Vercel and uses a custom domain, that redirects traffic to the Vercel server. The application is fully responsive and serves users on mobile, tablet and desktop devices. Yeah, you're looking at it right now! I'm currently working on a new design for the portfolio, and will be adding more projects to the portfolio as I complete them.",
    id: 1,
    tags: ["Next.js", "TailwindCSS", "Vercel", "Frontend"],
    source: "https://www.github.com/emilsto/emilkantaneva.com",
    image : portfolioImage
  },
];

const myGithub = [
  {
    title: "My Github",
    description: "Check out my github profile for more projects and repositories! I'm always working on new projects and learning new technologies and looking for opportunities to learn and grow as a developer.",
    id: 2,
    tags: ["Frontend", "Backend", "Fullstack", "Hire me!"],
    source: "https://www.github.com/emilsto",
  },
];




const Project = () => {
  return (
    <div className="mx-2 md:max-w-3xl">
    <ProjectRender Project={PROJECT_BIRDNEST}/>
    <ProjectRender Project={Winku}/>
    <ProjectRender Project={portfolio}/>
    <ProjectRender Project={myGithub}/>
    </div>
  );
};

export default Project;
