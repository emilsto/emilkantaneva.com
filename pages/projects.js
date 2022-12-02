//page that displays all projects

import Link from "next/link";
import Project from "../components/works/Project";



const Projects = () => {
    return (
        <div className="">
            <div className="flex justify-center">
                <h1 className="text-4xl m-5">Projects</h1>
                </div>
                <Project />
        </div>
    );
}

export default Projects;
