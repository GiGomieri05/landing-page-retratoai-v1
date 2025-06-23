import React, { useState } from 'react';
import './PricingSection.css';
import { FaWhatsapp, FaEnvelope, FaUser, FaBriefcase, FaArrowRight } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    const message = `Olá! Me chamo ${formData.name}, trabalho com ${formData.business}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/SEUNUMERO?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/SEUNUMERO', '_blank');
  };

  return (
    <section className="contact-section" id="contato">
      <div className="contact-container">
        <div className="section-header">
          <h2>Vamos conversar sobre o seu projeto</h2>
          <p>Conte-nos sobre suas necessidades e vamos criar imagens incríveis juntos</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Como funciona?</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Conversa Inicial</h4>
                  <p>Entendemos suas necessidades e objetivos</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Orientação Personalizada</h4>
                  <p>Te ajudamos com dicas de iluminação e enquadramento</p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Criação das Imagens</h4>
                  <p>Transformamos suas fotos com IA de forma profissional</p>
                </div>
              </div>
            </div>
            
            <div className="direct-contact">
              <p>Prefere falar diretamente?</p>
              <button className="btn btn-whatsapp" onClick={handleWhatsAppClick}>
                <FaWhatsapp /> Chamar no WhatsApp
              </button>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Me conte mais sobre você</h3>
            
            <div className="form-group">
              <div className="input-icon">
                <FaUser />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <div className="input-icon">
                <FaEnvelope />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <div className="input-icon">
                <FaBriefcase />
              </div>
              <input
                type="text"
                name="business"
                placeholder="Sua área de atuação"
                value={formData.business}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Conte-nos sobre o que você precisa e como podemos ajudar"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              Enviar mensagem <FaArrowRight className="btn-icon" />
            </button>
            
            <p className="privacy-notice">Seus dados estão seguros conosco. Não compartilhamos suas informações.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
