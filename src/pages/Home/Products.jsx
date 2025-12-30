import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const printingServices = [
    {
      type: "PRE-PRESS",
      title: "PRE-PRESS",
      description: "Designing, advanced colour matching, adaptation, typesetting.",
      image: "/images/image.jpeg",
      color: "#2972B7"
    },
    {
      type: "FLEXOGRAPHIC",
      title: "FLEXOGRAPHIC PRINTING",
      description: "Gallus ECS340 with exceptional quality & cost effective printing.",
      image: "/images/print3.jpeg",
      color: "#1E4E8C"
    },
    {
      type: "OFFSET",
      title: "OFFSET PRINTING",
      description: "Komori Lithrone HUV conventional and non-conventional sheet-fed offset.",
      image: "/images/print6.png",
      color: "#2972B7"
    },
    {
      type: "POST-PRESS",
      title: "POST-PRESS",
      description: "Aqueous & UV coating, embossing, hot foiling, wet & thermal lamination, book-making, CREO Smart Foiling Machine etc.",
      image: "/images/print4.jpeg",
      color: "#1E4E8C"
    }
  ];

  return (
    <section id="printing-services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] text-white text-sm font-semibold rounded-full">
              PRINTING SERVICES
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Printing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            State-of-the-art printing technologies for exceptional quality and precision
          </p>
        </div>

        {/* Printing Services Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {printingServices.map((service, index) => (
            <div
              key={index}
              className="group relative h-[350px] overflow-hidden rounded-xl cursor-pointer shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Full Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-700"></div>
              </div>

              {/* Blue Gradient Overlay - Slides from bottom */}
              <div className="
                absolute bottom-0 left-0 right-0
                bg-gradient-to-t from-[#2972B7] via-[#2972B7]/95 to-[#2972B7]/85
                h-16
                group-hover:h-full
                transition-all duration-500 ease-out
                overflow-hidden
              ">
                {/* Content Container */}
                <div className="
                  absolute inset-0
                  flex flex-col justify-end
                  p-4
                  transform translate-y-0
                  group-hover:-translate-y-4
                  transition-transform duration-500 ease-out
                ">
                  {/* Title (No Type Badge) */}
                  <h3 className="
                    text-lg font-bold text-white leading-tight mb-2
                    line-clamp-2
                    transition-all duration-300
                  ">
                    {service.title}
                  </h3>

                  {/* Description - Reveals on hover */}
                  <div className="
                    overflow-hidden
                    max-h-0
                    opacity-0
                    group-hover:max-h-40
                    group-hover:opacity-100
                    group-hover:mt-3
                    transition-all duration-500 ease-out
                  ">
                    <p className="
                      text-white/90 text-sm leading-relaxed mb-3
                    ">
                      {service.description}
                    </p>
                    
                    {/* Learn More Button */}
                    {/* <button className="
                      w-full py-2
                      text-white text-xs font-semibold uppercase tracking-wider
                      rounded-lg
                      transition-all duration-300
                      flex items-center justify-center gap-2
                      bg-white/20 backdrop-blur-sm
                      border border-white/40
                      hover:bg-white/30
                      hover:scale-[1.02]
                    ">
                      <span>Learn More</span>
                      <svg 
                        className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </div>

              {/* Color Glow on Hover */}
              <div className="
                absolute inset-0
                opacity-0
                group-hover:opacity-15
                transition-all duration-500
                pointer-events-none
              "
              style={{ 
                background: service.color === "#2972B7" 
                  ? "linear-gradient(135deg, #2972B7 0%, #1E4E8C 100%)" 
                  : "linear-gradient(135deg, #1E4E8C 0%, #2972B7 100%)"
              }}
              ></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 bg-gradient-to-r from-[#2972B7]/10 to-[#1E4E8C]/10 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] bg-clip-text text-transparent">
                4+
              </div>
              <div className="text-gray-600 mt-2">Printing Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-600 mt-2">Print Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] bg-clip-text text-transparent">
                24/7
              </div>
              <div className="text-gray-600 mt-2">Production</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-600 mt-2">Quality Checked</div>
            </div>
          </div>
        </div> */}

       
      </div>
    </section>
  );
};

export default Features;