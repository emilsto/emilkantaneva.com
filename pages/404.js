import Link from "next/link";
import Navbar from "../components/navbar";

const FourOhFour = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="">
          <div className="max-w-3xl flex flex-col">
            <div className="flex justify-center mt-16">
              <h2 className="text-4xl">
                404 - Thats an error. <br></br>
              </h2>
            </div>
            <div className="flex justify-center my-8">
              <p>
                <Link href="/" className="underline">
                  I suggest returning Home.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourOhFour;
