import React from 'react';
import BannerCarousel from '../printkem/Banner';
import AboutUs from '../printkem/About';


import 'aos/dist/aos.css';



function Home() {
  return (
    <div className="min-h-screen">
      {/* <BannerCarousel /> */}
      <AboutUs />
     
    </div>
  );
}

export default Home;