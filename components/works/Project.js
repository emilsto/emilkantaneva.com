//Carousell component, shows a list of projects



const Projects = [
    {
        title: "WinkuApp",
        description: "Winku app is a social media application that allows users to create posts, follow other users and like posts. The application is built using React Native and Firebase. The application is currently in development.",  
        id: 1,
        tags : ["React", "Docker", "MySQL", "Node.js", "Express.js"],
        source : "www.github.com/emilsivula/winkuapp",
    },
    {
        title: "Portfolio",
        description: "This portfolio is built using Next.js and Tailwind CSS. The portfolio is hosted on Vercel and the source code is available on Github.",
        id: 2,
        tags : ["Next.js", "Tailwind CSS", "Vercel"],
        source : "www.github.com/emilsivula/emilkantaneva.com",
    },
];

const Project = () => {

    return (
        <div className="flex justify-center w-2/3">
            <div className="flex flex-col max-w-xl">
                {Projects.map((project) => (
                    <div className="flex flex-col m-5" key={project.id}>
                        <h1 className="bg-dark-grey text-4xl p-2 text-beige-g text-center">{project.title}</h1>
                        <div className="flex flex-row">
                            {project.tags.map((tag) => (
                                <div className="flex flex-row m-2" key={tag}>
                                    <p className="bg-dark-grey text-2xl p-2 text-beige-g text-center">{tag}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-l">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>

    );
    };

export default Project;