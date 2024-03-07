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
              Weaving the Future of Bornean and Malaysian Textile Heritage at
              IKAT 2.0
            </h5>
            <p className="mb-4 text-neutral-400 dark:text-neutral-400">
              <small>
                Published <u>15.01.2024</u> by
                <a href="#!">Mr.Boypaplo</a>
              </small>
            </p>
            <div className="mb-3 text-gray-700 text-left">
              <p>
                IKAT 2.0 focuses on creating an immersive experience to deepen
                appreciation for heritage textiles and techniques. Launching
                with a two-day event at The Godown Arts Centre in Kuala Lumpur
                on 6 and 7 January, IKAT 2.0 promises a unique experience at
                each location, tailored to the respective state’s audience.
              </p>
              <br/>
              <p>
                In Kuala Lumpur, IKAT 2.0 captivated visitors with its “Whispers
                Of Borneo’s Dreams” theme, curated by Jacqueline Fong of Tanoti
                Crafts, an organisation dedicated to the conservation of
                heritage crafts, women’s empowerment, and rural community
                development. The event highlighted the intricate connection
                between Bornean artisanal textiles and the region’s rich
                heritage and culture.
              </p>
              <br />
              <p>
                The Kuala Lumpur edition of IKAT 2.0 was a vibrant showcase of
                several key attractions that seamlessly blended traditional
                artistry with contemporary experiences. At the heart of the
                event was the “Dreamweavers Installation,” an immersive 480 sq
                ft space that transported visitors into a world inspired by the
                dreams and artistry of Bornean textile artisans. Complementing
                this were the Textile Gallery and Live Demonstrations, which
                brought the intricate crafts of Pua Kumbu, pis embroidery, and
                beaded art to life, offering attendees an up-close view of their
                detailed creation processes. The event also featured Interactive
                Workshops, where participants had the unique opportunity to
                learn from master artisans such as Crisna Mojupi, Helen Manjan
                Atong, and Lucille Awen Jon, each a custodian of unique heritage
                crafts. These sessions were enhanced by engaging talks, where
                the artisans shared their profound insights and expertise in
                heritage textiles, enriching the visitors’ appreciation of these
                cultural practices.
              </p>
              <br />
              <p>
                Adding a touch of modern flair to the traditional elements, a
                fashion showcase on the last day presented over 20 young
                designers from Limkokwing University’s Faculty of Creative Arts
                and Lifestyle, who displayed contemporary designs that
                beautifully integrated heritage textiles with the vibrant
                culture of Borneo. Limkokwing University, as a key collaborator
                in the IKAT 2.0 event, has taken a significant leap in
                intertwining Malaysian textiles’ rich heritage with modern
                design’s pulsating energy. Under the curatorship of Dato
                Tiffanee Marie Lim, Limkokwing University’s Chief Brand Officer,
                the event’s fashion show emerges as a narrative, a journey
                through the heart of Malaysia’s cultural tapestry. The fashion
                show turns into an immersive experience for its audience.
              </p>
              <br />
              <p>
                Adding a touch of modern flair to the traditional elements, a
                fashion showcase on the last day presented over 20 young
                designers from Limkokwing University’s Faculty of Creative Arts
                and Lifestyle, who displayed contemporary designs that
                beautifully integrated heritage textiles with the vibrant
                culture of Borneo. Limkokwing University, as a key collaborator
                in the IKAT 2.0 event, has taken a significant leap in
                intertwining Malaysian textiles’ rich heritage with modern
                design’s pulsating energy. Under the curatorship of Dato
                Tiffanee Marie Lim, Limkokwing University’s Chief Brand Officer,
                the event’s fashion show emerges as a narrative, a journey
                through the heart of Malaysia’s cultural tapestry. The fashion
                show turns into an immersive experience for its audience.
              </p>
              <br />
              <p>
                The kinetic stage, as fluid and dynamic as the textiles
                themselves, symbolises the ongoing flow of traditions evolving.
                Ever-flowing metaphorical river signifies the continuous passage
                of cultural knowledge and artistry from one generation to the
                next. It’s a reminder of the importance of keeping these
                traditions alive, relevant, and adaptable in a rapidly changing
                world.
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
                Limkokwing University’s participation in IKAT 2.0 reflects its
                commitment to nurturing talents that respect and revitalise
                cultural legacies. IKAT 2.0 is a cultural journey inviting
                Malaysians to explore the intricate narratives of textile art
                and ethnic heritage. It aims to foster a robust demand for these
                cultural treasures and enrich the public’s understanding of
                Malaysia’s diverse cultural heritage.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};
export default page;
