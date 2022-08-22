import Image from "next/image";
import Link from "next/link";
import GitHubLogo from "../images/github-dark.png";

const Navbar = () => {
    return (
        <nav className="bg-nice-yellow opacity-75 drop-shadow-xl p-5">
            <div>
            <div className="flex justify-center text-2xl">
                    <div className="">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div className="ml-5">
                        <Link href="/posts">
                            <a>Works</a>
                        </Link>
                    </div>
                    <div className="ml-5">
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </div>
                </div>
                </div>
        </nav>
    );
}

export default Navbar;