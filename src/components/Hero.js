import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Retratos profissionais por IA para quem vive da própria imagem
                    </h1>
                    <p className="hero-subtitle">
                        Eleve sua autoridade com uma imagem feita para vender sua expertise — sem perder tempo, sem parecer artificial.
                    </p>
                    <a href="#contact" className="cta-button" aria-label="Comece agora e obtenha seu retrato profissional">
                        Quero meu retrato agora
                    </a>
                </div>
                <div className="hero-image">
                    <div className="before-after-grid">
                        <div className="image-container">
                            <img 
                                src="https://picsum.photos/seed/before/800/1000" 
                                alt="Antes - Selfie comum" 
                                className="before-image" 
                                loading="lazy"
                                width="400"
                                height="500"
                            />
                            <div className="overlay" aria-hidden="true">IA</div>
                        </div>
                        <div className="image-container">
                            <img 
                                src="https://picsum.photos/seed/after/800/1000" 
                                alt="Depois - Retrato profissional" 
                                className="after-image" 
                                loading="lazy"
                                width="400"
                                height="500"
                            />
                            <div className="overlay" aria-hidden="true">FOTO</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Decorative elements */}
            <div className="decorative-elements">
                <div className="decorative-circle circle-1"></div>
                <div className="decorative-circle circle-2"></div>
                <div className="decorative-circle circle-3"></div>
            </div>
        </section>
    );
};

export default Hero;
