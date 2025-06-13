import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaArrowUp } from 'react-icons/fa';
import '../components/Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const currentYear = new Date().getFullYear();

  // Mostrar/ocultar botão de voltar ao topo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Função para lidar com a tecla Enter no botão de voltar ao topo
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      scrollToTop();
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Botão de voltar ao topo */}
        <button 
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          className={`back-to-top ${isVisible ? 'visible' : ''}`}
          aria-label="Voltar ao topo"
          tabIndex="0"
        >
          <FaArrowUp />
        </button>

        <div className="footer-main">
          <div className="footer-brand">
            <Link to="hero" smooth={true} duration={800} className="footer-logo">
              <img 
                src="/images/logo-retratoai.png" 
                alt="Retrato.AI" 
                className="logo"
                width="180"
                height="40"
              />
            </Link>
            <p className="footer-tagline">
              Transformando imagem em autoridade desde {currentYear}
            </p>
            
            <div className="footer-contact">
              <h3 className="footer-heading">Contato</h3>
              <ul className="footer-nav">
                <li>
                  <a href="mailto:contato@retratoai.com.br" className="footer-link">
                    contato@retratoai.com.br
                  </a>
                </li>
                <li>
                  <a href="tel:+5511999999999" className="footer-link">
                    +55 (11) 99999-9999
                  </a>
                </li>
                <li className="footer-address">
                  São Paulo - SP, Brasil
                </li>
              </ul>
            </div>

            <div className="social-links">
              <a href="https://instagram.com/retratoai" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/company/retratoai" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com/retratoai" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://twitter.com/retratoai" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Retrato.AI. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
