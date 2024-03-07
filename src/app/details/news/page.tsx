import { FC } from "react";
import Image from "next/image";
import Img1  from "../../../../public/1.jpg"
import Img2 from "../../../../public/2.jpg"
import Img3 from "../../../../public/3.jpg"
import Link from "next/link";
interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <div className="section px-20 py-20 grid grid-cols-1 gap-x-20 gap-y-16 md:grid-cols- lg:grid-cols-2">
          <article className=" rounded-md flex flex-col bg-slate-100">
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
              <Link href={"/details/news/02"}>
              <div className="pt-5">
                <button type="button" className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white">Read More</button>
              </div>
              </Link>
            </div>
            
          </article>
          <article className=" rounded-md flex flex-col bg-slate-100">
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
              Armani Shahrin:Empowering Through Art
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                Armani Shahrin, a visionary entrepreneur, is making significant strides in social entrepreneurship with her initiative, NakSeni.
                </div>
                
                
              </div>
              <Link href={"/details/news/06"}>
              <div className="pt-5">
                <button type="button" className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white">Read More</button>
              </div>
              </Link>
            </div>
            
          </article>
          <article className=" rounded-md flex flex-col bg-slate-100">
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
              Limkokwing University is Pioneering Open Day in Partnership with OKU Sentral
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                In a notable initiative, Limkokwing University and OKU Sentral, a leading NGO for Persons with Disabilities (PWD), collaborated to host an Open Day dedicated to inclusivity and empowerment.
                </div>
                
                
              </div>
              <Link href={"/details/news/03"}>
              <div className="pt-5">
                <button type="button" className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white">Read More</button>
              </div>
              </Link>
            </div>
            
          </article>
          <article className=" rounded-md flex flex-col bg-slate-100">
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
              Luso Yong: RedefiningIndie Game Development
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                Limkokwing University’s alumni, Luso Yong, has not only realised his childhood dream of becoming a game designer but is also redefining the role of indie game studios in Malaysia.
                </div>
                
                
              </div>
              <Link href={"/details/news/05"}>
              <div className="pt-5">
                <button type="button" className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white">Read More</button>
              </div>
              </Link>
            </div>
            
          </article>

          <article className=" rounded-md flex flex-col bg-slate-100">
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
              Weaving the Future of Bornean and Malaysian Textile Heritage at IKAT 2.0
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                The IKAT 2.0 event, an abbreviation for Immersive Knowledge and Textile, is an experiential pop-up initiative that aims to shine a light on Malaysia ixws rich textile heritage.
                </div>
                
                
              </div>
              <Link href={"/details/news/01"}>
              <div className="pt-5">
                <button type="button" className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white">Read More</button>
              </div>
              </Link>
            </div>
            
          </article>
          <article className=" rounded-md flex flex-col bg-slate-100">
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
              Anuar Faizal on Successand Innovation in Fashion
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                At the recent Limkokwing Creativity Series, Anuar Faizal, a renowned figure in the Malaysian fashion industry, addressed students at Limkokwing University.
                </div>
                
                
              </div>
              <Link href={"/details/news/04"}>
              <div className="pt-5">
                <button type="button" className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white">Read More</button>
              </div>
              </Link>
            </div>
            
          </article>
        </div>
 
  );
}

export default page;