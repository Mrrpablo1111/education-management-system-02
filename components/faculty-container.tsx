import type { NextPage } from "next";
import FacultyContainer1 from "./faculty-container1";

const FacultyContainer: NextPage = () => {
  return (
    <div className="absolute top-[2285px] left-[-10px] w-[1621px] overflow-hidden flex flex-col items-end justify-center text-left text-base text-white font-poppins">
      <FacultyContainer1 propAlignSelf="stretch" propPosition="relative" />
    </div>
  );
};

export default FacultyContainer;
