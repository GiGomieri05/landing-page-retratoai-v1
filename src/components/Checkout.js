import React from 'react';
import './Checkout.css';

const products = [
  {
    id: 1,
    title: 'Pacote Básico',
    photos: '5 Fotos',
    price: 'R$ 300',
    description: 'Ideal para quem quer experimentar ou precisa de poucas opções.',
    features: [
      'Entrega rápida',
      'Curadoria estratégica',
      'Qualidade profissional',
      '1 rodada de edição',
    ],
    button: 'Quero 5 fotos',
  },
  {
    id: 2,
    title: 'Pacote Padrão',
    photos: '10 Fotos',
    price: 'R$ 480',
    badge: 'Mais vendido',
    description: 'Nosso mais pedido!\nPerfeito para perfis e usos variados.',
    features: [
      'Mais variedade de estilos',
      'Curadoria estratégica',
      'Entrega rápida',
      '1 rodada de edição',
    ],
    button: 'Quero 10 fotos',
  },
  {
    id: 3,
    title: 'Pacote Completo',
    photos: '15 Fotos',
    price: 'R$ 600',
    description: 'Para quem quer máxima flexibilidade e presença em todas as redes.',
    features: [
      'Diversos estilos e fundos',
      'Curadoria personalizada',
      'Entrega prioritária',
      '3 rodadas de edições',
    ],
    button: 'Escolher 15 Fotos',
  },
];

const Checkout = () => (
  <div className="checkout-container">
    <div className="checkout-highlight">Você está quase lá 🚀</div>
    <h1 className="checkout-title">Escolha seu pacote de fotos</h1>
    <p style={{color: '#6b6b84', textAlign: 'center', maxWidth: 520, margin: '0 auto 2.5rem auto', fontSize: '1.15rem', fontFamily: 'Questrial, sans-serif'}}>
      Todos os pacotes incluem curadoria estratégica, visual profissional e entrega rápida direto no seu WhatsApp.
    </p>
    <div className="products-list">
      {products.map((product, idx) => (
        <div className="product-card" key={product.id} style={{position: 'relative'}}>
          {product.badge && (
            <div className="product-badge">{product.badge}</div>
          )}
          <div className="product-title">{product.title}</div>
          <div className="product-photos">{product.photos}</div>
          {product.price && (
            <div className="product-price">{product.price}</div>
          )}
          <div className="product-feature"><span style={{ whiteSpace: 'pre-line' }}>{product.description}</span></div>
          <ul style={{listStyle: 'none', padding: 0, margin: '0 0 1.2rem 0', width: '100%'}}>
            {product.features.map((feature, i) => (
              <li key={i} style={{
                color: '#5d4fff',
                fontWeight: 500,
                fontSize: '0.98rem',
                marginBottom: 6,
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}>
                <span style={{fontSize: '1.1em'}}>✔</span> {feature}
              </li>
            ))}
          </ul>
          <button
            className="product-button"
            onClick={() => {
              const paymentLinks = {
                1: 'https://payfast.greenn.com.br/125027', // 5 fotos
                2: 'https://payfast.greenn.com.br/125028', // 10 fotos
                3: 'https://payfast.greenn.com.br/125029', // 15 fotos
              };
              window.location.href = paymentLinks[product.id];
            }}
          >
            {product.button}
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Checkout;
