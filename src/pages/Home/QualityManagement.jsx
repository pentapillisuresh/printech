import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const QualityManagement = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const qualityCards = [
    {
      id: 1,
      title: "Certification Excellence",
      description: "BSI certified ISO 9001:2015 quality management system ensuring international standards compliance and customer satisfaction.",
      image: "./images/iso.jpg",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      icon: (
        <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      ),
      stats: "ISO 9001:2015",
      aos: "fade-right"
    },
    {
      id: 2,
      title: "Advanced Testing Lab",
      description: "State-of-the-art laboratory equipped with color matching cabinets, scuff testers, GSM testers, and precision micrometers.",
      image: "./images/quality1.jpeg",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      icon: (
        <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      stats: "24/7 Testing",
      aos: "fade-left"
    },
    {
      id: 3,
      title: "Hygiene & Safety",
      description: "Cleanroom protocols, regular sanitization, and strict hygiene standards maintained throughout production process.",
      image: "./images/quality2.jpg",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      icon: (
        <svg className="w-7 h-7 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: "100% Safe",
      aos: "fade-right"
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "Comprehensive inspection at every production stage with total quality checking of all incoming materials.",
      image: "./images/quality3.jpeg",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      icon: (
        <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: "99.8% Quality",
      aos: "fade-left"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
              Quality Standards
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Quality <span className="text-blue-600">Management</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ensuring excellence through certified standards and rigorous quality control
          </p>
        </div>

        {/* Quality Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {qualityCards.map((card) => (
            <div 
              key={card.id}
              data-aos={card.aos}
              data-aos-delay={card.id * 100}
              className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${card.bgColor}`}
            >
              <div className="flex flex-col lg:flex-row min-h-[320px]">
                {/* Image Section */}
                <div className="lg:w-1/2 h-48 lg:h-auto relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${card.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                      {card.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                  {/* Stat Badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 mb-4 w-fit shadow-sm">
                    {card.stats}
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                  
                  <div className="mt-6 pt-5 border-t border-gray-200/50">
                    <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityManagement;