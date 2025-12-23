import React, { useState, useEffect } from "react";
import WhyChooseUs from "../pages/Home/WhyChooseUs";

const About = () => {
  const [activeYear, setActiveYear] = useState("2025");

  useEffect(() => {
    // Initialize animations on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.timeline-item, .fade-up, .slide-in');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      title: 'Our Mission',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      description: 'To deliver high-quality, customized labels with precision and efficiency. By leveraging advanced technology and the expertise of our dedicated team, we ensure every label reflects excellence, innovation, and reliability—helping our clients enhance their brand presence and achieve lasting impact.'
    },
    {
      title: 'Our Vision',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      description: 'To become a trusted and inspiring name in the label printing industry—driven by innovation, rooted in sustainability, and committed to exceptional quality. We aim to empower brands of every size to express their unique identity with clarity, creativity, and confidence.'
    }
  ];

  const expertise = [
    {
      title: 'Innovative Label Solutions',
      description: 'We harness the power of innovation to craft bespoke label solutions that elevate brand identities and enhance product visibility.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'State-of-the-Art Technology',
      description: 'Our advanced manufacturing facilities are equipped with the latest technology, ensuring high-quality label production with precision and speed.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Quality Assurance',
      description: 'Our stringent quality control measures guarantee that every label meets the highest standards of excellence, reflecting our dedication to customer satisfaction.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Customer-Centric Approach',
      description: 'We prioritize customer needs, delivering tailored solutions that meet specific requirements and exceed expectations.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const timelineData = [
    {
      year: "2019",
      title: "Digital Transformation",
      description: [
        "Implemented ERP system for integrated business management",
        "Launched online quotation and order tracking portal",
        "Achieved ISO 9001:2015 quality certification",
        "Digitized all production workflows"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      year: "2020",
      title: "Sustainable Initiatives",
      description: [
        "Introduced eco-friendly water-based inks across all products",
        "Implemented solar power system covering 40% of energy needs",
        "Launched comprehensive recycling program for production waste",
        "Reduced carbon footprint by 35% through process optimization"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      year: "2021",
      title: "Green Facility & Automation",
      description: [
        "Shifted to new plant, Jaipath - a 900 sq ft green facility",
        "Installed automated cutting and finishing machines",
        "Implemented robotic palletizing system for increased efficiency",
        "Achieved LEED Gold certification for sustainable building design"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      year: "2022",
      title: "Packaging Diversification",
      description: [
        "Diversified into flexible packaging solutions",
        "Added advanced pouch making and laminating capabilities",
        "Expanded to international markets including Bangladesh and Nepal",
        "Launched custom packaging design service for premium clients"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      year: "2023",
      title: "AI & Technology Integration",
      description: [
        "Implemented AI-based quality inspection systems with 99.8% accuracy",
        "Launched AR-based label visualization tool for client presentations",
        "Integrated IoT sensors for predictive maintenance of machinery",
        "Developed proprietary color matching software for precise branding"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      year: "2024",
      title: "Premium Expansion",
      description: [
        "Ventured into luxury rigid box manufacturing",
        "Upgraded Gallus EC8 340 to 10-colour printing capability",
        "Invested in R2R Screen Printing machines for specialized applications",
        "Launched exclusive premium packaging division for luxury brands"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    {
      year: "2025",
      title: "Strategic Growth Vision",
      description: [
        "Expanding operations to South Indian market with new facility",
        "Target to achieve ₹50 crore annual turnover",
        "Increasing green energy usage to 80% of total consumption",
        "Implementing Industry 4.0 with fully connected smart factory"
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 overflow-hidden h-[400px] flex items-center slide-in"
        style={{
          backgroundImage: "linear-gradient(rgba(41, 114, 183, 0.9), rgba(30, 78, 140, 0.9)), url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 fade-up">About PRINTECH</h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto fade-up" style={{ animationDelay: '0.2s' }}>
            Leading label manufacturing company committed to excellence, innovation, and sustainable growth
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Are We?</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                PRINTECH is a modern label manufacturing company located in Siliguri, West Bengal, established with a vision to revolutionize the packaging industry through innovation and technology.
              </p>
              <p>
                Our journey from 2019 to 2025 demonstrates our commitment to continuous improvement, sustainable practices, and cutting-edge technology. We serve diverse sectors with precise, high-quality labelling solutions that enhance brand value.
              </p>
              <p className="font-semibold text-[#2972B7] italic">
                At PRINTECH, we transform packaging into powerful brand experiences—combining precision, innovation, and sustainability in every label.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Straight Line Design */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 fade-up">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] text-white text-sm font-semibold rounded-full">
                2019 - 2025
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Strategic Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A timeline of innovation, growth, and industry leadership
            </p>
          </div>

          {/* Straight Line Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#2972B7] via-[#1E4E8C] to-[#2972B7] hidden lg:block"></div>

            {/* Timeline Items */}
            {timelineData.map((item, index) => (
              <div 
                key={index}
                className="timeline-item relative mb-16 lg:mb-20"
                data-delay={index * 100}
              >
                <div className="flex flex-col lg:flex-row items-center">
                  {/* Left Side (Odd Index) */}
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:order-2'}`}>
                    <div 
                      className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform transition-all duration-700 ${
                        activeYear === item.year ? 'scale-105 shadow-xl border-[#2972B7]' : 'hover:scale-102'
                      }`}
                      onClick={() => setActiveYear(item.year)}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            activeYear === item.year 
                              ? 'bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] text-white' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">{item.year}</div>
                            <div className="text-sm text-gray-500">Milestone</div>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      
                      <ul className="space-y-2">
                        {item.description.map((desc, i) => (
                          <li 
                            key={i} 
                            className="flex items-start text-gray-600"
                          >
                            <svg className="w-4 h-4 text-[#2972B7] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div 
                      className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                        activeYear === item.year 
                          ? 'bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] scale-125' 
                          : 'bg-[#2972B7]'
                      }`}
                    ></div>
                  </div>

                  {/* Year Label on Timeline */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 mt-2">
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeYear === item.year 
                        ? 'bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] text-white' 
                        : 'bg-white text-gray-700 border border-gray-200'
                    }`}>
                      {item.year}
                    </div>
                  </div>

                  {/* Right Side (Even Index) */}
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12 lg:order-2' : 'lg:pr-12'}`}>
                    {/* Empty space for alternating layout */}
                  </div>
                </div>
              </div>
            ))}

            {/* Mobile Timeline Line */}
            <div className="absolute left-6 w-1 h-full bg-gradient-to-b from-[#2972B7] to-[#1E4E8C] lg:hidden"></div>
            
            {/* Mobile Year Labels */}
            {timelineData.map((item, index) => (
              <div 
                key={`mobile-year-${index}`}
                className="lg:hidden absolute left-6 transform -translate-x-1/2"
                style={{ top: `${index * 280}px` }}
              >
                <div className="w-6 h-6 bg-white border-4 border-[#2972B7] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#2972B7] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto mt-20 fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Journey Progress</h3>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] bg-clip-text text-transparent">
                      7+ Years
                    </div>
                    <div className="text-sm text-gray-600">Of Experience</div>
                  </div>
                  <div className="w-1 h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] bg-clip-text text-transparent">
                      95%
                    </div>
                    <div className="text-sm text-gray-600">Goals Achieved</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#2972B7] via-[#1E4E8C] to-[#2972B7] rounded-full progress-bar-animation"
                    style={{ width: '95%' }}
                  ></div>
                </div>
                <div className="flex justify-between mt-4 text-sm text-gray-600">
                  {timelineData.map((item, i) => (
                    <div 
                      key={i}
                      className={`text-center ${activeYear === item.year ? 'font-bold text-[#2972B7]' : ''}`}
                    >
                      {item.year}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combining innovation, precision, and dedication to deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-500 border border-transparent hover:border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Client Relations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            className="bg-cover bg-center rounded-2xl p-8 lg:p-16 text-white text-center relative overflow-hidden slide-in"
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(41, 114, 183, 0.95) 0%, rgba(30, 78, 140, 0.95) 100%), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-up">Our Client Relations</h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 fade-up" style={{ animationDelay: '0.2s' }}>
              At Printech, our clients are at the heart of everything we do. We believe in building long-term partnerships by understanding each client's unique requirements and delivering solutions that perfectly align with their vision. From concept to completion, our team works hand-in-hand with customers to ensure every detail is met with precision, quality, and care.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 fade-up" style={{ animationDelay: '0.4s' }}>
              {[
                { number: "55+", label: "Clients" },
                { number: "7+", label: "Years Experience" },
                { number: "99.8%", label: "Quality" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        .slide-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .slide-in.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .fade-up.animate {
          opacity: 1;
          transform: translateY(0);
        }
        
        .timeline-item {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .timeline-item:nth-child(even) {
          transform: translateX(30px);
        }
        
        .timeline-item.animate {
          opacity: 1;
          transform: translateX(0);
        }
        
        .progress-bar-animation {
          animation: progressBar 2s ease-out forwards;
          transform-origin: left;
        }
        
        @keyframes progressBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
        
        @media (max-width: 1024px) {
          .timeline-item:nth-child(even) {
            transform: translateX(-30px);
          }
        }
      `}</style>
    </div>
  );
};

export default About;