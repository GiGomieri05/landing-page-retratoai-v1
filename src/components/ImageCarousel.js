import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

const ImageCarousel = () => {
  // Local images from the carroussel directory
  const images = [
    { id: 1, url: '/images/carroussel/freepik__a-portrait-of-a-28-year-old-middle-eastern-man-wit__37305.webp' },
    { id: 2, url: '/images/carroussel/freepik__gugahighresolution-studio-portrait-of-a-23yearold-__37296.webp' },
    { id: 3, url: '/images/carroussel/freepik__gugahighresolution-studio-portrait-of-a-25yearold-__37297.webp' },
    { id: 4, url: '/images/carroussel/freepik__highresolution-professional-studio-portrait-of-a-m__37300.webp' },
    { id: 5, url: '/images/carroussel/freepik__highresolution-studio-portrait-of-a-stunning-brazi__37299.webp' },
    { id: 6, url: '/images/carroussel/freepik__professional-corporate-portrait-of-a-smiling-man-i__37306.webp' },
    { id: 7, url: '/images/carroussel/freepik__professional-portrait-of-a-confident-young-busines__37307.webp' },
    { id: 8, url: '/images/carroussel/freepik__studio-portrait-of-a-confident-woman-sitting-on-a-__37298.webp' },
    { id: 9, url: '/images/carroussel/freepik__the-style-is-candid-image-photography-with-natural__37301.webp' },
    { id: 10, url: '/images/carroussel/freepik__the-style-is-candid-image-photography-with-natural__37304.webp' },
    { id: 11, url: '/images/carroussel/freepik__warm-indoor-portrait-of-a-confident-woman-seated-i__37302.webp' },
    { id: 12, url: '/images/carroussel/freepik__warm-indoor-portrait-of-a-confident-woman-seated-i__37303.webp' },
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
