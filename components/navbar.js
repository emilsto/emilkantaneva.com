import Link from "next/link";
import Image from "next/image";


import githublogo from "../images/github-dark.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-rgb(20, 27, 31) drop-shadow-xl p-5">
      <div>
        <div className="flex justify-center text-2xl">
          <div className="hover:text-red-600">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="ml-5 hover:text-red-600">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </div>
          <div className="ml-5 hover:text-red-600">
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </div>
          <div className="ml-5">
            <Link href="https://www.github.com/emilsto">
              <a target="_blank" rel="noopener noreferrer">
                <Image src={githublogo
                } alt="github logo" />
              </a>
            </Link>
                </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
