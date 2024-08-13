import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/home';
import './index.css';
import Navbar from './components/nav';
import About from './components/about';
import Work from './components/work';
import Tech from './components/tech';
import Contact from './components/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="relative h-screen overflow-hidden">
    {/* Background layers */}
    <div className="absolute inset-0 z-[-2] h-full w-full bg-gradient-to-r from-black to-blue-950" style={{ height: '100vh' }} />
    <div className="absolute inset-0 z-[-2] h-full w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" style={{ height: '100vh' }} />

    {/* Scrollable Content */}
    <div className="relative h-full overflow-x-hidden overflow-y-auto lg:p-10">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Tech />
      <Contact />
    </div>
  </div>
);
