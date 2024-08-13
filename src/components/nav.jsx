import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-3  text-white">

      <div className="lg:text-xl sm:text-sm font-bold">
        HARIVATSA G A
      </div>

      
      <div className="flex gap-4" >
        <a href="https://www.linkedin.com/in/harivatsa-anandan-6856b3234/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/gaharivatsa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
          <FontAwesomeIcon icon={faGithub} size="2x"  />
        </a>
        <a href="mailto:gaharivatsa@gmail.com" className="hover:text-red-500">
          <FontAwesomeIcon icon={faEnvelope} size="2x"/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
