import React, { useState, useRef, useEffect } from 'react';
import './FAQSection.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: "Mas não é só uma IA fazendo tudo?",
      answer: "A IA é só o meio. O valor está na curadoria: cada retrato é pensado com intenção de autoridade, considerando seu nicho e objetivos profissionais."
    },
    {
      question: "E se eu já tiver uma foto boa?",
      answer: "Ótimo! Mas talvez sua imagem atual não represente onde você quer chegar. Nossos retratos são criados para transmitir profissionalismo e alinhamento com seus objetivos de carreira."
    },
    {
      question: "Vai parecer artificial?",
      answer: "Não se preocupe. Nossa curadoria garante naturalidade, estilo e coerência com seu nicho. Os resultados são realistas e profissionais, sem aquele aspecto artificial de IA."
    },
    {
      question: "É seguro enviar minhas fotos?",
      answer: "Totalmente seguro. Suas imagens são usadas exclusivamente para calibrar a IA e a geração dos retratos. Respeitamos sua privacidade e garantimos a segurança dos seus dados."
    },
    {
      question: "Quanto tempo leva para receber minhas fotos?",
      answer: "O processo leva em média de 3 a 5 dias úteis após o envio das suas fotos, de acordo com o pacote contratado."
    },
    {
      question: "Posso pedir ajustes nas fotos geradas?",
      answer: "Sim! Te mostramos um resultado inicial para que você possa avaliar. Depois disso, oferecemos algumas rodadas de ajustes conforme o pacote contratado."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Intersection Observer para animação de entrada
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      className={`faq-section ${isVisible ? 'visible' : ''}`} 
      id="duvidas"
      ref={sectionRef}
      aria-label="Perguntas Frequentes"
    >
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Perguntas Frequentes</h2>
          <p>Encontre respostas para as principais dúvidas sobre a Retrato.AI</p>
        </div>
        
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-card ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon" aria-hidden="true">
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>
              <div 
                id={`faq-${index}`}
                className="faq-answer"
                role="region"
                aria-hidden={activeIndex !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
