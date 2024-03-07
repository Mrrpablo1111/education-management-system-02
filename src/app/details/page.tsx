import { FC } from "react";
import Image from "next/image";
import about from "../../../public/About1.jpg";
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
            History of Phnom Penh Digital University{" "}
          </h2>
        </div>
      </div>
      <div className="text-justify">
      <div className="px-28 py-16">
        <p>
          Our university has a storied history that spans over a century.
          Founded in 1890, it emerged as a beacon of higher education and
          intellectual growth in our region. From its early days, the university
          was committed to providing a transformative educational experience
          that would shape the lives of its students and contribute to the
          progress of society.
        </p>
        <p >
          Throughout its history, the university has continuously evolved and
          adapted to meet the changing needs of students and the demands of a
          rapidly changing world. It has expanded its academic offerings,
          established new schools and departments, and attracted renowned
          scholars and professors from diverse fields.
        </p>
        <p >
          Over the years, our university has become a hub of innovation and
          research. It has been at the forefront of groundbreaking discoveries
          and advancements in various fields, ranging from science and
          technology to humanities and social sciences. The university is
          research centers and institutes have fostered collaboration and
          interdisciplinary work, pushing the boundaries of knowledge and
          addressing pressing societal challenges.
        </p>
        <p >
          Beyond academics, our university has nurtured a vibrant campus
          community. It has provided students with a range of extracurricular
          activities, clubs, and organizations that promote personal growth,
          leadership skills, and a sense of belonging. Cultural festivals,
          sports events, and community service initiatives have enriched the
          university experience and cultivated a strong sense of camaraderie
          among students.
        </p>
        <p >
          As our university looks toward the future, it remains dedicated to its
          core mission of providing a world-class education, fostering
          innovation, and making a positive impact on society. With
          state-of-the-art facilities, esteemed faculty, and a diverse student
          body, our university continues to attract bright minds from across the
          globe, creating an environment that fosters intellectual curiosity,
          critical thinking, and lifelong learning.
        </p>
      </div>
      </div>
    </>
  );
};

export default page;
