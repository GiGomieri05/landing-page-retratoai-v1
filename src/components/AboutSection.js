import React from 'react';
import './AboutSection.css';
import { FaUserTie, FaPalette, FaClock, FaCheckCircle } from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    {
      icon: <FaUserTie className="feature-icon" />,
      title: "Fundador Especializado",
      description: "Experiência sólida em branding e imagem profissional para criar retratos que transmitam autoridade."
    },
    {
      icon: <FaPalette className="feature-icon" />,
      title: "Curadoria Humana",
      description: "Entendemos as necessidades específicas de cada profissão - cada nicho merece uma abordagem única."
    },
    {
      icon: <FaClock className="feature-icon" />,
      title: "Rápido e Prático",
      description: "Fotos com estética de estúdio profissional, entregues em poucos dias, sem complicações."
    },
    {
      icon: <FaCheckCircle className="feature-icon" />,
      title: "Sem Burocracia",
      description: "Chega de agendamentos e sessões demoradas. Resultados profissionais sem sair de casa."
    }
  ];

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre a Retrato.AI</h2>
            <p className="tagline">
              Transformando imagens em oportunidades
            </p>
            <p className="main-text">
              Somos uma solução de posicionamento visual feita para quem vive da própria imagem.
              A IA é só a ferramenta. O que você leva é <strong>confiança</strong>, <strong>autoridade</strong> e <strong>representação real</strong>.
            </p>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon-container">
                    {feature.icon}
                  </div>
                  <div className="feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-frame">
              <img 
                src="https://picsum.photos/seed/800/600" 
                alt="Exemplo de retrato profissional" 
                className="main-image"
              />
              <div className="highlight-box">
                <span className="highlight-number">+500</span>
                <span className="highlight-text">clientes satisfeitos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
