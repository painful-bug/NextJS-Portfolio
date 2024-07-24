import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean,
  src: string,
  progress: string;
};

const Skill = (props: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: props.directionLeft ? -200 : 200,
          opacity: 0
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        transition={{ duration: 1}}
        src={props.src}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      {/* Layering effect NOTE!!!! */}

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"> 
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{props.progress}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
