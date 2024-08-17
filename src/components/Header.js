import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 0) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="menu-icon">
          <span className="icon">☰</span>
          <span className="cs-icon_btn">
            <span className="cs-icon_btn_in">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
