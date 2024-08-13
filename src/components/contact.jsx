import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div ref={ref} className="flex flex-col justify-center items-center min-w-full h-[40vh] mt-20 mb-10">
        <div className="w-full lg:w-3/4 h-full mb-10 p-5 text-center">
          <motion.p 
            className="text-2xl lg:text-4xl font-semibold tracking-wide  text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Thanks for visiting
          </motion.p>
          <motion.p 
            className="text-sx p-5 lg:text-2xl tracking-wide text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </motion.p>
          
          <div className="flex flex-col lg:flex-row justify-center items-center text-white mt-4 space-y-4 lg:space-y-0 lg:space-x-10">
            <motion.div 
              className="flex flex-row items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <FaPhone className="mr-2 text-xl" />
              <p className="text-lg lg:text-xl">+91 9003316015</p>
            </motion.div>

            <motion.div 
              className="flex flex-row items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <FaEnvelope className="mr-2 text-xl" />
              <p className="text-lg lg:text-xl ">gaharivatsa@gmail.com</p>
            </motion.div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Contact;
