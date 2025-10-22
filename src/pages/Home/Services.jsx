import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Pill,
  Package,
  Barcode,
  Shield,
  Utensils,
  Palette,
  Sparkles,
  Eye
} from "lucide-react";

const ServiceCard = ({ title, description, icon: Icon, animation }) => {
  return (
    <div
      className="flex justify-center items-center"
      data-aos={animation}
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="group bg-white/90 backdrop-blur shadow-md hover:shadow-2xl rounded-2xl p-8 w-80 text-center cursor-pointer transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        {/* Icon with rotate animation on hover */}
        <div className="flex justify-center items-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center">
            <div className="text-[#2972B7] transition-transform duration-700 group-hover:rotate-[360deg] group-hover:scale-110">
              <Icon size={40} />
            </div>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-semibold mb-3 tracking-wide font-serif"
          style={{ color: "#2972B7", lineHeight: "1.4" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="leading-relaxed font-roboto text-gray-700"
          style={{ fontSize: "0.9375rem", lineHeight: "1.65" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="relative py-20 px-6 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(41,114,183,0.85), rgba(30,78,140,0.85)), url('https://img.freepik.com/premium-photo/modern-printing-press-utilizing-advanced-ink-technologies-highquality-prints_1314467-203658.jpg?w=1060')",
        backgroundAttachment: "fixed", // parallax effect
      }}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-14 relative z-10">
        <h2
          className="text-4xl font-bold text-center mb-3 tracking-tight font-serif text-white drop-shadow-lg"
          style={{ lineHeight: "1.2" }}
          data-aos="fade-up"
        >
          Our Products & Services
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-white"></div>
        <p className="text-center text-white/90 mt-4 text-lg max-w-2xl mx-auto" data-aos="fade-up">
          High-quality label solutions tailored to diverse industries and needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center relative z-10">
        {/* Left Column */}
        <ServiceCard
          title="Pharmaceutical Labels"
          description="Designed with precision and compliance to meet stringent industry standards"
          icon={Pill}
          animation="fade-right"
        />
        <ServiceCard
          title="Product Packaging Labels"
          description="Enhance your brand identity with vibrant, durable, and customized packaging labels"
          icon={Package}
          animation="fade-up"
        />
        <ServiceCard
          title="Barcode Labels"
          description="Reliable, scannable labels for inventory, logistics, and retail applications"
          icon={Barcode}
          animation="fade-left"
        />

        {/* Right Column */}
        <ServiceCard
          title="Security Labels"
          description="Tamper-evident and secure labels to safeguard product authenticity"
          icon={Shield}
          animation="fade-right"
        />
        <ServiceCard
          title="Food & Beverage Labels"
          description="Safe, attractive, and durable labels to highlight your products on shelves"
          icon={Utensils}
          animation="fade-up"
        />
        <ServiceCard
          title="Custom Labels"
          description="Fully personalized labels to match your unique branding and design requirements"
          icon={Palette}
          animation="fade-left"
        />
      </div>

      {/* Additional Services Row */}
      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30 group hover:bg-white/30 transition-all duration-500" data-aos="fade-up">
          <div className="flex justify-center mb-3">
            <div className="text-white group-hover:scale-110 transition-transform duration-500">
              <Sparkles size={32} />
            </div>
          </div>
          <h4 className="text-white font-semibold text-lg mb-2">Cosmetics & Toiletries Labels</h4>
          <p className="text-white/90 text-sm">Premium, resistant labels tailored for beauty and personal care products</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center border border-white/30 group hover:bg-white/30 transition-all duration-500" data-aos="fade-up">
          <div className="flex justify-center mb-3">
            <div className="text-white group-hover:scale-110 transition-transform duration-500">
              <Eye size={32} />
            </div>
          </div>
          <h4 className="text-white font-semibold text-lg mb-2">Transparent Labels</h4>
          <p className="text-white/90 text-sm">Sleek, no-label look that adds sophistication to any product</p>
        </div>
      </div>
    </div>
  );
};

export default Services;