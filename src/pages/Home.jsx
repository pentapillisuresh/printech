import React from 'react';
import BannerCarousel from './Home/BannerCarousel';
import AboutUs from './Home/AboutUs';
import QualityManagement from './Home/QualityManagement';
import Products from './Home/Products';
import 'aos/dist/aos.css';



function Homepage() {
  return (
    <div className="min-h-screen">
      <BannerCarousel />
      <AboutUs />
      <QualityManagement />
      <Products />
    </div>
  );
}

export default Homepage;