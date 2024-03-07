'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import {
    BsFacebook,
    BsInstagram,
    BsTwitter,
    BsPinterest,
  } from "react-icons/bs";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-red-800 p-10"
    >
      
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6 text-3xl">Limkokwing</div>
          <p className="text-sm leading-7">
          Limkokwing Cambodia is a 21st century specialist university that integrates academic learning with the latest industry knowledge. 
          </p>
        </div>
        <div>
          <div className="font-bold mb-6 text-xl">Quik Link</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
            Home
            </a>
            <a href="" className="text-sm hover:underline">
            Help
            </a>
            <a href="" className="text-sm hover:underline">
              {" "}
              Term & Conditions
            </a>
            <a href="" className="text-sm hover:underline">
            FAQ
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6 text-xl">Company</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6 text-xl">Find Us</div>
          <div className="text-sm mb-4">#79 Kampuchea Krom Blvd, Sangkhat Monorom, Khan 7 Makara, Phnom Penh, Cambodia</div>
          <div className="text-sm mb-4">LimkokwingKh@gmail.com</div>
          <div className="text-sm">+855 2399 5733</div>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=100089003408624" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer