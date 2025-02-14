'use client'
import { motion } from "framer-motion";
import { List } from "postcss/lib/list";
import React from "react";

interface project{
  title: string,
  projectUrl: string,
  intro: string,
  descr: string,
  imgUrl: string,
  customStyle: string,
};
type Props = {
  projects: project[];
};

const Projects = (props: Props) => {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{ duration: 1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly max-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {props.projects.map((project, i) => {
          return (
            <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.img

              initial={{
                y: -300,
                opacity: 0
              }}
              transition={{ duration: 1.2 }}
              whileInView={{
                opacity:1,y:0
              }}
              viewport={{once:true}}
                src={project.imgUrl}
                alt=""
                className={project.customStyle}
              />

              <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Case Study {i + 1} of {props.projects.length}:
                  </span>{" "}
                  <a href={project.projectUrl}>
                  {project.title}
                  </a>
                </h4>

                <p className="text-lg text-center md:text-left">
                {project.intro + project.descr}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
