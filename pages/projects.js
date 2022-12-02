//page that displays all projects

import Link from "next/link";
import Project from "../components/works/Project";

const Projects = () => {
  return (
    <div className="flex justify-center">
      <Project />
    </div>
  );
};

export default Projects;
