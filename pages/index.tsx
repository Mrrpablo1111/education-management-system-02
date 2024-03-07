import type { NextPage } from "next";
import { useCallback } from "react";
import Property1Default from "../components/property1-default";
import FacultyContainer from "../components/faculty-container";

const AboutUs: NextPage = () => {
  const onLogotest1ImageClick = useCallback(() => {
    // Please sync "Landing Page" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[2755px] overflow-hidden text-left text-9xl text-darkred font-poppins">
      <div className="absolute top-[0px] left-[0px] w-[1601px] h-[1699px] overflow-hidden">
        <img
          className="absolute top-[120px] left-[0px] w-[1601px] h-[399px] object-cover"
          alt=""
          src="/rectangle-61@2x.png"
        />
        <b className="absolute top-[721px] left-[318px]">Our Vision</b>
        <b className="absolute top-[1330px] left-[1139px]">Our Mission</b>
        <b className="absolute top-[284px] left-[481px] text-29xl text-white">
          Vision, Mission, and Goals
        </b>
        <div className="absolute top-[877px] left-[30px] text-base text-gray text-center inline-block w-[776px]">
          Phnom Penh Digital University envisions a time when youths from all
          parts of the world are engaged in improving all sectors of the world's
          socio-economic state.
        </div>
        <div className="absolute top-[1488px] left-[841px] text-base text-gray text-center inline-block w-[739px]">
          Phnom Penh Digital University is building an environment that enables
          creativity and innovation.
        </div>
        <div className="absolute top-[519px] left-[821px] bg-darkslateblue w-[780px] h-[590px]" />
        <div className="absolute top-[1109px] left-[0px] bg-gold w-[821px] h-[590px]" />
        <img
          className="absolute top-[713px] left-[1120px] w-[188px] h-[188px] object-cover"
          alt=""
          src="/image-5@2x.png"
        />
        <Property1Default
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="0px"
          onLogotest1ImageClick={onLogotest1ImageClick}
        />
        <img
          className="absolute top-[1283px] left-[252px] w-[282px] h-[282px] object-cover"
          alt=""
          src="/image-26@2x.png"
        />
      </div>
      <div className="absolute top-[1837px] left-[710px] w-[181px] overflow-hidden flex flex-col items-end justify-center">
        <b className="relative">Our Goals</b>
      </div>
      <FacultyContainer />
      <div className="absolute top-[1927px] left-[84px] w-[1433px] overflow-hidden flex flex-col items-start justify-center text-base text-gray">
        <div className="self-stretch relative">
          <ul className="m-0 font-inherit text-inherit pl-[21px]">
            <li className="mb-0">
              To provide industry-relevant education to the youth to build a
              diverse, tech-savvy and information-rich global society
            </li>
            <li className="mb-0">{`To be a global player in the provision of quality higher education for the local and international youth community `}</li>
            <li className="mb-0">
              To be heavily and directly involved by promoting academic
              excellence to meet national, regional and international needs
            </li>
            <li className="mb-0">
              To encourage creative and innovative skills in research and
              publications that positively impact the social, environmental and
              economic development of Cambodia and the region
            </li>
            <li className="mb-0">
              To enhance self-sustainability and competitive through
              professional trainings and lifelong learning programmed
            </li>
            <li>{`To attract high number of students of all ages and produce citizens who help contribute fully to national development and market needs of Cambodia and the region `}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
