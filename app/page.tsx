import Image from "next/image";
import Hero from './../components/Hero';
import Header from "@/components/Header";
import About from './../components/About';
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  const projects = [
    {
      "title" : "Totem",
      "projectUrl" : "https://github.com/painful-bug/Totem---A-Minimalistic-Note-Taking-App",
      "intro" : "A notes app which allows the user to create, read, update and delete notes.",

      "descr" : "It is built using flutter, with a responsive design, which is inspired from japanese design philosophy. The backend database of choice is Firebase, which is optimized for Flutter apps.",

      "imgUrl":  "https://utfs.io/f/422ab671-15b9-4dce-8ccf-12617e1c5f49-1ttgw1.jpg",
      "customStyle": "w-48 md:w-32 md:mt-8"
    },
    {
      "title": "AgroGuard",
      "projectUrl" : "https://github.com/painful-bug/Smart-Bengal-Hackathon-Farm-App",
      "intro": "A web app which helps detecting plant disease and also suggests which crop is suitable in a certain environment. ",
      "descr": "When uploaded an image of the diseased leaf/plant, this app detects which disease it has. This app also suggests the most suitable crop to grow in a certain area, given the temperature,humidity, soil pH, rainfall, etc as input. It is made with ReactJS for the frontend, and python fastapi for the backend. It is powered by a custom trained Machine Learning Model which helps in the detection of plant disease and suggestion of the most suitable crop.",
      "imgUrl":  "https://utfs.io/f/19cc41d4-7967-44ac-acd2-4c52c505c197-hgy5jy.png",
      "customStyle": "w-2/6 md:w-48 md:mt-8"
    }
  ];
  return (
    <main className="z-0 text-white h-screen snap-y snap-mandatory overflow-scroll">

     {/* Hero */}
     <section id="hero" className="snap-center">
      <Hero/>
     </section>


    {/* About */}
    <section id="about" className="snap-center">
      <About/>
    </section>

    {/* Work Experience */}
    <section id="experience" className="snap-center">
      <WorkExperience/>
    </section>

    {/* Skills */}
    <section id="skills" className="snap-center">
      <Skills/>
    </section>

    
      {/* Projects */}
      <section id="projects" className="snap-center">
      <Projects projects={projects}/>
    </section>

    </main>
  );
}
