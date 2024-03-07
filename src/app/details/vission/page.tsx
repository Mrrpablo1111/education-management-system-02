import { FC } from "react";
import Image from "next/image";
import about from "../../../../public/About1.jpg";
import so from "../../../../public/mission.jpg";
import ds from "../../../../public/vision.jpg"
interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <>
      <div className="relative font-[sans-serif]  before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src={about}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="sm:text-4xl text-2xl font-bold mb-6">
            Vision, Mission, and Goals{" "}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 grap-4  max-w-auto md:max-w-auto  place-items-center">
        <div className="text-center">
          <h1 className="text-red-950 font-bold py">Our Vision</h1>
          <p className="py-2 px-2">
            Phnom Penh Digital University envisions a time when youths from all
            parts of the world are engaged in improving all sectors of the world
            is socio-economic state.
          </p>
        </div>
        <Image src={ds} alt="ds" />
        <Image src={so} alt="so" />
        <div className="text-center">
          <h1 className="text-red-950 font-bold ">Our Mission</h1>
          <p className=" py-2 px-2">
            {" "}
            Phnom Penh Digital University is building an environment that
            enables creativity and innovation.
          </p>
        </div>
      </div>
      
      <div className="section">
        <h1 className="text-center justify-center  text-red-950 font-bold">Our Goals</h1>
        <ul className=" list-disc list-inside py-10">
            <li>To provide industry-relevant education to the youth to build a diverse, tech-savvy and information-rich global society.</li>
            <li>To be a global player in the provision of quality higher education for the local and international youth community.</li>
            <li>To be heavily and directly involved by promoting academic excellence to meet national, regional and international needs.</li>
            <li>To encourage creative and innovative skills in research and publications that positively impact the social, environmental and economic development of Cambodia and the region. </li>
            <li>To enhance self-sustainability and competitive through professional trainings and lifelong learning programmed.</li>
            <li>To attract high number of students of all ages and produce citizens who help contribute fully to national development and market needs of Cambodia and the region </li>
        </ul>
      </div>
    </>
  );
};

export default page;
