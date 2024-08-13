import { useRef, useEffect, useState } from "react";
import projects from "./data"; // Import the project data from your data file
import DraggableCard from './grid';
import { motion } from "framer-motion";

const Work = () => {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [displayedProjects, setDisplayedProjects] = useState([]); // Holds the currently displayed projects
  const [viewportText, setViewportText] = useState("Drag to reveal"); // Default text for larger screens

  const increment_project = (n) => {
    const additionalProjects = projects.slice(displayedProjects.length, displayedProjects.length + n);
    setDisplayedProjects(prevProjects => [...prevProjects, ...additionalProjects]);
  };

  useEffect(() => {
    if (containerRef.current && containerRef.current.firstChild) {
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = containerRef.current.firstChild.offsetWidth;
      setConstraints({ left: 0, right: containerWidth - itemWidth });
    }
  }, [containerRef, displayedProjects.length]);

  useEffect(() => {
    // Initially load the first 4 projects
    increment_project(4);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setViewportText("Tap to reveal");
      } else {
        setViewportText("Drag to reveal");
      }
    };

    // Set the initial viewport text based on the current viewport size
    handleResize();

    // Update the text whenever the window is resized
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto p-6 min-h-screen pb-32">
      <div className="flex flex-col items-center gap-4 w-full justify-center text-2xl text-white mt-5 mb-36">
        <motion.p initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
          WORK
        </motion.p>
        <motion.p className="text-xs lg:text-sm" initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 , delay: 0.5 }}>
        {viewportText}
        </motion.p>
      </div>
      
      <div ref={containerRef} className="flex flex-col gap-4 flex-wrap">
        {displayedProjects.map((project) => (
          <DraggableCard
            key={project.id}
            project={project}
            constraints={constraints}
          />
        ))}
      </div>
      {displayedProjects.length < projects.length && (
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={() => increment_project(2)} // Load 2 more projects on click
            className="text-white border-none rounded-3xl p-2 font-thin"
          >
            show more
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;
