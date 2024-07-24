import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string,
  name_: string
};

const Card = (props: Props) => {
  return (
    <article className="border-2 hover:border-[#F7AB0A] px-9 py-9 rounded-xl">
      {/* <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="../static/profile-pic.jpg"
      /> */}

        <div className="px-0 md:px-10 flex flex-col items-center justify-center">
          <h4 className="text-4xl font-light">{props.title}</h4>
          <p className="font-normal text-2xl mt-1 tracking-[9px] text-gray-500">{props.name_}</p>
        </div>

    </article>
  );
};

export default Card;
