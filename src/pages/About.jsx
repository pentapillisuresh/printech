import React, { useState, useEffect } from "react";
import WhyChooseUs from "../pages/Home/WhyChooseUs";

const About = () => {
  const [activeYear, setActiveYear] = useState("2025");

  useEffect(() => {
    // Initialize animations on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-up, .slide-in, .timeline-item');
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

  // Timeline Data with 1-2 points per year
  const timelineData = [
    {
      year: "2019",
      title: "Foundation Year",
      achievements: [
        "Established PRINTKEM INDUSTRIES",
        "Installed German-made Printing Machines"
      ],
      icon: "🏭"
    },
    {
      year: "2020",
      title: "Pharma Client Services",
      achievements: [
        "Added Pile Feeder Folding Machine",
        "Specialized in Pharma Pack Inserts & Leaflets"
      ],
      icon: "💊"
    },
    {
      year: "2021",
      title: "International Growth",
      achievements: [
        "Expanded supplies to Nepal & Bhutan"
      ],
      icon: "🌍"
    },
    {
      year: "2022",
      title: "In-house Innovation",
      achievements: [
        "Set up In-house Pre Press department"
      ],
      icon: "🔧"
    },
    {
      year: "2023",
      title: "Tech Advancement",
      achievements: [
        "Installed 4-colour HEIDELBERG machine",
        "Established Roto-gravure Cylinder Plant"
      ],
      icon: "🚀"
    },
    {
      year: "2024",
      title: "Diversification",
      achievements: [
        "Diversified into Flexographic Printing",
        "Established specialized Label Unit"
      ],
      icon: "🔄"
    },
    {
      year: "2025",
      title: "Future Vision",
      achievements: [
        "Planning major facility expansion",
        "Targeting ₹50 crore turnover"
      ],
      icon: "🔮"
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
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-2 mb-6">
            <div className="flex items-center justify-center gap-4 px-6 py-3">
            
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">ABOUT</h1>
                {/* <p className="text-lg text-white/80 mt-1">LABEL MANUFACTURING PVT LTD</p> */}
              </div>
            </div>
          </div>
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
                PRINTECH is a modern label manufacturing company established in 2019 in Siliguri, West Bengal. We specialize in high-quality label production using advanced German technology and innovative printing solutions.
              </p>
              <p>
                From our inception in 2019 to our current vision for 2025, we have consistently expanded our capabilities, embraced new technologies, and grown our market presence across multiple countries.
              </p>
              <p className="font-semibold text-[#2972B7] italic">
                At PRINTECH, we transform packaging into powerful brand experiences—combining precision, innovation, and sustainability in every label.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Timeline Section - Improved Design */}
      <section className="">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 fade-up">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] text-white text-lg font-semibold rounded-full shadow-lg">
                2019 - 2025 • Our Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Strategic Growth Timeline</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto pb-60">
              From foundation to future vision - Our journey of innovation
            </p>
          </div>

          {/* Timeline Container with Better Spacing */}
          <div className="relative max-w-6xl mx-auto">
            {/* Main Horizontal Timeline Line - Visible across all items */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#2972B7] via-[#1E4E8C] to-[#2972B7] transform -translate-y-1/2 z-0"></div>

            {/* Mobile Vertical Line */}
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2972B7] to-[#1E4E8C]"></div>

            {/* Timeline Items with Better Spacing */}
            <div className="relative">
              <div className="hidden lg:flex justify-between items-start">
                {timelineData.map((item, index) => {
                  const isActive = activeYear === item.year;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div 
                      key={index}
                      className="relative flex flex-col items-center"
                      style={{ width: `${100 / timelineData.length}%` }}
                    >
                      {/* Connecting line segment - only show between dots */}
                      {index < timelineData.length - 1 && (
                        <div className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] transform -translate-y-1/2 z-0"></div>
                      )}

                      {/* Timeline Dot with Connecting Lines */}
                      <div className="relative z-10 mb-6">
                        {/* Vertical line connecting dot to card */}
                        <div 
                          className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 h-16 transition-all duration-300 ${
                            isActive ? 'bg-gradient-to-b from-[#2972B7] to-[#1E4E8C]' : 'bg-gray-300'
                          }`}
                          style={{
                            top: isEven ? '100%' : 'auto',
                            bottom: isEven ? 'auto' : '100%',
                            height: '4rem'
                          }}
                        ></div>

                        {/* Timeline Dot */}
                        <div 
                          className={`w-8 h-8 rounded-full border-4 border-white shadow-xl cursor-pointer transition-all duration-300 flex items-center justify-center ${
                            isActive 
                              ? 'bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] scale-125 ring-4 ring-blue-100' 
                              : 'bg-white hover:bg-[#2972B7] hover:scale-110'
                          }`}
                          onClick={() => setActiveYear(item.year)}
                        >
                          {isActive && (
                            <span className="text-white text-xs">{item.icon}</span>
                          )}
                        </div>

                        {/* Year Label - Alwaysthe dot with clear visibility */}
                        <div 
                          className="absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                          style={{ bottom: 'calc(100% + 0.75rem)' }}
                        >
                          <div 
                            className={`px-4 py-2 rounded-lg font-bold text-base transition-all duration-300 cursor-pointer shadow-md ${
                              isActive 
                                ? 'bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] text-white shadow-lg' 
                                : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-[#2972B7]'
                            }`}
                            onClick={() => setActiveYear(item.year)}
                          >
                            {item.year}
                          </div>
                        </div>
                      </div>

                      {/* Card - Alternating top/bottom with better spacing */}
                      <div 
                        className={`absolute left-1/2 transform -translate-x-1/2 w-56 ${isEven ? 'top-full mt-13' : 'bottom-full mb-24'}`}
                      >
                        <div 
                          className={`bg-white rounded-xl shadow-lg p-4 border-2 transition-all duration-300 cursor-pointer hover:shadow-xl transform hover:-translate-y-1 ${
                            isActive 
                              ? 'border-[#2972B7] bg-gradient-to-br from-white to-blue-50 scale-105' 
                              : 'border-gray-100 hover:border-blue-200'
                          }`}
                          onClick={() => setActiveYear(item.year)}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-md ${
                              isActive 
                                ? 'bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] text-white' 
                                : 'bg-gray-50 text-gray-600'
                            }`}>
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                            </div>
                          </div>
                          
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start text-xs text-gray-600 leading-tight">
                                <svg className="w-3 h-3 text-[#2972B7] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Layout - Vertical */}
              <div className="lg:hidden space-y-8">
                {timelineData.map((item, index) => {
                  const isActive = activeYear === item.year;
                  
                  return (
                    <div key={index} className="timeline-item">
                      <div className="flex items-start">
                        {/* Timeline Dot and Connecting Line */}
                        <div className="flex flex-col items-center mr-4">
                          <div 
                            className={`w-7 h-7 rounded-full border-3 border-white shadow-lg cursor-pointer transition-all duration-300 flex items-center justify-center z-10 ${
                              isActive 
                                ? 'bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] scale-125' 
                                : 'bg-white hover:bg-[#2972B7] hover:scale-110'
                            }`}
                            onClick={() => setActiveYear(item.year)}
                          >
                            {isActive && (
                              <span className="text-white text-xs">{item.icon}</span>
                            )}
                          </div>
                          {index < timelineData.length - 1 && (
                            <div className="w-0.5 h-8 bg-gradient-to-b from-[#2972B7] to-[#1E4E8C] flex-grow mt-1"></div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          {/* Year Label */}
                          <div className="mb-3">
                            <div 
                              className={`px-4 py-2 rounded-lg font-bold text-base inline-block transition-all duration-300 cursor-pointer shadow-md ${
                                isActive 
                                  ? 'bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] text-white shadow-lg' 
                                  : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-[#2972B7]'
                              }`}
                              onClick={() => setActiveYear(item.year)}
                            >
                              {item.year}
                            </div>
                          </div>

                          {/* Card */}
                          <div 
                            className={`bg-white rounded-xl shadow-lg p-4 border-2 transition-all duration-300 cursor-pointer hover:shadow-xl ${
                              isActive 
                                ? 'border-[#2972B7] bg-gradient-to-br from-white to-blue-50' 
                                : 'border-gray-100 hover:border-blue-200'
                            }`}
                            onClick={() => setActiveYear(item.year)}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-md ${
                                isActive 
                                  ? 'bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] text-white' 
                                  : 'bg-gray-50 text-gray-600'
                              }`}>
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="text-base font-bold text-gray-900">{item.title}</h4>
                              </div>
                            </div>
                            
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start text-sm text-gray-600">
                                  <svg className="w-3 h-3 text-[#2972B7] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>


  

      {/* Expertise Section */}
      <section className="py-70 pb-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 py-10">Our Expertise</h2>
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
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Client Relations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            className="bg-cover bg-center rounded-xl p-8 lg:p-12 text-white text-center relative overflow-hidden slide-in"
            style={{
              backgroundImage: "linear-gradient(135deg, rgba(41, 114, 183, 0.95) 0%, rgba(30, 78, 140, 0.95) 100%), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-up">Our Client Relations</h2>
            <p className="text-base text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 fade-up" style={{ animationDelay: '0.2s' }}>
              At Printech, our clients are at the heart of everything we do. We believe in building long-term partnerships by understanding each client's unique requirements and delivering solutions that perfectly align with their vision.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 fade-up" style={{ animationDelay: '0.4s' }}>
              {[
                { number: "55+", label: "Clients Served" },
                { number: "7+", label: "Years Experience" },
                { number: "100%", label: "Quality Focus" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm text-white/80 mt-2">{stat.label}</div>
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
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .timeline-item.animate {
          opacity: 1;
          transform: translateY(0);
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
      `}</style>
    </div>
  );
};

export default About;