import Link from "next/link";

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
