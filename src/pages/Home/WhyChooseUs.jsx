import React, { useEffect, useRef } from "react";
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Zap, 
  Globe,
  CheckCircle,
  TrendingUp
} from "lucide-react";
import { useInView, useMotionValue, useTransform, motion } from "framer-motion";

// CountUp Component for numbers
const CountUpNumber = ({ from, to, duration = 2, suffix = "" }) => {
  const ref = useRef(null);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      count.set(from);
      const startTime = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        const value = from + (to - from) * progress;
        count.set(value);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, count, from, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString() + (suffix ?? "");
      }
    });
    return () => unsubscribe();
  }, [rounded, suffix]);

  return <span ref={ref}>{from.toLocaleString() + suffix}</span>;
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Leaders",
      description: "Established expertise and commitment to excellence in label manufacturing with advanced technology solutions."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "State-of-the-art 8-colour UV+IR flexo printing with online capabilities for superior print quality and precision."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Stringent quality control measures with automatic inspection systems guaranteeing flawless label production."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer-Centric Approach",
      description: "Tailored solutions that meet specific requirements and exceed expectations with personalized service."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "Efficient production processes ensuring on-time delivery without compromising on quality standards."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Industry Expertise",
      description: "Serving diverse sectors including pharmaceuticals, FMCG, cosmetics, and industrial products with specialized solutions."
    }
  ];

  const stats = [
    { number: "8+", label: "Colour Printing", icon: <TrendingUp className="w-6 h-6" />, from: 0, to: 8, suffix: "+" },
    { number: "500+", label: "Clients Served", icon: <Users className="w-6 h-6" />, from: 0, to: 500, suffix: "+" },
    { number: "10+", label: "Industries", icon: <Globe className="w-6 h-6" />, from: 0, to: 10, suffix: "+" },
    { number: "100%", label: "Quality Checked", icon: <CheckCircle className="w-6 h-6" />, from: 0, to: 100, suffix: "%" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#2972B7]/10 relative overflow-hidden">
      {/* Simple background dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-[#2972B7] rounded-full"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-[#9E2991] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-[#2972B7] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-[#9E2991] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 font-serif">
            Why Choose PRINTECH?
          </h2>
          <div className="w-24 h-1 bg-[#2972B7] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what sets us apart in the label manufacturing industry and why businesses 
            trust us for their branding and packaging needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="text-[#2972B7] mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 font-serif">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className="text-[#2972B7] group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#2972B7] mb-2">
                  <CountUpNumber 
                    from={stat.from} 
                    to={stat.to} 
                    duration={2.5} 
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="space-y-6">
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ready to enhance your brand with premium label solutions? Partner with us for quality and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2972B7] hover:bg-[#1E4E8C] text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Get Quote
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#9E2991] text-[#9E2991] hover:bg-[#9E2991] hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Sales
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;