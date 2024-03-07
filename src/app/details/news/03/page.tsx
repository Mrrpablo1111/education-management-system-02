import { FC } from "react";
import Image from "next/image";
import Img1 from "../../../../../public/courses2.jpg";

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
              Limkokwing University’s Pioneering Open Day in Partnership with
              OKU Central
            </h5>
            <p className="mb-4 text-neutral-400 dark:text-neutral-400">
              <small>
                Published <u>15.01.2024</u> by
                <a href="#!">Mr.Xing</a>
              </small>
            </p>
            <div className="mb-3 text-gray-700 text-left">
              <p>
                Limkokwing University has long been recognised for its
                progressive approach to education, consistently striving to
                break barriers and foster an inclusive environment. By
                partnering with OKU Sentral for the Open Day event, the
                university has reinforced its dedication to creating
                opportunities for all students, regardless of their physical or
                mental abilities. The university has been at the forefront of
                designing innovative educational programmes that cater to the
                diverse needs of its student body. These programmes are
                academically rigorous and tailored to be accessible and
                accommodating to students with disabilities. This approach
                ensures that PWD students are not just admitted to the
                university but are also provided with a supportive and enabling
                environment to thrive in their academic pursuits.
              </p>
              <br />
              <p>
                First Admiral Dato’ Subramaniam Raman, Secretary General of the
                Paralympic Council Malaysia and a VIP guest at the event
                provided critical insights into the realities faced by the PWD
                community. “In our population of 32 million, 14.2% are
                individuals with disabilities,” Dato’ Subramaniam remarked,
                highlighting the vast yet often unnoticed segment of the
                society.
              </p>
              <br />
              <p>
                In addition to tailored educational programmes, Limkokwing
                University has also unveiled scholarship schemes specifically
                for PWD students. These scholarships are a crucial step in
                levelling the playing field and providing financial assistance
                to those who might otherwise be unable to afford higher
                education. The university also offers support services,
                including counselling, personalised learning assistance, and
                accessible campus facilities, to ensure that PWD students have a
                fulfilling university experience. Commending Limkokwing
                University’s and OKU Sentral’s efforts, he said, “Today’s event
                is a significant step towards blending visibility with real
                connectivity. It’s about crafting an environment where mutual
                understanding and respect flourish.”Dato’ Subramaniam spoke
                about the broader implications of the day’s events. “It’s not
                just about academic qualifications; it’s about recognising and
                nurturing the unique capabilities of each individual,” he
                emphasised.
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
                Dato’ Subramaniam underscored the importance of sports in
                empowering the disabled, a tenet of the Paralympic Council
                Malaysia. “Sports is a fantastic equaliser. It’s a domain where
                people, regardless of their disabilities, can showcase their
                abilities and enjoy a sense of accomplishment,” he noted.
                Kumarusamy Sithambaram, Treasurer of the Paralympic Council
                Malaysia, agreed. He specifically focused on the necessity for
                academic pathways for PWD. “Academic pursuits are vital,
                especially post-sports career,” he stated. Kumarusamy shared
                poignant experiences of parents and PWD seeking educational
                opportunities but facing institutional hurdles. “It’s about
                inclusivity in academics. We need to adapt our educational
                frameworks to be more inclusive and accommodating,” Kumarusamy
                advocated. In partnering with OKU Sentral, the Open Day at
                Limkokwing University represented a commitment to inclusivity
                and empowering the PWD community. This commitment to inclusivity
                exemplifies how education can be a powerful tool for societal
                change. Through its pioneering efforts, Limkokwing University is
                educating minds and shaping a more inclusive and empathetic
                future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
