import React from 'react';
import Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner';
import DownloadBar from '../components/DownloadBar';
import IntroSection from '../components/IntroSection';
import NewsSlider from '../components/NewsSlider';
import ServiceDashboard from '../components/ServiceDashboard';

function Home() {
  return (
    <div className="main_content">
      {/* Top NavBar */}
      <Navbar />

      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Download Bar Section */}  
      <DownloadBar />

      {/* Intro Section */}
      <IntroSection />

      {/* News Slider Section */}
      <NewsSlider />

      {/* Service Dashboard Section */}
      <ServiceDashboard />

      {/* Bottom Footer */}
      <Footer />

    </div>
  );
}

export default Home;