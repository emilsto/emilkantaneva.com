//left "nav" containing basci info about me

import Link from "next/link";

const Profile = () => {
  return (
    <div className="max-w flex flex-col p-5">
      <h1 className="bg-dark-grey md:text-4xl text-2xl p-2 text-beige-g">Emil Kantaneva</h1>
      <p className="md:text-xl text-md font-bold mb-2">Software Engineering student</p>
      <p className="text-l">
        Im an aspiring full-stack web & software developer with a passion for
        learning new things. Ive been developing software through out the length
        of my studies for 3 years and have worked with many different
        technologies. I have experience building everything from small brochure
        sites to complex, interactive CRUD sites with Node.js and ReactJS. Im
        also familiar with many other technologies, including MySQL, MongoDB,
        and more. Im also intrested in other areas of software development, such
        as mobile and desktop development and game development.
      </p>
    </div>
  );
};

export default Profile;
