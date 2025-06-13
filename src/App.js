import React from 'react';
import './App.css';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import ImageCarousel from './components/ImageCarousel';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <div className="App">
      <Hero />
      <ValueProp />
      <ImageCarousel />
      <HowItWorks />
    </div>
  );
}

export default App;
