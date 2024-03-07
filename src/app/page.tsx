import Link from "next/link";
import Hero from "./components/Hero";
import HomePage from "./components/HomePage";
import Banner from "./components/Banner";


import Accordion from "./components/accordion/Accordion";
import BlogsPostCard from "./components/card/BlogsPostCard";

export default function Home() {
  return (
    <>
      <Banner/>
      <HomePage/>
      <BlogsPostCard/>
      <Accordion/>
    </>
  );
}

