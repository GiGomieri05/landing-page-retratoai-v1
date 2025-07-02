import React from 'react';
import './AboutSection.css';
import { FaUserTie, FaPalette, FaClock, FaCheckCircle } from 'react-icons/fa';

const AboutSection = () => {
  const features = [
    {
      icon: <FaClock className="feature-icon" />,
      title: "Rápido e Prático",
      description: "Fotos com estética de estúdio profissional, entregues em poucos dias, sem complicações."
    },
    {
      icon: <FaCheckCircle className="feature-icon" />,
      title: "Pacotes Acessíveis",
      description: "Planos para todos os bolsos, com resultados de alto padrão sem gastar muito."
    },
    {
      icon: <FaPalette className="feature-icon" />,
      title: "Curadoria Humana",
      description: "Entendemos as necessidades específicas de cada profissão — cada nicho merece uma abordagem única."
    },
    {
      icon: <FaUserTie className="feature-icon" />,
      title: "Time Especializado",
      description: "Equipe com experiência em branding e imagem profissional, pronta para te destacar no mercado."
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre nós</h2>
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
                src="/images/hero/hero-section-8.webp"
                alt="Exemplo de retrato profissional"
                className="main-image"
              />
              <div className="highlight-box">
                <span className="highlight-number"><b>+20</b></span>
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
