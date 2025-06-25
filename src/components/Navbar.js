import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../components/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="hero" smooth={true} duration={800} className="logo-link">
            <img 
              src="/images/logo-retratoai.png" 
              alt="Retrato.AI Logo" 
              className="logo"
            />
          </Link>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="hero" 
            smooth={true} 
            duration={800} 
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Início
          </Link>
          <Link 
            to="como-funciona" 
            smooth={true} 
            duration={800} 
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Como Funciona
          </Link>
          <Link 
            to="depoimentos" 
            smooth={true} 
            duration={800} 
            className="nav-link"
            onClick={closeMobileMenu}
          >
            Depoimentos
          </Link>
          <Link 
            to="faq" 
            smooth={true} 
            duration={800} 
            className="nav-link"
            onClick={closeMobileMenu}
          >
            FAQ
          </Link>
          <a 
            href="https://form.jotform.com/251413836021043" 
            className="nav-button"
            onClick={closeMobileMenu}
          >
            Fale Conosco
          </a>
        </div>

        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
