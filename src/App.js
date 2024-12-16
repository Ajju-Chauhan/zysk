import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Navbar />
    <HeroSection />
    <Features />
    <Testimonials />
    <Footer />
  </div>
);

export default App;
