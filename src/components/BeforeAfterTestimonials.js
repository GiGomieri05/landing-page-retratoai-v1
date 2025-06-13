import React from 'react';
import './BeforeAfterTestimonials.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const BeforeAfterTestimonials = () => {
  // Dados de exemplo para antes/depois
  const beforeAfterItems = [
    {
      id: 1,
      before: 'https://picsum.photos/seed/before1/600/600',
      after: 'https://picsum.photos/seed/after1/600/600',
      name: 'Ana S.',
      role: 'Executiva de Vendas',
      testimonial: 'Nunca me senti tão profissional.'
    },
    {
      id: 2,
      before: 'https://picsum.photos/seed/before2/600/600',
      after: 'https://picsum.photos/seed/after2/600/600',
      name: 'Carlos M.',
      role: 'Empreendedor',
      testimonial: 'Ajudou até na minha autoconfiança!'
    },
    {
      id: 3,
      before: 'https://picsum.photos/seed/before3/600/600',
      after: 'https://picsum.photos/seed/after3/600/600',
      name: 'Juliana F.',
      role: 'Gerente de Marketing',
      testimonial: 'Usei no LinkedIn e gerei mais chamadas em uma semana.'
    },
  ];

  return (
    <section className="before-after-section">
      <div className="container">
        <h2 className="section-title">Resultados Reais</h2>
        <p className="section-subtitle">Veja a transformação de quem já usou</p>
        
        <div className="before-after-grid">
          {beforeAfterItems.map((item) => (
            <div key={item.id} className="before-after-card">
              <div className="before-after-images">
                <div className="image-container">
                  <img src={item.before} alt="Antes" className="before-image" />
                  <span className="image-label">Antes</span>
                </div>
                <div className="image-container">
                  <img src={item.after} alt="Depois" className="after-image" />
                  <span className="image-label">Depois</span>
                </div>
              </div>
              <div className="testimonial">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">{item.testimonial}</p>
                <div className="quote-icon right">
                  <FaQuoteRight />
                </div>
                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterTestimonials;
