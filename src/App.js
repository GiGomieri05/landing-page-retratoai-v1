import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element } from 'react-scroll';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import ImageCarousel from './components/ImageCarousel';
import HowItWorks from './components/HowItWorks';
import BeforeAfterTestimonials from './components/BeforeAfterTestimonials';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <main>
          <Element name="hero">
            <Hero />
          </Element>
          
          <Element name="valor">
            <ValueProp />
          </Element>
          
          <Element name="">
            <ImageCarousel />
          </Element>
          
          <Element name="como-funciona">
            <HowItWorks />
          </Element>
          
          <Element name="depoimentos">
          <BeforeAfterTestimonials /> 
          </Element>
          
          
          <Element name="sobre">
            <AboutSection />
          </Element>
          
          <Element name="planos">
            <PricingSection />
          </Element>
          
          <Element name="faq">
            <FAQSection />
          </Element>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
