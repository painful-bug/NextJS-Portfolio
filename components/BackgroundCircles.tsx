import React from 'react'

import { motion } from 'framer-motion';
type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
     initial={{
        opacity:0
     }}
     animate={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
     }}
     transition={{
        duration: 2.5
     }}
     className='relative flex items-center justify-center z-0'>
        <div className='absolute rounded-full  h-[200px] w-[200px] border border-[#333333] animate-ping mt-52'/>
        <div className='absolute rounded-full  h-[300px] w-[300px] border border-[#333333] animate-ping mt-52'/>
        <div className='absolute rounded-full  h-[500px] w-[500px] border border-[#333333] animate-ping mt-52'/>
        <div className='absolute rounded-full opacity-20 h-[650px] w-[650px] border border-[#F7AB0A] animate-pulse mt-52'/>
        <div className='absolute rounded-full opacity-20 h-[800px] w-[800px] border border-[#333333] animate-pulse mt-52'/>
        {/* <div className='absolute rounded-full  h-[202px] w-[202px] border border-[#333333] animate-ping mt-52'/> */}
    
    </motion.div>
  )
}

export default BackgroundCircles