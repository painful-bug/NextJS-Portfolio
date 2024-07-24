"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import "../app/globals.css"
import Link from "next/link";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello, I am a Software Developer", "I am a Full Stack Developer"],
    loop: true,
    delaySpeed: 300,
  });
  return (
    <div className="h-screen flex flex-col mt-50 space-y-8 items-center justify-center overflow-hidden text-center">
      <BackgroundCircles />
      <img
        src="https://utfs.io/f/239770b9-5226-4d8e-a684-ce473dfe21bb-2x3qsm.jpg"
        className=" relative rounded-full h-32 w-32 mx-auto"
      />
      <div className="z-0">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="px-10 font-semibold text-5xl lg:text-6xl">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
      <div className="z-200">
        <Link href="#about">
        <button className="px-6 py-3 text-gray-500 rounded-full uppercase text-sm border-[#242424] tracking-widest transition-all hover:border-[#F7AB0A]/40
        hover:text-[#F7AB0A]/40 cursor-pointer z-10">About</button>
        </Link>
        <Link href="#experience">
        <button className="px-6 py-3 text-gray-500 rounded-full uppercase text-sm border-[#242424] tracking-widest transition-all hover:border-[#F7AB0A]/40
        hover:text-[#F7AB0A]/40 cursor-pointer z-10">Experience</button>
        </Link>
        <Link href="#skills">
        <button className="px-6 py-3 text-gray-500 rounded-full uppercase text-sm border-[#242424] tracking-widest transition-all hover:border-[#F7AB0A]/40
        hover:text-[#F7AB0A]/40 cursor-pointer z-10">Skills</button>
        </Link>
        <Link href="#projects">
        <button className="px-6 py-3 text-gray-500 rounded-full uppercase text-sm border-[#242424] tracking-widest transition-all hover:border-[#F7AB0A]/40
        hover:text-[#F7AB0A]/40 cursor-pointer z-10">Projects</button>
        </Link>
      </div>

    </div>
  );
}

export default Hero;
