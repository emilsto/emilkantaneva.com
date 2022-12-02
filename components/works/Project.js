//Carousell component, shows a list of projects


import portfolioImage from "../../images/portfolio.png";
import winkuImage from "../../images/works/winku.png";
import ProjectRender from "./ProjectRender";

const Winku = [
  {
    title: "WinkuApp",
    description: "Winku app is a social media application that allows users to create posts, follow other users and like posts. The application is built using React with a NodeJS backend using MySQL database. It is a full CRUD application with authentication and authorization. The application is currently in development, and plans are to deploy backend to AWS and frontend to NGINX raspberry pi server.",
    id: 3,
    tags: ["React", "Docker", "MySQL", "Node.js", "Express.js", "Fullstack"],
    source: "https://www.github.com/emilsto/winkuapp",
    image : winkuImage
  },
];

const portfolio = [
  {
    title: "Portfolio",
    description: "This portfolio is built using Next.js and TailwindCSS. The application is hosted on Vercel.",
    id: 1,
    tags: ["Next.js", "TailwindCSS", "Vercel", "Frontend"],
    source: "https://www.github.com/emilsto/emilkantaneva.com",
    image : portfolioImage
  },
];



const Project = () => {
  return (
    <div className="mx-2 md:max-w-3xl">
    <ProjectRender Project={Winku}/>
    <ProjectRender Project={portfolio}/>
    </div>
  );
};

export default Project;
