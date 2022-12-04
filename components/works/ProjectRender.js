
import { useState } from "react";
import Image from "next/image";

const ProjectRender = ( {Project} ) => {

    const [showTags, setShowTags] = useState(false);

    return (
        <div className="">
        <div className="flex flex-col text-center">
          {Project.map((project) => (
            <div className="flex flex-col my-10" key={project.id}>
              <h1 className="bg-dark-grey md:text-4xl text-2xl p-2 text-beige-g">
                {project.title}
              </h1>
              <div className="">
              <div className="grid grid-cols-2">
                    <button
                      className="bg-dark-grey md:text-2xl text-s p-2 text-beige-g hover:text-white my-2"
                      onClick={() => setShowTags(showTags ? false : true)}
                    >
                      {showTags ? "Hide Tags" : "Show Tags"}
                    </button>
                    <button className="bg-dark-grey md:text-2xl text-s p-2 text-beige-g hover:text-white my-2">
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Github project page
                  </a>
                    </button>
                  </div>
                {showTags ? (
                  <div className="grid grid-cols-2 gap-2 my-2">
                    {project.tags.map((tag) => (
                      <div className="" key={tag}>
                        <p className="bg-dark-grey md:text-2xl text-s text-beige-g p-2">
                          {tag}
                        </p>
                      </div>
                    ))}         
                  </div>
                ) : (
                    null
                )}
              </div>
 
              <p className="text-l text-left my-2">{project.description}</p>
                <div className="grid border-2 border-dark-grey">
              <Image src={project.image} alt="test" 
                width={project.width}
                height={project.height}
                className=""
                />
                </div>
      
    
            </div>
          ))}
        </div>
      </div>

    );
}

export default ProjectRender