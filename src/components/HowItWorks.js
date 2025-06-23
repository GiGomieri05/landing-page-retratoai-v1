import React from 'react';
import { Upload, Target, CheckCircle, ArrowRight } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Como <span className="highlight">Funciona</span>
          </h2>
          <p className="section-subtitle">
            Transforme suas fotos em retratos profissionais em apenas 3 passos simples
          </p>
        </div>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-icon">
              <Upload size={28} strokeWidth={1.8} />
            </div>
            <h3 className="step-title">Envie suas fotos</h3>
            <p className="step-description">
              Ou seu @ do Instagram para análise
            </p>
          </div>

          <div className="step-arrow">
            <ArrowRight size={32} />
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-icon">
              <Target size={28} strokeWidth={1.8} />
            </div>
            <h3 className="step-title">Conte seu objetivo</h3>
            <p className="step-description">
              Como você quer se posicionar profissionalmente
            </p>
          </div>

          <div className="step-arrow">
            <ArrowRight size={32} />
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-icon">
              <CheckCircle size={28} strokeWidth={1.8} />
            </div>
            <h3 className="step-title">Receba seus retratos</h3>
            <p className="step-description">
              Com aparência de estúdio profissional
            </p>
          </div>
        </div>

        <div className="cta-container">
          <a href="https://form.jotform.com/251413836021043" className="cta-button secondary">
            Quero enviar minhas fotos
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
