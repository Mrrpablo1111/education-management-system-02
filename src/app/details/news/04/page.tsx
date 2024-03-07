import { FC } from "react";
import Image from "next/image";
import Img1 from "../../../../../public/courses3.jpg";
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
              Anuar Faizal on Success and Innovation in Fashion
            </h5>
            <p className="mb-4 text-neutral-400 dark:text-neutral-400">
              <small>
                Published <u>15.01.2024</u> by
                <a href="#!">Mr.Xing</a>
              </small>
            </p>
            <div className="mb-3 text-gray-700 text-left">
              <p>
                Born in the United States and based in Malaysia, Anuar Faizal
                brings a global perspective to his work. His role extends beyond
                fashion design, encompassing talent management and event
                production. Curated by Limkokwing University’s Chief Brand
                Officer Dato’ Tiffanee Marie Lim, Anuar Faizal’s presentation to
                the audience, titled “Navigating Success: Strategies for
                Personal and Professional Growth,” provided a straightforward
                look into the challenges and triumphs of a career in fashion.
              </p>
              <br />
              <p>
                Anuar Faizal’s approach to overcoming industry obstacles is
                rooted in pragmatism. “It’s about starting from ground zero and
                using what you have to elevate yourself,” he shared. His success
                comes from a blend of self-reliance and spiritual faith, guiding
                him through various industry challenges.
              </p>
              <br />
              <p>
                The collaboration between Anuar Faizal and Limkokwing University
                evolved from a chance encounter to a strategic partnership.
                Recalling his initial meeting with a representative from the
                university, Anuar Faizal said, “I was invited to meet at IOI
                Mall without much background. It turned out to be a pivotal
                moment.” This led to his visit to the campus, where he realised
                the potential for a meaningful collaboration. “When I arrived at
                the campus, I realised the magnitude of what we could achieve
                together,” Anuar Faizal reflected.
              </p>
              <br />
              <p>
                Beyond academic and financial support, Limkokwing University
                actively fosters a culture of empathy and understanding among
                all its students and staff. Through various initiatives and
                events, such as this Open Day with OKU Sentral, the university
                promotes awareness and appreciation of the challenges faced by
                the PWD community. These efforts aim to build a more empathetic
                and inclusive society, starting within the university’s walls.
              </p>
              <br />
              <p>
                The partnership between Anuar Faizal and Limkokwing is a fusion
                of industry experience and academic resources aimed at nurturing
                talent and fostering personal development. Anuar Faizal views
                Limkokwing as an influential institution in the creative sector
                that equips students with the skills and confidence necessary in
                today’s competitive landscape. In his talk, Anuar Faizal
                emphasised resilience in an era dominated by social media. He
                acknowledged the challenges of constant comparison, saying, “In
                a world where everyone seems to be doing better on Instagram or
                TikTok, it’s crucial not to lose sight of your own journey.” He
                also stressed the importance of open-mindedness, especially in
                facing unforeseen opportunities. “When Dato’ Tiffanee from
                Limkokwing reached out, I had no idea what to expect. But that
                openness led us here,” he said, highlighting the significance of
                adaptability.
              </p>
              <br />
              <p>
                Anuar Faizal’s final advice to the students was straightforward:
                “Work hard.” This simple yet effective mantra has been a key
                driver in his career. Anuar Faizal’s session at Limkokwing
                University offered a realistic perspective on forging a path in
                the fashion industry. His blend of practical strategies and
                personal anecdotes provided a grounded, insightful look into
                achieving success in a complex and dynamic field.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
