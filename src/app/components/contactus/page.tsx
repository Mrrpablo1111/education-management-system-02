import React, { useState } from 'react';
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Image from "next/image";
import Img1 from "../../../.././public/courses8.jpg";

const initValues = { name: "", phonenumber: "", email: "", message: "" };
const initState = { values: initValues };
const page = () => {
  const [state, setState] = useState(initState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validation check
    const { name, phonenumber, email, message } = state.values;
    if (!name || !phonenumber || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  };

  return (
    <>
      <div className="bg-blue-950">
        <div className="relative font-[sans-serif]  before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
          <Image
            src={Img1}
            alt="Banner Image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
            <h2 className="sm:text-4xl text-2xl font-bold mb-6">Contact Us </h2>
          </div>
        </div>

        <section className="grid gap-8  md:grid-cols-2 py-28 px-80">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.34536924328!2d104.9011291142795!3d11.563587418949075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095114f1138ac5%3A0x7619b468836cd886!2sPhnom%20Penh%20international%20university!5e0!3m2!1sen!2skh!4v1709192562507!5m2!1sen!2skh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-white text-base">
            <h1 className="font-bold">Address:</h1>
            <p className="text-sm mt-4">
              79 Kampuchea Krom Blvd, Sangkhat Monorom, Khan 7 Makara, Phnom
              Penh, Cambodia.
            </p>
            <h1 className=" font-bold mt-4 ">Phone Number:</h1>
            <p className="text-sm mt-2">
              +85511859317 <br /> +85510802880
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mt-4" maxW="450px">
                <label className="font-bold">Your Full Name:</label>
                <input
                  className="w-full mt-4"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={state.values.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <label className="font-bold">Your Phone Number:</label>
                <input
                  className="w-full"
                  type="tel"
                  name="phonenumber"
                  placeholder="Your Phone Number"
                  value={state.values.phonenumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <label className="font-bold">Your Email:</label>
                <input
                  className="w-full"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={state.values.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <label className="font-bold">Your Message:</label>
                <textarea
                  className="w-full h-36"
                  type="text"
                  name="message"
                  placeholder="Type your message here..."
                  value={state.values.message}
                  onChange={handleChange}
                />
              </div>

              <button
                className="bg-red-700 p-3 text-white mt-8 rounded-lg  px-8"
                disabled={!state.values.name || !state.values.phonenumber || !state.values.email || !state.values.message}
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default page;
