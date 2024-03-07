import { FC } from "react";
import Image from "next/image";
import Img1 from "../../../../../public/courses5.jpg";

interface pageProps {}
const page: FC<pageProps> = ({}) => {
  return (
    <div className="container my-24 mx-auto md:px-2">
      <section className="mb-32 text-center">
        <div className="mb-12 flex flex-wrap justify-center">
          <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image src={Img1} className="w-full" alt={""} />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a>
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto px-3 ">
            <h5 className="mb-3 text-lg font-bold text-red-700">
            Luso Yong: Redefining Indie Game Development
            </h5>
            <p className="mb-4 text-neutral-400 dark:text-neutral-400">
              <small>
                Published <u>15.01.2024</u> by
                <a href="#!">Mr.Xing</a>
              </small>
            </p>
            <div className="mb-3 text-gray-700 text-left">
              <p>
                Luso Yong’s path was shaped by a childhood fascination with
                video games, leading him to Limkokwing University. “My time at
                Limkokwing was not just about learning the ropes of game design.
                It was about understanding how to bring an idea to life,” Luso
                recalls. His studies in Game Art Development provided a balance
                of theoretical knowledge and practical experience, including
                insightful visits to local studios.
              </p>
              <br />
              <p>
                Luso is the producer and a pivotal figure at Lusolab
                Entertainment, a company making waves at the forefront of the
                country’s burgeoning game development scene. Established in
                2015, Lusolab Entertainment began as a modest enterprise. Now,
                it’s a hub for indie game development and outsourcing. The
                company specialises in outsourcing development and creating
                indie game titles, with Luso playing a crucial role in liaising
                with customers and team members. He ensures the optimal quality
                of projects and sustainable profits for the team. Luso’s role is
                pivotal in steering the company, focusing on project quality and
                team sustainability. “We’re not just creating games. We’re
                crafting experiences that resonate with our audience,” he
                explains.
              </p>
              <br />
              <p>
                Luso and his team extend their influence beyond game creation.
                By offering career opportunities in a growing sector, Lusolab
                contributes to the national economy. The studio’s collaboration
                with entities like Telekom Malaysia in developing educational
                systems marks its commitment to societal advancement. Luso
                attributes his passion for game development to his early gaming
                experiences. He is excited about a project involving
                international collaboration, where his team is responsible for
                concept art, game UI, and 3D environment assets. “Working with
                different cultures broadens our horizons and infuses our games
                with a unique perspective,” he says. This exposure to diverse
                cultures and ideas fuels Luso’s creativity.
              </p>
              <br />
              <p>
                Among Luso’s favoured projects is “Gogoldcastle,” a game
                developed from scratch and funded by Mdec. This project
                exemplifies the fun and fulfilment in game development,
                showcased at prominent game events like Gstar, Taipei Game Show,
                and Chinajoy. Luso takes pride in his team’s achievements,
                especially when working with well-known IPs, which motivates
                them throughout development. “Seeing our creation come to life
                and being showcased on global platforms is immensely
                satisfying,” Luso states. The pandemic brought unforeseeable
                challenges, with a decrease in market demand. However, Lusolab
                quickly adapted, finding opportunities in the burgeoning crypto
                market. “Adaptation and resilience are key in our industry,”
                Luso reflects. With an eye on the future, Luso aspires to
                develop original IPs and collaborate more.
              </p>
              <br />
              <p>
                Luso encourages students interested in game development to
                pursue this path, emphasising the relevance of skills like
                artificial intelligence, real-time graphics, and interactive
                visualisation in current and future technologies. His advice to
                aspiring game developers is straightforward: “Stay curious, keep
                learning, and always be ready to adapt. The gaming world is
                ever-evolving, and so should you.”
              </p>
              <br />
              <p>
                Limkokwing University offers a dynamic environment that fosters
                creativity, encouraging students to think outside the box and
                prepare for the real-world challenges of their respective
                industries. The university’s emphasis on practical experience,
                global exposure, and cutting-edge technology has made it a
                nurturing ground for aspiring professionals like Luso, who seek
                to make a significant impact in their fields, playing a pivotal
                role in shaping future leaders and innovators of the global
                creative industry. Through innovation and adaptability, Luso is
                navigating the gaming industry’s complexities and setting a
                benchmark for future game developers in Malaysia. His journey
                reflects a blend of passion, persistence, and the willingness to
                embrace change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
