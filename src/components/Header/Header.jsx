// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Ecoyaan</div>
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        <nav className={`md:flex ${isOpen ? 'block' : 'hidden'} space-y-2 md:space-y-0 md:space-x-4`}>
          <Link to="/" className="block md:inline hover:text-yellow-300">Home</Link>
          <Link to="/about-us" className="block md:inline hover:text-yellow-300">About Us</Link>
          <Link to="/sell-on-ecoyaan" className="block md:inline hover:text-yellow-300">Sell on Ecoyaan</Link>
          <Link to="/careers" className="block md:inline hover:text-yellow-300">Careers</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
