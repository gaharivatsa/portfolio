import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/home.css';
import DrawerAppBar from './Navbar';
import Box from '@mui/material/Box';
import { useMediaQuery , useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import design from '../img/image.png';
import prof from '../img/profile.png';
import astronaught from '../img/astronaught.svg';
import space from '../img/space.jpg'
import { useInView, useScroll, useTransform, motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const designRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const profimg = useRef(null);

  
  const { scrollYProgress } = useScroll({
    target: profimg,
    offset: ["start end", "end start"],
  });

  const yTransform = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [0, -300, -600] // Move from 1000px to -600px as you scroll
  );

  const scaleTransform = useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 1.5, 2]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 0.5, 1]);
  const whitetoblackTransform = useTransform(scrollYProgress, [0, 0.5],['white','black']);
  const aboutTransform = useTransform(scrollYProgress, [0, 0.5], [1000, 0]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  

  useEffect(() => {

    const tl = gsap.timeline();

    // Animation for the image
    tl.fromTo(
      designRef.current,
      { x: -900, y: 30, scale: 0.5, opacity: 0, rotate: 0 },
      {
        x: 20,
        y: 30,
        scale: 0.75,
        rotate: 0,
        duration: 2,
        opacity: 1,
      }
    );

    // Animation for the text
    tl.fromTo(text1Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(text2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(
        text3Ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          onStart: () => (text3Ref.current.style.color = 'lightblue'),
        }
      )
      .add(() => {
        const professions = ['AI ENGINEER', 'DATA ANALYST', 'WEB DEVELOPER'];
        let index = 0;

        const changeText = () => {
          if (text3Ref.current) {
            gsap.to(text3Ref.current, {
              duration: 0.5,
              opacity: 0,
              onComplete: () => {
                text3Ref.current.textContent = professions[index];
                gsap.to(text3Ref.current, {
                  duration: 0.5,
                  opacity: 1,
                  onStart: () => (text3Ref.current.style.color = 'lightblue'),
                  onComplete: () => {
                    index = (index + 1) % professions.length;
                    gsap.to({}, { duration: 1, onComplete: changeText });
                  },
                });
              },
            });
          }
        };

        changeText();
      }, '+=0.5'); // Delay before starting the text change effect

    // Animation for the icons with 5-second delay
    

    // Repeating animation for icon scrolling effect (independent of timeline)
    

    
  }, []);

  return (
    <>
      <DrawerAppBar />
      <Container
        sx={{
          height: '100vh',
          width: '100%',
          maxWidth: '100% !important', // Ensure it takes full width regardless of MUI defaults
          padding: '0 !important', // Remove default padding if any
          margin: '0 !important',
          backgroundImage: `url(${space})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize:'cover'
          
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            height: '80vh',
          }}
        >
          <Box sx={{ flex: 1, mb: { xs: 2, md: 0 } }}>
            <img ref={designRef} src={astronaught} alt='Logo' style={{ width: '60rem', height: '60rem' }} />
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography ref={text1Ref} variant='h2' component='h2' sx = {{color:'white'}}>
              HELLO WORLD,
            </Typography>
            <Typography  sx = {{color:'white'}} ref={text2Ref} variant='h3' component='h2'>
              I’M HARIVATSA
            </Typography>
            <Typography ref={text3Ref} variant='h3' component='h2'></Typography>
          </Box>
        </Box>
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '20vh',
            overflow: 'hidden'
          }}
        >
          
          
        </Box>
      </Container>
      <Container  ref={profimg} sx={{
          position:'relative',
          height: '100vh',
          width: '100%',
          maxWidth: '100% !important', // Ensure it takes full width regardless of MUI defaults
          padding: '0 !important', // Remove default padding if any
          margin: '0 !important',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems:'center'// Remove default margin if any
        }}>
          
          <Box  sx={{
            flex: 1, 
            mb: { xs: 2, md: 0 },
            display: {xs : 'none',md:'flex'},
            justifyContent: 'center', 
            position: 'relative', 
            overflow: 'hidden', 
            height: '100vh', 
            width: '100%'
          }}>
            <motion.img 
              src={prof} 
              alt="Profile"
              style={{
                position: 'absolute',
                bottom: 0,
                borderRadius: '50%',
                y: yTransform, // Apply the transformed Y position
                scale: scaleTransform,
                opacity: opacityTransform,
                width: '20%', // Adjust size as needed
                maxWidth: '200px', // Ensure the image doesn't exceed 200px in width on small screens
                height: 'auto',
                maxHeight: '80vh', // Ensure the image doesn't exceed 80% of the viewport height
                objectFit: 'cover', // Ensure the image covers the space properly
              }}
            />
          </Box>
          <Box sx={{
            flex: 1, 
            mb: { xs: 2, md: 0 },
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative', 
            overflow: 'hidden',  
            height: '100vh',
            width: '100%',
            padding: '20px',
            color: 'white'
          }}>
            <motion.div style={{
              x: aboutTransform,
              opacity: opacityTransform,
              marginBottom: '20px'
            }}>
              <Typography variant='h4' component='h2' gutterBottom sx = {{color : 'black'}}>
                About Me
              </Typography>
            </motion.div>
            <motion.div style={{ x: aboutTransform, opacity: opacityTransform }}>
              <Typography variant= {isSmallScreen ? 'caption':'h5'} sx = {{color : 'black'}} >
                Hi, I'm Harivatsa, a passionate AI Engineer, Data Analyst, and Web Developer with a love for technology and innovation. I specialize in creating intelligent systems that solve real-world problems, and I enjoy exploring new tools and techniques in the tech space.
              </Typography>
             <br/>
             <br/>
              <Typography variant = "h5" sx = {{color : 'black'}}>
                Hi, I'm Harivatsa, a passionate AI Engineer, Data Analyst, and Web Developer with a love for technology and innovation. I specialize in creating intelligent systems that solve real-world problems, and I enjoy exploring new tools and techniques in the tech space.
              </Typography>
            </motion.div>
          </Box>
      </Container>
    </>
  );
};

export default Home;
