import Navbar from "../components/navbar";
import Link from "next/link";

const WorkInProgress = () => {
  return (
    <div>
      <Navbar> </Navbar>
      <div className="flex justify-center">
        <div className="">
          <div className="max-w-3xl flex flex-col">
            <div className="flex justify-center mt-16">
              <h2 className="text-4xl">
                This page is still being worked on! <br></br>
              </h2>
            </div>
            <div className="flex justify-center my-8">
              <p className="underline">
                <Link href="/" className="underline">
                  Return Home and check back later
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;
