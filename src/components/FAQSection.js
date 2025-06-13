import React, { useState } from 'react';
import './FAQSection.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
      answer: "Totalmente seguro. Suas imagens são usadas exclusivamente para a geração dos retratos e são descartadas logo após a entrega. Respeitamos sua privacidade e seguimos rigorosos protocolos de segurança de dados."
    },
    {
      question: "Quanto tempo leva para receber minhas fotos?",
      answer: "O processo leva em média 3 dias úteis após o envio das suas fotos. Para o pacote profissional, o prazo é de até 5 dias úteis devido aos ajustes personalizados."
    },
    {
      question: "Posso pedir ajustes nas fotos geradas?",
      answer: "Sim! Oferecemos rodadas de ajustes conforme o pacote contratado. No Básico, você tem direito a 1 rodada, e no Profissional, 2 rodadas de ajustes finos."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Dúvidas Frequentes</h2>
          <p>Tire suas principais dúvidas sobre a Retrato.AI</p>
        </div>
        
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-card ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <p>Ainda tem dúvidas? Estamos aqui para ajudar!</p>
          <a href="https://wa.me/SEUNUMERO" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
