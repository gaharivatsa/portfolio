import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { easeOut } from "framer-motion/dom";


const DraggableCard = ({ project, constraints }) => {
  const x = useMotionValue(0);
  const xSmooth = useSpring(x, { damping: 50, stiffness: 400 });
  const scale = useTransform(
    xSmooth,
    [0, constraints.right / 2, constraints.right],
    [1, 2, 1]
  );

  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const contentOpacity = useTransform(
    xSmooth,
    [constraints.right / 3, constraints.right / 2, (2 * constraints.right) / 3],
    [0, 1, 1]
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleChange = (latest) => {
      if (!isMobile && latest > constraints.right / 3 && latest < (2 * constraints.right) / 3) {
        setShowContent(true);
      } else if (!isMobile) {
        setShowContent(false);
      }
    };

    const unsubscribe = xSmooth.on("change", handleChange);
    return () => unsubscribe();
  }, [xSmooth, constraints.right, isMobile]);

  const handleClick = () => {
    if (isMobile) {
      setShowContent(!showContent);
    }
  };

  return (
    <motion.div whileInView={{opacity: 1, x:0}} initial = {{opacity:0,x:-100}} viewport={{once:true, amount: 0.3 }} transition={{duration:1,ease:"easeOut"}}
      className="flex flex-col w-full sm:w-1/2 lg:w-1/4 mt-3 rounded-3xl mb-4 p-4 bg-white shadow-md cursor-pointer"
      drag={!isMobile ? "x" : false}
      dragElastic={1}
      dragConstraints={!isMobile ? constraints : undefined}
      style={{ x }}
      onClick={handleClick}
    >
      <div className="flex justify-between items-center">
        <p className="text-sm lg:text-lg p-3 font-mono text-black">{project.name}</p>
        <div className="">
        {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-700">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          )}
        </div>
      </div>

      {showContent && (
        <motion.div
          style={{ opacity: contentOpacity }}
          className="mt-4 text-xs lg:text-sm text-gray-700"
        >
          <p>{project.description}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DraggableCard;
