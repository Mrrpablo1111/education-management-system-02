import { FC } from "react";
import Image from "next/image";
import Img1 from "../../../../public/Smart.png";
import Img2 from "../../../../public/stn.png";
import Img3 from "../../../../public/rgc.png";
import Img4 from "../../../../public/BrownCafe.png";
import Img5 from "../../../../public/Kitlogo.png";
import Img6 from "../../../../public/chipmong.png";
import about from "../../../../public/About1.jpg";


import Link from "next/link";
interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <section className=" dark:text-gray-100">
      <div className="relative font-[sans-serif]  before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <Image
          src={about}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="sm:text-4xl text-2xl font-bold mb-6">
            Industrial Partners{" "}
          </h2>
        </div>
      </div>
      <div className=" section container p-8 mx-auto">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-red-800">News and Updates</h2>
        </div>
        <div className="section grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="border-[2px] border-yellow-400 shadow-md rounded-md flex flex-col bg-slate-100">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt="img"
                className="object-contain w-full h-52  bg-green-700 rounded"
                src={Img1}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="flex-1 py-2 text-lg leadi font-semibold text-red-800">
                SMART AXIATA
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                  Smart Axiata Co., Ltd., is a Cambodia’s telecommunications
                  service provide, and incorporated under the laws of Cambodia,
                  having its registered office at No. 464A, Monivong BLvd.,
                  Sangka Tonle bassac, Khan Chamkamorn, Phnom Penh.
                </div>
              </div>
              <Link href={"https://www.smart.com.kh/"}>
              <div className="pt-5">
                <button
                  type="button"
                  className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white"
                >
                  Website
                </button>
              </div>
              </Link>
            </div>
          </article>
          <article className="border-[2px] border-yellow-400 shadow-md rounded-md flex flex-col bg-slate-100">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                className="object-contain w-full h-52 px-16 bg-blue-900 rounded"
                src={Img2}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="flex-1 py-2 text-lg leadi font-semibold text-red-800">
                SATAPANA BANK
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                  SATHAPANA Bank Plc.’s ultimate parent company is MARUHAN
                  Corporation of Japan, founded in May 1957 by present Chairman
                  Dr. Han Chang-Woo. Locate Sathapana Tower, Building 63, Preah
                  Norodom Blvd., Sangkat Phsar Thmey 3 Khan Daun Penh, Phnom
                  Penh Capital,
                </div>
              </div>
              <div className="pt-5">
                <Link href="https://www.sathapana.com.kh/en/latest-news-news-detail?v=JmRhdGFJZD0yNjE=">
                  <button
                    type="button"
                    className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white"
                  >
                    Website
                  </button>
                </Link>
              </div>
            </div>
          </article>
          <article className="border-[2px] border-yellow-400 shadow-md rounded-md flex flex-col bg-slate-100">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                className="object-contain w-full h-52 dark:bg-blue-950 rounded"
                src={Img3}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <h3 className="flex-1 py-2 text-lg leadi font-semibold text-red-800">
                ROYAL GROUP
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                Royal Group is recognised as the country’s most dynamic and diversified business conglomerate. With interests in a wide range of industries including telecommunication, transport, energy, media & entertainment, banking & financing, insurance, hotels & resort.
                </div>
              </div>
              <Link href={"https://www.royalgroup.com.kh/"}>
              <div className="pt-5">
                <button
                  type="button"
                  className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white"
                >
                  Website
                </button>
              </div>
              </Link>
            </div>
          </article>
          <article className="border-[2px] border-yellow-400 shadow-md rounded-md flex flex-col bg-slate-100">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                className="object-contain w-full h-52 dark:bg-white rounded"
                src={Img4}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              {/* <a
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
              </a> */}
              <h3 className="flex-1 py-2 text-lg leadi font-semibold uppercase text-red-800">
                Brown Coffee Co Ltd.
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                  Brown Coffee and Bakery Co., LTD, is a company incorporate in
                  Cambodia with its principle business offices located at #25,
                  street 294 corner 57, Sangkat Boenug Keng Kang I, Khan Boeung
                  Keng Kang, Phnom Penh, Kingdom of Cambodia.
                </div>
              </div>
              <Link href={"https://www.browncoffee.com.kh/page/Our_Story"}>
              <div className="pt-5">
                <button
                  type="button"
                  className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white"
                >
                  Website
                </button>
              </div>
              </Link>
            </div>
          </article>
          <article className="border-[2px] border-yellow-400 shadow-md rounded-md flex flex-col bg-slate-100">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                className="object-contain w-full px-16 py-2 h-52 dark:bg-white rounded"
                src={Img5}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              {/* <a
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
              </a> */}
              <h3 className="flex-1 py-2 text-lg leadi font-semibold uppercase text-red-800">
                Kirirom Institute of Technolog
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                  Kirirom Institute of Technology(KIT) is an innovative
                  educational institution committed to providing high-quality,
                  technology-driven education in Cambodia. KIT has emerged as a
                  leading institution in the field of information technology and
                  related disciplines.
                </div>
              </div>
              <Link href={"https://kit.edu.kh/about"}>
              <div className="pt-5">
                <button
                  type="button"
                  className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white"
                >
                  Website
                </button>
              </div>
              </Link>
            </div>
          </article>
          <article className="border-[2px] border-yellow-400 shadow-md rounded-md flex flex-col bg-slate-100">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <Image
                alt=""
                className="object-contain w-full py-8 px-8 h-52 dark:bg-white rounded"
                src={Img6}
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              {/* <a
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
              </a> */}
              <h3 className="flex-1 py-2 text-lg leadi uppercase font-semibold text-red-800">
                chip mong retail
              </h3>
              <div className="flex flex-wrap justify-between text-xs dark:text-gray-400">
                <div className="text-sm ">
                  Chip Mong Retail, a new Chip Mong business unit, is creating a
                  position for itself at the forefront of Cambodia’s retail
                  market. Chip Mong Retail’s portfolio includes mega malls,
                  shopping malls, simultaneously supporting the country’s robust
                  economic development.
                </div>
              </div>
              <Link href={"https://www.chipmong.com/en/chip-mong-retail/"}>
              <div className="pt-5">
                <button
                  type="button"
                  className="  px-8  py-3 font-semibold rounded-xl bg-blue-950 dark:text-white"
                >
                  Website
                </button>
              </div>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default page;
