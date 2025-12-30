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
      description: "TNV certified ISO 9001:2015 quality management system ensuring international standards compliance.",
      image: "./images/iso1.jpg",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      ),
      stats: "ISO 9001:2015",
      aos: "fade-right",
      badgeColor: "bg-blue-600 text-white",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Advanced Testing Lab",
      description: "Our laboratory features a color matching cabinet, scuff tester (up to 6 PSI), GSM tester, micrometers, and ink kitchen tools",
      image: "./images/print5.jpeg",
      bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      stats: "Quality Testing",
      aos: "fade-left",
      badgeColor: "bg-emerald-600 text-white",
      borderColor: "border-emerald-200"
    },
    {
      id: 3,
      title: "Hygiene & Safety",
      description: "A changing room is mandatory before entering the production area, ensuring cleanroom protocols and strict hygiene standards throughout production",
      image: "./images/quality2.jpg",
      bgColor: "bg-gradient-to-br from-violet-50 to-violet-100",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: "100% Safe",
      aos: "fade-right",
      badgeColor: "bg-violet-600 text-white",
      borderColor: "border-violet-200"
    },
    {
      id: 4,
      title: "Quality Assurance & Quality control",
      description: "Comprehensive inspection at every production stage with total quality checking, controlled raw material and finished goods storage, and regular QC ensuring all finished goods meet client specifications.",
      image: "./images/quality.jpeg",
      bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: "100% Quality",
      aos: "fade-left",
      badgeColor: "bg-amber-600 text-white",
      borderColor: "border-amber-200"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        {/* Header with Brand Emphasis */}
        <div className="text-center mb-14" data-aos="fade-up">
          {/* <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
              PRINTECH
            </h1>
            <p className="text-lg text-gray-600 font-medium">
              Crafting Brand Excellence
            </p>
          </div> */}
          
          <div className="inline-block mb-6">
            <span className="inline-block px-6 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wider uppercase">
              Quality Standards
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Quality <span className="text-blue-600">Management</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Ensuring excellence through certified standards and rigorous quality control
          </p>
        </div>

        {/* Quality Cards Grid - Enhanced Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {qualityCards.map((card) => (
            <div 
              key={card.id}
              data-aos={card.aos}
              data-aos-delay={card.id * 100}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${card.bgColor} border ${card.borderColor}`}
            >
              <div className="flex flex-col md:flex-row h-full min-h-[260px]">
                {/* Image Section - Wider */}
                <div className="md:w-1/2 h-52 md:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10"></div>
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=${card.id}`;
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-7 md:p-8 flex flex-col justify-center">
                  {/* Badge with Icon */}
                  <div className="mb-5">
                    <div className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-full ${card.badgeColor} font-semibold text-sm`}>
                      <div className="flex items-center justify-center">
                        {card.icon}
                      </div>
                      <span>{card.stats}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                    {card.description}
                  </p>
                  
                  {/* View Details Link */}
                  {/* <div className="pt-5 border-t border-gray-200/60">
                    <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-blue-700 transition-colors duration-300 group/link">
                      <span className="mr-2">View details</span>
                      <svg className="w-4 h-4 transform transition-transform group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-14" data-aos="fade-up" data-aos-delay="200">
          <button className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            View All Quality Standards
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default QualityManagement;