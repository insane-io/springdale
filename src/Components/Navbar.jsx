import React, { useState } from 'react';
import logo from '../Assets/logo.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='bg-[#D55900] opacity-95 h-24 w-full flex flex-row justify-between items-center lg:px-20 px-3 text-white'>
      <div className='flex flex-row items-center gap-6'>
        <img src={logo} alt="Springdale Public School Logo" />
        <h1 className='italic font-medium lg:text-2xl text-sm'>Springdale Public School</h1>
      </div>
      <div className='hidden md:flex'>
        <ul className='flex flex-row md:gap-5 gap-2 lg:text-xl text-sm font-serif'>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/academics" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Academics</NavLink>
          </li>
          <li>
            <NavLink to="/admission" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Admission</NavLink>
          </li>
          <li>
            <NavLink to="/faculty" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Faculty</NavLink>
          </li>
          <li>
            <NavLink to="/students" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Students</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className='md:hidden'>
        <button onClick={handleToggle} className='text-2xl focus:outline-none'>
          ☰
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className='absolute top-24 left-0 right-0 bg-[#D55900] opacity-95 px-10 py-5 text-white md:hidden'>
          <ul className='flex flex-col gap-5 text-xl font-serif'>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>About Us</NavLink>
            </li>
            <li>
              <NavLink to="/academics" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Academics</NavLink>
            </li>
            <li>
              <NavLink to="/admission" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Admission</NavLink>
            </li>
            <li>
              <NavLink to="/faculty" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Faculty</NavLink>
            </li>
            <li>
              <NavLink to="/students" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Students</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-[#FDD382] underline' : 'text-white')}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
