import React from 'react';
import BannerCarousel from './Home/BannerCarousel';
import AboutUs from './Home/AboutUs';
import Services from './Home/Services';
import Projects from './Home/Projects';
import WhyChooseUs from './Home/WhyChooseUs';

import 'aos/dist/aos.css';



function Homepage() {
  return (
    <div className="min-h-screen">
      <BannerCarousel />
      <AboutUs />
      {/* <Services /> */}
      {/* <Projects /> */}
      {/* <WhyChooseUs /> */}
    </div>
  );
}

export default Homepage;