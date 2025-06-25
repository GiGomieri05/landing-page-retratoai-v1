import React from 'react';
import './BeforeAfterTestimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

const BeforeAfterTestimonials = () => {
  // Dados dos depoimentos
  const testimonials = [
    {
      id: 1,
      image: '/images/carroussel/freepik__gugahighresolution-studio-portrait-of-a-23yearold-__37296.webp',
      text: 'Estou no início da minha carreira e queria uma imagem que transmitisse confiança, simpatia e profissionalismo. Mas eu não tinha tempo — nem orçamento — para fazer um ensaio fotográfico. Quando descobri a criação de imagens por IA, fiquei impressionado com a qualidade e rapidez. A imagem ficou exatamente como eu imaginava. Já estou usando no meu LinkedIn, currículo e apresentações.',
      name: 'Gustavo',
      age: 23,
      profession: 'Veterinário',
      imagePosition: 'left'
    },
    {
      id: 2,
      image: '/images/freepik__highresolution-editorial-portrait-of-a-confident-2__27976.webp',
      text: 'Mesmo já tendo feito ensaios profissionais e investido em imagens para meu consultório, fiquei surpresa com o resultado da imagem gerada por IA. A praticidade, o custo-benefício e a qualidade visual me chamaram atenção. Em poucos minutos, tive uma foto linda, com a estética e o estilo que combinam com meu trabalho como psicóloga. Hoje, uso tanto nas redes sociais quanto em materiais de divulgação — e recomendo para colegas que querem uma solução rápida e eficiente.',
      name: 'Julia',
      age: 25,
      profession: 'Psicóloga',
      imagePosition: 'right'
    },
    {
      id: 3,
      image: '/images/freepik__highresolution-professional-studio-portrait-of-a-m__27983.webp',
      text: 'Este ano completo 30 anos de profissão. Sei da importância de transmitir confiança e profissionalismo em cada detalhe — inclusive na imagem que apresento. Mas com a rotina corrida do consultório, manter minhas fotos atualizadas é inviável. Quando conheci a criação de imagens por IA, fiquei surpresa com a praticidade e qualidade. A imagem ficou exatamente como eu queria: séria, acolhedora e profissional. Já estou usando no meu Instagram, WhatsApp e materiais de apresentação.',
      name: 'Ana Cristina',
      age: 53,
      profession: 'Ortodontista',
      imagePosition: 'left'
    }
  ];

  return (
    <section className="testimonials-section" id="depoimentos">
      <div className="container">
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <p className="section-subtitle">Veja como o RetratoAI está transformando a forma como as pessoas criam suas fotos profissionais</p>
        
        <div className="testimonials-list">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className={`testimonial-row ${testimonial.imagePosition}`}
            >
              <div className="testimonial-content">
                <div className="testimonial-image-container">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name} - ${testimonial.profession}`} 
                    className="testimonial-image"
                  />
                </div>
                <div className="testimonial-text-container">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-details">{testimonial.age} anos • {testimonial.profession}</div>
                  </div>
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
