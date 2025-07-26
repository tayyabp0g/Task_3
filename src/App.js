import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ReviewsSection from './ReviewsSection';
import PricingSection from './PricingSection';
import FooterSection from './FooterSection';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="App">
      <HeroSection />
      <FeaturesSection />
      <ReviewsSection />
      <PricingSection />
      <FooterSection />
    </div>
  );
}

export default App;
