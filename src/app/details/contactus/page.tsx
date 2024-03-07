"use client";
import React, { useState, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Image from "next/image";
import Img1 from "../../../.././public/courses8.jpg";
import emailjs from "@emailjs/browser";

const initValues = { name: "", phonenumber: "", email: "", message: "" };
const initState = { values: initValues };
const page = () => {
  const [state, setState] = useState(initState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async () => {
    // Validation check
    const { name, phonenumber, email, message } = state.values;
    if (!name || !phonenumber || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Form submission logic
    setIsLoading(true);
    // Perform any async actions (e.g., sending data to server)
    setIsLoading(false);
    alert("Form submitted successfully!");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const form = document.getElementById("sendEmail");
    if (form instanceof HTMLFormElement) {
      emailjs
        .sendForm("service_ifiawok", "template_fvuxssd", form, {
          publicKey: "mvBvk0d4RySqr5GjI",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
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
          <form
            onSubmit={sendEmail}
            id="sendEmail"
            className="text-white text-base"
          >
            <h1 className="font-bold">Address:</h1>
            <p className="text-sm mt-4">
              79 Kampuchea Krom Blvd, Sangkhat Monorom, Khan 7 Makara, Phnom
              Penh, Cambodia.
            </p>
            <h1 className=" font-bold mt-4 ">Phone Number:</h1>
            <p className="text-sm mt-2">
              +85511859317 <br /> +85510802880
            </p>
            <div className="mt-4 max-w-[450px]">
              <label className="font-bold">Your Full Name:</label>
              <input
                className={`w-full mt-4 ${
                  !state.values.name && "border-red-500"
                }`}
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={state.values.name}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="font-bold">Your Phone Number:</label>
              <input
                className={`w-full ${
                  !state.values.phonenumber && "border-red-500"
                }`}
                type="tel"
                name="phonenumber"
                id="phonenumber"
                placeholder="Your Phone Number"
                value={state.values.phonenumber}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="font-bold">Your Email:</label>
              <input
                className={`w-full ${!state.values.email && "border-red-500"}`}
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={state.values.email}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label className="font-bold">Your Message:</label>
              <textarea
                className={`w-full h-36 ${
                  !state.values.message && "border-red-500"
                }`}
                name="message"
                placeholder="Type your message here..."
                value={state.values.message}
                onChange={handleChange}
              />
            </div>

            <button
              className="bg-red-700 p-3 text-white mt-8 rounded-lg focus:ring-4 px-8"
              onClick={handleSubmit}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default page;
