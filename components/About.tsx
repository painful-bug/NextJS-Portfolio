'use client'
import React from "react";
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 200 }}
    whileInView={{ opacity: 1, x:0 }}
    transition={{ duration: 1.5 }}
    viewport={{ once: true }}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img 
      initial={{
        x:-500,
        opacity: 0
      }}
      transition={{
        duration: 1.5
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{
        once: true
      }}
      src="https://utfs.io/f/239770b9-5226-4d8e-a684-ce473dfe21bb-2x3qsm.jpg"
      className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
     />

     <div className="space-y-10 px-0 md:px-10">
      <h4 className="text-4xl font-semibold">Here is a little background</h4>
      <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, quasi veritatis laudantium sunt molestias deserunt porro modi voluptate rerum exercitationem. Porro corrupti deleniti hic sapiente corporis assumenda impedit at minima!
      Sed repellat ducimus a deleniti ipsum. Nostrum excepturi corrupti voluptatum quia sapiente tempora magnam labore saepe, quam praesentium commodi reprehenderit quo voluptatibus, incidunt perspiciatis ipsam officia blanditiis, autem non quis!
      Laudantium deserunt alias officiis voluptatem dignissimos animi optio. Laboriosam qui quos enim, magnam velit vitae aspernatur veritatis labore officiis provident, exercitationem illo modi. Reprehenderit neque tempore veniam praesentium deleniti cum.
      Quis ratione illum incidunt labore quam modi, quod a explicabo. Voluptatem itaque aliquid, rerum rem veniam est sint doloribus tempora, iste expedita quas autem numquam veritatis nesciunt molestiae dolorem consequuntur!
      Enim sit unde possimus eius provident distinctio maxime nulla tempora sequi ullam iste ut, voluptatibus nam cupiditate tenetur consequuntur quidem doloremque reiciendis voluptates officiis quisquam debitis. Vel corrupti est perferendis.</p>
     </div>
    </motion.div>
  );
};

export default About;
