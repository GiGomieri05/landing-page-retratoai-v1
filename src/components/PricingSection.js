import React from 'react';
import './PricingSection.css';
import { FaArrowRight } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="cta-section" id="contato">
      <div className="cta-container">
        <h2 className="cta-title">Garanta seu Retrato Profissional Agora!</h2>
        <p className="cta-text">
          Dê o próximo passo para transformar sua imagem profissional. Clique no botão abaixo e faça seu pedido em menos de 2 minutos!
        </p>
        <a
          href="https://form.jotform.com/251413836021043"
          className="cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar Agora <FaArrowRight className="cta-btn-icon" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
