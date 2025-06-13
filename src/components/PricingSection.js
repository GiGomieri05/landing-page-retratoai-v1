import React from 'react';
import './PricingSection.css';
import { FaCheck, FaCrown, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';

const PricingSection = () => {
  const plans = [
    {
      id: 1,
      name: 'Básico',
      price: 'R$ 300',
      popular: false,
      features: [
        '3 imagens profissionais',
        'Curadoria especializada',
        'Entrega em até 3 dias úteis',
        '1 rodada de ajustes',
        'Suporte por e-mail'
      ],
      buttonText: 'Comprar Agora',
      buttonVariant: 'outline'
    },
    {
      id: 2,
      name: 'Profissional',
      price: 'R$ 480',
      popular: true,
      features: [
        '6 imagens profissionais',
        'Curadoria especializada',
        'Ajustes finos personalizados',
        'Entrega em até 5 dias úteis',
        '2 rodadas de ajustes',
        'Suporte prioritário',
        'Guia de posicionamento'
      ],
      buttonText: 'Quero me destacar',
      buttonVariant: 'primary',
      priceNote: 'Economize R$ 120'
    },
    {
      id: 3,
      name: 'Assinatura Visual',
      price: 'R$ 199/mês',
      popular: false,
      comingSoon: true,
      features: [
        '4 novas imagens por mês',
        'Atualização de look trimestral',
        'Curadoria premium',
        'Ajustes ilimitados',
        'Suporte VIP',
        'Prioridade na fila'
      ],
      buttonText: 'Lista de espera',
      buttonVariant: 'outline',
      priceNote: 'Lançamento em breve!'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/SEUNUMERO', '_blank');
  };

  return (
    <section className="pricing-section" id="planos">
      <div className="pricing-container">
        <div className="section-header">
          <h2>Planos e Preços</h2>
          <p>Escolha o pacote ideal para suas necessidades profissionais</p>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${plan.comingSoon ? 'coming-soon' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <FaCrown /> Mais Escolhido
                </div>
              )}
              
              {plan.comingSoon && (
                <div className="coming-soon-badge">Em Breve</div>
              )}
              
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  {plan.price}
                  {plan.priceNote && <span className="price-note">{plan.priceNote}</span>}
                </div>
              </div>
              
              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <FaCheck className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="pricing-footer">
                <button 
                  className={`btn ${plan.buttonVariant} ${plan.comingSoon ? 'disabled' : ''}`}
                  disabled={plan.comingSoon}
                >
                  {plan.comingSoon ? (
                    <span>{plan.buttonText}</span>
                  ) : (
                    <>
                      <FaShoppingCart /> {plan.buttonText}
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="whatsapp-cta">
          <p>Não encontrou o que procura?</p>
          <button className="btn whatsapp" onClick={handleWhatsApp}>
            <FaWhatsapp /> Conversar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
