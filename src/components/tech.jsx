import { motion } from "framer-motion";
import azure from "../img/azure-2.svg";
import django from "../img/django.svg";
import github from "../img/github-icon-1.svg";
import javascript from "../img/logo-javascript.svg";
import mysql from "../img/mysql-3.svg";
import pandas from "../img/pandas.svg";
import powerbi from "../img/power-bi-1.svg";
import python from "../img/python.svg";
import react from "../img/react-1.svg";
import tensorflow from "../img/tensorflow-2.svg";

const techStack = [
  { src: azure, alt: "Azure" },
  { src: django, alt: "Django" },
  { src: github, alt: "GitHub" },
  { src: javascript, alt: "JavaScript" },
  { src: mysql, alt: "MySQL" },
  { src: pandas, alt: "Pandas" },
  { src: powerbi, alt: "Power BI" },
  { src: python, alt: "Python" },
  { src: react, alt: "React" },
  { src: tensorflow, alt: "TensorFlow" }
];

const Tech = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Stagger each child by 0.2 seconds
      }
    },
    hidden: {
      opacity: 0
    }
  };
  
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 }
  };

  return (
    <div className="pt-20 w-full flex flex-col gap-7 items-center justify-center backdrop-filter backdrop-blur-md">
      <div className="flex flex-row items-center justify-center mb-8">
        <motion.h1 
          className="text-sm lg:text-xl text-white font-bold tracking-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Triggers animation once when in view
          variants={list}
        >
          TECHNOLOGIES
        </motion.h1>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Controls when the animation triggers
        variants={list}
        className="flex flex-row w-3/4 flex-wrap justify-center items-center gap-8 p-8 rounded-3xl ml-5 lg:ml-0 bg-white"
      >
        {techStack.map((tech, index) => (
          <motion.img
            key={index}
            src={tech.src}
            alt={tech.alt}
            variants={item}
            className="w-12 h-12 lg:w-20 lg:h-20 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
