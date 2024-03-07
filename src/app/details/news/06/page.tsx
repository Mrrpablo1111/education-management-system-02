import { FC } from "react";
import Image from "next/image";
import Img1 from "../../../../../public/courses3.jpg";
interface pagePorps {}
const page: FC<pagePorps> = ({}) => {
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
            Armani Shahrin: Empowering Through Art
            </h5>
            <p className="mb-4 text-neutral-400 dark:text-neutral-400">
              <small>
                Published <u>15.01.2024</u> by
                <a href="#!">Mr.Xing</a>
              </small>
            </p>
            <div className="mb-3 text-gray-700 text-left">
              <p>
                NakSeni, which translates to “Children of Art,” represents more
                than an artistic venture. “Art is not just a part of our lives;
                it is a conduit for expressing the unspoken, the overlooked,”
                Armani states. The enterprise is dedicated to showcasing the
                artistic talents of the PWD community, offering custom art for
                events and collaborations. Armani credits her education at
                Limkokwing University, where she studied Mass Communications,
                with providing a strong foundation for her current endeavours.
                “Journalism, film, and marketing - each discipline has been a
                building block in my journey with NakSeni,” she reflects. Her
                academic background has been instrumental in shaping her
                approach to running the enterprise.
              </p>
              <br />
              <p>
                NakSeni began as a way to help Armani’s sister and her friends
                during the pandemic but soon evolved into a full-fledged
                passion. “Choosing between a secure corporate job and the
                uncertain path of NakSeni was a defining moment for me,” Armani
                recounts. The feedback and impact on the PWD community further
                cemented her commitment to the enterprise.
              </p>
              <br />
              <p>
                IncluCity, NakSeni’s latest initiative, is at the forefront of
                Armani’s efforts. This ambitious project aims to create more
                inclusive urban spaces. “IncluCity is a challenge, a promise,
                and a hope rolled into one,” she says. The project involves
                extensive collaboration and community engagement to foster
                inclusive environments. Two projects hold special significance
                for Armani. The Nature Release at Sentosa Janda Baik was an
                excursion for PWD youths, integrating them with nature and
                society. “It was a revelation, seeing the youths interact with
                nature, an experience many take for granted,” she shares. An art
                exhibition featuring PWD artists, including her sister, also
                marked a pivotal moment. “It wasn’t about sympathy; it was about
                talent. And that talent was undeniable,” Armani recalls.
              </p>
              <br />
              <p>
                Armani views her journey with NakSeni as an ongoing process
                rather than a list of achievements. “The joy in small successes,
                like our first big event, keeps us going,” she says. She aims to
                support PWD artists and inspire a larger movement towards
                inclusivity and accessibility in art. “To those walking a
                similar path, remember that courage often comes from facing your
                fears,” Armani advises. She emphasizes the importance of
                resilience and learning in the journey of entrepreneurship.
              </p>
              <br />
              <p>
                NakSeni’s work and initiatives can be followed
                on Instagram and Facebook, LinkedIn, and their
                website www.nakseni.com. Information about IncluCity is
                available on Instagram at @inclucity.my and on its website at
                www.inclucity.my. Armani Shahrin’s journey with NakSeni is a
                compelling example of how personal passion can evolve into a
                social cause, bringing about tangible changes in the community.
                Through her commitment and innovative approach, Armani supports
                artists and challenges societal norms, making art a medium for
                inclusive dialogue and change.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
