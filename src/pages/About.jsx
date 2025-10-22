import React from "react";

const About = () => {
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

  const whyChoose = [
    {
      title: 'Industry Leaders',
      description: 'With our expertise and commitment to excellence, we have established ourselves as a leading player in the label manufacturing industry.'
    },
    {
      title: 'Customer-Centric Approach',
      description: 'We prioritize customer needs, delivering tailored solutions that meet specific requirements and exceed expectations.'
    },
    {
      title: 'Strategic Location',
      description: 'Our Siliguri-based operations enable us to effectively serve clients across India and beyond, capitalizing on the region\'s growing industrial significance.'
    }
  ];

  return (
    <div className="">
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 overflow-hidden h-[400px] flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(41, 114, 183, 0.8), rgba(30, 78, 140, 0.8)), url('https://img.freepik.com/premium-photo/modern-printing-press-utilizing-advanced-ink-technologies-highquality-prints_1314467-203658.jpg?w=1060')"
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">About PRINTECH</h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto animate-slide-up">
            Modern label manufacturing company committed to excellence, innovation, and reliability
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who Are We?</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  PRINTECH is a modern label manufacturing company located in Siliguri, West Bengal, established in 2024. Despite being a recent entrant in the industry, we are equipped with advanced technology that surpasses conventional standards.
                </p>
                <p>
                  Serving a wide range of sectors, our focus lies in delivering precise, high-quality labelling solutions. PRINTECH is committed to setting new benchmarks in reliability, efficiency, and innovation in the field of label production.
                </p>
                <p className="font-semibold text-[#2972B7] italic">
                  At PRINTECH, we believe every label tells a story—and we're here to help you tell yours, beautifully and boldly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-xl flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combining innovation, precision, and dedication to deliver excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2972B7]/5 to-[#9E2991]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose PRINTECH?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Excellence, innovation, and customer satisfaction at the core of everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            className="bg-cover bg-center rounded-2xl p-8 lg:p-16 text-white text-center relative overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(rgba(41, 114, 183, 0.9), rgba(30, 78, 140, 0.9)), url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Client Relations</h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 text-justify">
              At Printech, our clients are at the heart of everything we do. We believe in building long-term partnerships by understanding each client's unique requirements and delivering solutions that perfectly align with their vision. From concept to completion, our team works hand-in-hand with customers to ensure every detail is met with precision, quality, and care. We pride ourselves on timely deliveries, transparent communication, and personalized service that goes beyond expectations. Our dedication to client satisfaction is not just a promise—it is the driving force behind our growth, innovation, and trusted reputation in the label printing industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;