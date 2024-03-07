import Image from "next/image";
import banner from "@/app/components/images/bannerImg.jpg";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Hero = ({ user }:any) => {
  return (
    <></>
  );
};

export async function getStaticProps() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return {
    props: {
      user,
    },
  };
}

export default Hero;
