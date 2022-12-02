//page for resume
import Link from "next/link";

import LeftNav from "../components/resume/LeftNav";
import Profile from "../components/resume/Profile";
import WorkExp from "../components/resume/WorkExp";
import Education from "../components/resume/Education";

const Resume = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex md:max-w-4xl md:m-5">
          <div className="w-1/3 md:mr-3 border-r">
            <LeftNav />
          </div>
          <div className="w-2/3">
            <Profile />
            <WorkExp />
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
