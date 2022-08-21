import Image from "next/image";
import EmilProfilePic from "../../images/emil_large.jpg";

const AboutMe = () => {
  return (
    <div className="max-w-2xl flex flex-col">


<div className="flex justify-center mt-16">

<h2 className="text-4xl tracking-[0.8em]">
              Emil Kantaneva <br></br>
              </h2>
</div>
<div className="flex justify-center my-8">
    
    <div className="h-64 w-64 relative rounded-full border-solid border-2 border-nice-yellow">
            <Image
              src={EmilProfilePic}
              alt="Picture of the author"
              layout="fill" // required
              objectFit="cover" // change to suit your needs
              className="rounded-full " // just an example
            />
          </div>
    </div>

    <div className="flex justify-center mb-8">
          <div className="text-left">

              <p className="text-base">
                Web developer / Engineering student / IT enthusiast
              </p>
          </div>

        </div>

        <div className="rounded-full">
        </div>

        <div className="w-50 h-50 relative bg-black rounded-md text-left opacity-50 my-16 py-0">
        <div className="relative bg-slate-500 rounded-md text-left opacity-75 py-2 mb-2">
        </div>
            <p className="pl-5">$echo Hello! I am Web Developer! </p>
            <p className="text-green pl-5">$echo Check out my Works here!</p>
            <p className="text-green pl-5">$echo Check out my Resume here!</p>
            <p className="text-green pl-5">$echo Contact me here!</p>
            <p className="text-green pl-5">$echo My GitHub profile</p>
            <p className="text-green pl-5">$echo My LinkedIn profile</p>
        </div>


    </div>
  );
};

export default AboutMe;
