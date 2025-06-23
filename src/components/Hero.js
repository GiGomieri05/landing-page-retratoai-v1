import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    const images = React.useMemo(() => [
        '/images/hero/hero-section-1.webp',
        '/images/hero/hero-section-2.webp',
        '/images/hero/hero-section-3.webp',
        '/images/hero/hero-section-4.webp',
        '/images/hero/hero-section-5.webp',
        '/images/hero/hero-section-6.webp',
        '/images/hero/hero-section-7.webp',
        '/images/hero/hero-section-8.webp',
    ], []);

    // Change image every 7 seconds
    useEffect(() => {
        const changeImage = () => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsTransitioning(false);
            }, 300);
        };
        const interval = setInterval(changeImage, 7000);
        return () => clearInterval(interval);
    }, [images.length]);

    // Image transition effect
    useEffect(() => {
        const changeImage = () => {
            setIsTransitioning(true);
            
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsTransitioning(false);
            }, 300);
        };

        const interval = setInterval(changeImage, 7000);
        return () => clearInterval(interval);
    }, [images.length]);
    
    // Preload next image
    useEffect(() => {
        if (images.length > 1) {
            const nextIndex = (currentImageIndex + 1) % images.length;
            const img = new Image();
            img.src = images[nextIndex];
        }
    }, [currentImageIndex, images]);

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
                    <a href="https://form.jotform.com/251413836021043" className="cta-button" aria-label="Comece agora e obtenha seu retrato profissional">
                        Quero meu retrato agora
                    </a>
                </div>
                <div className="hero-image">
                    <div className="hero-image-container">
                        <div className={`hero-main-image-container ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                            <img 
                                src={images[currentImageIndex]} 
                                alt="Exemplo de retrato profissional" 
                                className="hero-main-image" 
                                loading="eager"
                                width={600}
                                height={750}
                                onLoad={() => setIsTransitioning(false)}
                            />
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
