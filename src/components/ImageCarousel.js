import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

const ImageCarousel = () => {
  // Sample images from Picsum - you can replace these with your actual images later
  const images = [
    { id: 1, url: 'https://picsum.photos/seed/portrait1/800/600' },
    { id: 2, url: 'https://picsum.photos/seed/portrait2/800/600' },
    { id: 3, url: 'https://picsum.photos/seed/portrait3/800/600' },
    { id: 4, url: 'https://picsum.photos/seed/portrait4/800/600' },
    { id: 5, url: 'https://picsum.photos/seed/portrait5/800/600' },
    { id: 6, url: 'https://picsum.photos/seed/portrait6/800/600' },
    { id: 7, url: 'https://picsum.photos/seed/portrait7/800/600' },
    { id: 8, url: 'https://picsum.photos/seed/portrait8/800/600' },
    { id: 9, url: 'https://picsum.photos/seed/portrait9/800/600' },
    { id: 10, url: 'https://picsum.photos/seed/portrait10/800/600' },
    { id: 11, url: 'https://picsum.photos/seed/portrait11/800/600' },
    { id: 12, url: 'https://picsum.photos/seed/portrait12/800/600' },
  ];

  const getSlidesToShow = () => {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 992) return 3;
    if (window.innerWidth < 1200) return 4;
    return 5;
  };

  const [slidesToShow, setSlidesToShow] = React.useState(() => {
    const val = getSlidesToShow();
    return val > images.length ? images.length : val;
  });

  React.useEffect(() => {
    const handleResize = () => {
      const val = getSlidesToShow();
      setSlidesToShow(val > images.length ? images.length : val);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images.length]);

  // Pausa o autoplay quando a aba está oculta, retoma quando volta
  const sliderRef = React.useRef();
  React.useEffect(() => {
    const handleVisibility = () => {
      if (sliderRef.current) {
        if (document.visibilityState === 'visible') {
          sliderRef.current.slickPlay();
        } else {
          sliderRef.current.slickPause();
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // velocidade mais suave
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1, // 1ms para scroll contínuo sem bug
    pauseOnHover: false,
    centerMode: false, // desativa centralização para suavizar loop
    centerPadding: '0',
    cssEase: 'linear', // linear para efeito contínuo
    arrows: false, // sem setas
    swipe: true, // swipe ativado para evitar travamentos
    variableWidth: false, // desativa largura variável para melhor controle
    adaptiveHeight: false, // desativa altura adaptativa para melhor performance
    rows: 1, // garante apenas uma linha de slides
    slidesPerRow: 1, // um slide por linha
    edgeFriction: 0.35, // suaviza a transição entre o último e o primeiro slide
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
        }
      }
    ]
  };

  return (
    <section className="image-carousel-section">
      <div className="carousel-container">
        <Slider ref={sliderRef} {...settings} className="carousel-slider">
          {images.map((image) => (
            <div key={image.id} className="carousel-slide">
              <div className="image-wrapper">
                <img
                  src={image.url}
                  alt={`Retrato ${image.id}`}
                  className="carousel-image"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ImageCarousel;
