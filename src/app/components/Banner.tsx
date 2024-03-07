import React from 'react'
import Image from "next/image";
import banner from "@/app/components/images/bannerImg.jpg";
import { motion, AnimatePresence } from "framer-motion"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../app/globals.css'
const Banner = () => {
  return (
    <div className="w-full max-h-screen relative">
      <Image
        src={banner}
        alt="banner image"
        className="w-full max-h-screen object-contain "
      />
      <div className="absolute top-0 w-full h-full bg-black/"></div>
    </div>
    
    )
}

export default Banner