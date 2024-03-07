import Banner from "../components/Banner";

import HomePage from "../components/HomePage";
import Accordion from "../components/accordion/Accordion";
import BlogsPostCard from "../components/card/BlogsPostCard";

export default function page() {
    
    return (
        <>
            <Banner/>,
            <HomePage/>
            <BlogsPostCard/>
            <Accordion/>
        </>
        
    )
}