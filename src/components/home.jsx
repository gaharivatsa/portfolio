import React from "react";
import {motion,useInView} from 'framer-motion';
import { useEffect,useRef } from "react";
import { Container, Box, duration } from "@mui/material";
import {gsap} from "gsap";

import DrawerAppBar from "./Navbar";

import { X } from "@mui/icons-material";


const Home = () => {
  
  return (
    <>
      <div className="container overflow-y-hidden overflow-x-hidden min-h-screen"> 
      <div className="flex flex-wrap">
        <div className="mt-14 w-full lg:w-full p-10 lg:p-28">
        <div className="flex flex-col items-center lg:items-start">
          <motion.h1 whileHover = {{ x:100,color:"blue",transition :{ease:'easeInOut' , duration:0.5,type:'spring', stiffness:500}}} drag = {"x"} className=" text-4xl lg:text-6xl font-bold p-2 mt-10 text-white">
            HELLO WORLD
          </motion.h1>

          <motion.p
      className="text-xs lg:text-2xl font-thin mt-14 p-2 text-white leading-loose"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeIn', delay: 0 }} // Adjust delay to 0
    >
      <motion.span
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeIn', delay: 1 }} // Increase delay
        className="text-xl lg:text-4xl font-bold bg-gradient-to-r from-blue-700 via-purple-600 to-blue-50 text-transparent bg-clip-text"
      >
        I'm Harivatsa
      </motion.span>, a tech enthusiast who's basically a caffeine-powered code ninja. When I'm not busy taming wild algorithms, you'll find me exploring the latest in tech or figuring out how to make my code as bug-free as my coffee. I love turning complex problems into simple, elegant solutions—and having a good laugh along the way. Let's build something awesome together
    </motion.p>
    
   
    
        </div>
        </div>
      </div>
      
      </div>
      
  </>
  );
};

export default Home;