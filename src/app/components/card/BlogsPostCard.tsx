import React from "react";
import Img1  from "../../../../public/1.jpg"
import Img2 from "../../../../public/2.jpg"
import Img3 from "../../../../public/3.jpg"
import Image from "next/image";
import Link from "next/link";

const BlogsPostCard = () => {
  return (
    <section className=" dark:text-gray-100">
      <div className=" section container p-8 mx-auto">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-red-800">
          News and Updates
          </h2>
          
        </div>
        <div className="section grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="border-[2px] border-yellow-400 rounded-md flex flex-col bg-slate-100">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt="img"
                className="object-cover w-full h-52 dark:bg-gray-500 rounded"
                src = {Img1}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracki uppercase hover:underline text-gray-400"
              >
                March 1, 2024
              </a>
              <h3 className="flex-1 py-2 text-lg leadi font-semibold text-red-800">
                Limkokwing Offer 1000 Scholarships
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                  Limkokwing University announced full and partial scholarships
                  to Malaysian students to pursue degree and diploma studies in
                  a press conference held at the Branding Gallery on 20 February
                  2017.
                </div>
                
                
              </div>
              <div className="pt-5">
                <button type="button" className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white">Read Me</button>
              </div>
            </div>
            
          </article>
          <article className="border-[2px] border-yellow-400 rounded-md flex flex-col bg-slate-100">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500 rounded"
                src={Img2}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracki uppercase hover:underline text-gray-400"
              >
                March 1, 2024
              </a>
              <h3 className="flex-1 py-2 text-lg leadi font-semibold text-red-800">
                Limkokwing Offer 1000 Scholarships
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                  Limkokwing University announced full and partial scholarships
                  to Malaysian students to pursue degree and diploma studies in
                  a press conference held at the Branding Gallery on 20 February
                  2017.
                </div>
                
                
              </div>
              <div className="pt-5">
                <Link href="/page"><button type="button" className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white">Read Me</button></Link>
              </div>
            </div>
            
          </article>
          <article className="border-[2px] border-yellow-400 rounded-md flex flex-col bg-slate-100">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500 rounded"
                src={Img3}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracki uppercase hover:underline text-gray-400"
              >
                March 1, 2024
              </a>
              <h3 className="flex-1 py-2 text-lg leadi font-semibold text-red-800">
                Limkokwing Offer 1000 Scholarships
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                  Limkokwing University announced full and partial scholarships
                  to Malaysian students to pursue degree and diploma studies in
                  a press conference held at the Branding Gallery on 20 February
                  2017.
                </div>
                
                
              </div>
              <div className="pt-5">
                <button type="button" className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white">Read Me</button>
              </div>
            </div>
            
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogsPostCard;
