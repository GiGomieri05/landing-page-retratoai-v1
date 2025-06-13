import React from 'react';
import './ValueProp.css';

const ValueProp = () => {
  return (
    <section className="value-prop">
      <div className="container">
        <div className="value-prop-content">
          <div className="section-header">
            <h2 className="section-title">
              A Retrato.AI não vende fotos.
              <span className="highlight">Entrega posicionamento estratégico</span> com aparência de ensaio profissional.
            </h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <span>📸</span>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Alta qualidade</h3>
                <p className="benefit-description">Sem precisar de fotógrafo ou estúdio</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <span>🧠</span>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Curadoria estratégica</h3>
                <p className="benefit-description">Personalizado para o seu nicho</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <span>⏱</span>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Entrega rápida</h3>
                <p className="benefit-description">Pronto em poucos dias</p>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">
                <span>💼</span>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">Ideal para quem vende confiança</h3>
                <p className="benefit-description">Psicólogas, coaches, dentistas, consultores...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
