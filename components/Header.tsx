"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

// import { useState } from 'react'
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-6 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="socials flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/aishik-bandyopadhyay-ab4815286/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bt16AgXpITIarAh8GhwbzRw%3D%3D"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/painful-bug"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="get-in-touch flex flex-row items-center"
      >
        <p className="cursor-pointer uppercase hidden md:inline-flex text-sm text-gray-300 ">
          Get in touch
        </p>
        <SocialIcon
          network="email"
          fgColor="gray"
          url="https://mail.google.com/mail/?view=cm&fs=1&to=official.aishik109@gmail.com"
          bgColor="transparent"
          className="cursor-pointer"
        />
      </motion.div>
    </header>
  );
}

export default Header;
