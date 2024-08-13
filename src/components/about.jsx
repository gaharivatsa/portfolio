import React from "react";
import { motion } from "framer-motion";
import prof from "../img/prof1.png"; // Ensure the correct path to your image
import resume from "./files/Resume_pod.pdf"; // Ensure the correct path to your resume file

const About = () => {
  return (
    <>
      <div className="min-h-screen w-full p-5 flex flex-col lg:flex-row items-center justify-around">
        <motion.div 
          className="bg-white/30 rounded-full p-4 shadow-lg mb-8 lg:mb-0" // Added margin-bottom for mobile
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} // Ensure the animation happens only once
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img 
            src={prof} 
            alt="Profile" 
            className="w-36 h-36 sm:w-48 sm:h-48 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg"
          />
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 h-auto bg-white/20 backdrop-blur-md p-5 sm:p-8 lg:p-5 rounded-3xl shadow-xl flex flex-col items-start justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} // Ensure the animation happens only once
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.p 
            className="text-lg sm:text-sm lg:text-xs font-bold text-white mb-4"
          >
            Hi, I am Harivatsa, a software engineer with a passion for creating innovative solutions.
          </motion.p>

          <p className="text-white  sm:text-base lg:text-xs leading-relaxed mb-4">
            I have completed my Bachelor's degree in Computer Science Engineering with a specialization in Big Data Analytics. 
            Throughout my academic journey, I have gained in-depth knowledge in various domains including:
          </p>
          <ul className="text-white list-disc list-inside mb-5 lg:text-xs sm:text-base">
            <li>Data Structures and Algorithms</li>
            <li>Web Development (HTML, CSS, JavaScript, React, Django)</li>
            <li>Database Management (SQL, NoSQL)</li>
            <li>Big Data Technologies (Hadoop, Spark)</li>
            <li>Machine Learning and AI</li>
          </ul>

          <p className="text-white text-sm sm:text-base lg:text-xs leading-relaxed mb-4">
            I am capable of performing various roles including:
          </p>
          <ul className="text-white list-disc list-inside mb-5 lg:text-xs sm:text-base">
            <li>Full Stack Web Developer</li>
            <li>Data Scientist</li>
            <li>Machine Learning Engineer</li>
            <li>Database Administrator</li>
            <li>Big Data Analyst</li>
          </ul>

          <p className="text-white text-sm sm:text-base lg:text-xs leading-relaxed">
            I am always eager to take on challenging projects that push the boundaries of my knowledge and skills. 
            My goal is to leverage technology to solve real-world problems and make a meaningful impact.
          </p>
          
          <a 
            href={resume} 
            download="Harivatsa_Resume.pdf"
            className="mt-6 inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out text-sm sm:text-base"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default About;
