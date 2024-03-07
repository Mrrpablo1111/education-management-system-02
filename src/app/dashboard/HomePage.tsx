'use client'
import Image from "next/image";
import img from "../../../public/Logo.png";
import { motion } from "framer-motion";
import { logos } from "../api/data/Data";

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            PHNOM PENH  <br /> <div className="text-yellow-400">DIGITAL</div> UNIVERSITY
          </div>
          
          <p className="text-sm leading-7 text-gray-700 max-w-sm ">
            Limkokwing Cambodia is a 21st century specialist university that
            integrates academic learning with the latest industry knowledge.
            This ensures that graduating students are ready to face the demands
            of their chosen careers. The campus stimulates creative thinking and
            provides opportunities for the students’ talent development, skills
            acquisition, and personal and professional growth.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-blue-950 rounded-lg mr-4 text-sm">
              Read More
            </button>
            {/* <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover
            </button> */}
          </div>
        </div>
        
        <div className="md:w-[50%] border-[5px] border-yellow-400 rounded-lg ">
          <Image src={img} alt="logo" />
        </div>
      </div>
      <div>
        <p className="text-center text-xl text-blue-950">
          <br />
          We collaborate with {" "}
          <span className="text-red-800">
          Industrial Partners
          </span>
        </p>
        <br />
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logos, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <Image src={logos} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
