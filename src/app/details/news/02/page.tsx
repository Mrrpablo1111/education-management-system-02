import { FC } from "react";
import Image from "next/image";
import Img1 from "../../../../../public/courses7.jpg";
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
            Limkokwing University offers 1,000 scholarships
            </h5>
            <p className="mb-4 text-neutral-400 dark:text-neutral-400">
              <small>
                Published <u>15.02.2024</u> by
                <a href="#!">Mr.ReachKuy</a>
              </small>
            </p>
            <div className="mb-3 text-gray-700 text-left">
              <p>
                Limkokwing University announced full and partial scholarships to
                Malaysian students to pursue degree and diploma studies in a
                press conference held at the Branding Gallery on 20 February
                2017.
              </p>
              <br />
              <p>
                The 1,000 scholarships are worth RM52.85 million and cover seven
                types of scholarships: the Sultan Ahmad Shah Scholarships,
                Limkokwing Thought Leadership Centre Scholarships, Utusan
                Scholarships, Cyberview Scholarships, Bumiputera Scholarships,
                Indian Society Scholarships and 50 percent Partial Scholarships
                for Malaysians. The scholarships could be applied for throughout
                the year beginning 20 February 2017, for the University’s four
                intake dates — in February, April, July and September.
              </p>
              <br />
              <p>
                Limkokwing University’s Vice President of Corporate Relations
                Dato’ Fajura Juffa Mohd Mustafa Kamal said the scholarships will
                be provided to all eligible Malaysians, especially from the
                bottom 40 percent group of society.
              </p>
              <br />
              <p>
                “In Limkokwing University, we want every student who did not get
                straight As and those who lack funds, to study with us and excel
                in their life,” Dato’ Fajura explained at the press conference.
                “We welcome students who have obtained at least five credits in
                their Sijil Pelajaran Malaysia examination (for degree
                programmes), three credits (diploma) or level three Malaysian
                Skills Certificate (SKM) for skills courses.”
              </p>
              <br />
              <p>
                Limkokwing University constantly reviews and upgrades its
                programmes to reﬂect changes in the industry. This puts its
                graduates ahead of others, because they are tech-competent,
                globally networked, highly creative, ﬂuent with presentations
                skills, and geared for a globalised career pathway.
              </p>
              <br />
              <p>
                Limkokwing University programmes empower the new generation with
                21st century skills for the most in-demand and high-income
                careers of the future. Students have a wide range of disciplines
                to choose from which include mobile games development, software
                engineering, digital media, architecture and many other
                technological and digitally-driven programmes.
              </p>
              <br />
              <p>
                Accentuating this theme, the backdrop of the stage is equally
                mesmerising. A kinetic 3D display of famous landmarks from
                around the globe signifies the expansive influence and universal
                appeal of Malaysian textile art. This backdrop is not just a
                visual spectacle; it’s a statement about the global impact of
                local art forms, emphasising that the essence of Malaysian
                heritage can resonate worldwide.
              </p>
              <br />
              <p>
                For more information kindly visit
                www.limkokwing.net/registration or call +603 8317 8888.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
