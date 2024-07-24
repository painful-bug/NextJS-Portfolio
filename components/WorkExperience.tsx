'use client'

import React from 'react'
import { motion } from 'framer-motion';
import Card from './Card';


type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x:0 }}
    transition={{ duration: 1.5 }}
    viewport={{ once: true }}
     className='h-screen flex relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Achievements
      </h3>


      <div className="flex flex-row flex-grow-0 gap-5">
        <Card title="Participated in Smart Bengal Hackathon" name_="Smart Bengal Hackathon" />
        <Card title="Member of Codecrafters Coding Club, IITM BS Degree" name_="Coding Club" />
        {/* <Card title="Participated in Smart Bengal Hackathon" name_="Smart Bengal Hackathon" /> */}
        {/* <Card title="Participated in Smart Bengal Hackathon" name_="Smart Bengal Hackathon" /> */}
      </div>
    </motion.div>
  )
}

export default WorkExperience