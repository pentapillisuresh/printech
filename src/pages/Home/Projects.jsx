import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';

const items = [
  {
    title: "8-Colour Flexo Printing Technology",
    desc: "Implementation of advanced 8-colour UV+IR flexo printing with online punching, die-cutting, cold foiling, lamination, and hologram application capabilities.",
    img: "./images/one.jpeg",
  },
  {
    title: "Automated Quality Control System",
    desc: "Deployment of fully automatic advanced auto inspection machines ensuring 100% accuracy and flawlessness in every label produced.",
    img: "./images/two.jpeg",
  },
  {
    title: "Pharmaceutical Compliance Initiative",
    desc: "Development of specialized labeling solutions meeting stringent pharmaceutical industry standards and regulatory requirements.",
    img: "./images/three.jpeg",
  }
];

const Projects = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2
            className="text-3xl md:text-4xl font-light text-gray-800 leading-tight mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: "Georgia, serif" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Technology & Innovation Projects
          </h2>
          <div 
            className="w-24 h-1 bg-[#2972B7] mx-auto rounded-full"
            data-aos="zoom-in"
            data-aos-delay="300"
          ></div>
          <p 
            className="text-gray-600 text-lg font-light max-w-2xl mx-auto mt-6 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Cutting-edge projects and technological implementations that set new benchmarks in label manufacturing excellence
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical center line */}
          <div 
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2972B7]/20 via-[#2972B7] to-[#2972B7]/20"
            data-aos="fade-in"
            data-aos-delay="400"
          />

          {/* Items */}
          <div className="space-y-24">
            {items.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col lg:flex-row items-center gap-12 ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image side */}
                  <div 
                    className="w-full lg:w-5/12 relative"
                    data-aos={isEven ? "fade-right" : "fade-left"}
                    data-aos-delay={100 + (idx * 200)}
                    data-aos-duration="1000"
                  >
                    <div className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-72 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Timeline dot - Fixed positioning */}
                  <div 
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10"
                    style={{ top: '50%' }}
                    data-aos="zoom-in"
                    data-aos-delay={300 + (idx * 200)}
                  >
                    <div className="relative">
                      <div className="w-6 h-6 rounded-full bg-[#2972B7] border-4 border-white shadow-lg"></div>
                      <div className="absolute inset-0 w-6 h-6 rounded-full bg-[#2972B7]/30 animate-ping"></div>
                    </div>
                  </div>

                  {/* Text side */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      isEven ? "lg:pr-4 lg:pl-16" : "lg:pl-4 lg:pr-16"
                    }`}
                    data-aos={isEven ? "fade-left" : "fade-right"}
                    data-aos-delay={200 + (idx * 200)}
                    data-aos-duration="1000"
                  >
                    <div className="space-y-6">
                      {/* Title */}
                      <div className="relative">
                        <h3
                          className="text-2xl lg:text-3xl font-light leading-tight"
                          style={{
                            fontFamily: "Georgia, serif",
                            color: "#2972B7",
                          }}
                          data-aos="fade-up"
                          data-aos-delay={300 + (idx * 200)}
                        >
                          {item.title}
                        </h3>
                        <div 
                          className="w-12 h-0.5 bg-[#2972B7] mt-3 rounded-full"
                          data-aos="slide-right"
                          data-aos-delay={400 + (idx * 200)}
                        ></div>
                      </div>

                      {/* Description */}
                      <p
                        className="text-base lg:text-lg font-light max-w-md text-justify"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          lineHeight: "1.75",
                          color: "#455371",
                        }}
                        data-aos="fade-up"
                        data-aos-delay={450 + (idx * 200)}
                      >
                        {item.desc}
                      </p>

                      {/* Learn more link */}
                      <div 
                        className="pt-2"
                        data-aos="fade-up"
                        data-aos-delay={500 + (idx * 200)}
                      >
                        <button className="text-[#2972B7] hover:text-[#1E4E8C] font-medium text-sm uppercase tracking-wider hover:tracking-widest transition-all duration-300 group">
                          Case Study
                          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div 
          className="text-center mt-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="space-y-6">
            <p 
              className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Discover how our innovative projects and technological advancements are revolutionizing the label manufacturing industry.
            </p>
            <button
              className="group relative bg-[#2972B7] hover:bg-[#1E4E8C] text-white px-10 py-4 rounded-full font-medium text-base tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <span onClick={() => navigate("/projects")} className="relative z-10">View All Projects</span>
              <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;