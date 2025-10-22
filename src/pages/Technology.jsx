const Technology = () => {
  const equipment = [
    {
      title: '8-Colour All UV + IR Flexo Printing Machine',
      description: 'State-of-the-art printing technology delivering vibrant, durable, and high-quality prints with exceptional precision and color consistency.',
      features: [
        'Advanced UV curing technology for instant drying',
        'Infrared (IR) drying capabilities for enhanced durability',
        'Full 8-colour spectrum with superior color accuracy',
        'High-speed production up to 200 meters per minute',
        'Automated color management system'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: 'Fully Automatic Advanced Auto Inspection Machine',
      description: 'Cutting-edge quality control system ensuring 100% accuracy and flawlessness in every label with real-time monitoring.',
      features: [
        'Real-time high-definition defect detection',
        'Automated quality verification with AI algorithms',
        '100% inspection coverage at production speed',
        'Statistical process control integration',
        'Automatic rejection and reporting system'
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    }
  ];

  const capabilities = [
    {
      title: 'Precision Punching',
      description: 'Integrated hole punching for hanging labels and tags with micron-level accuracy',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      title: 'Advanced Die-Cutting',
      description: 'Custom shapes and sizes with precision cutting for unique label designs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
        </svg>
      )
    },
    {
      title: 'Cold Foiling',
      description: 'Premium metallic and holographic effects for brand distinction and luxury appeal',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Multi-Layer Lamination',
      description: 'Protective coatings enhancing durability against moisture, chemicals, and abrasion',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: 'Hologram Application',
      description: 'Advanced security features and visual effects for brand protection and appeal',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'Process Integration',
      description: 'Seamless combination of multiple finishing techniques in single production run',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const advantages = [
    'Faster production turnaround times (up to 70% faster)',
    'Consistent quality across all production batches',
    'Reduced material waste through precision engineering',
    'Enhanced color vibrancy with 8-color technology',
    'Greater design flexibility and customization options',
    'Superior durability with UV and IR curing',
    'Environmental efficiency with reduced energy consumption',
    'Cost-effective solutions through automation'
  ];

  return (
    <div className="">
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 overflow-hidden h-[400px] flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(41, 114, 183, 0.85), rgba(30, 78, 140, 0.85)), url('https://img.freepik.com/premium-photo/modern-printing-press-utilizing-advanced-ink-technologies-highquality-prints_1314467-203658.jpg?w=1060')"
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Technology & Innovation
          </h1>
          <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
            State-of-the-art facilities embodying the latest advancements in label manufacturing
          </p>
        </div>
      </section>

      {/* Advanced Equipment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Advanced Equipment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technology delivering exceptional quality and precision
            </p>
          </div>

          <div className="space-y-12">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] p-8 lg:p-12 text-white flex flex-col justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 border border-white/30">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{item.title}</h3>
                    <p className="text-white/90 text-lg leading-relaxed">{item.description}</p>
                  </div>

                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Key Features:</h4>
                    <ul className="space-y-4">
                      {item.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-lg leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Capabilities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Online Processing Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Integrated processes for efficient, high-quality label production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-xl flex items-center justify-center text-white mb-6">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Advantage Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The PRINTECH Technology Advantage
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                By continuously embracing cutting-edge technology and innovative processes, PRINTECH stands at the forefront of the label manufacturing industry. Our investment in advanced equipment and automation ensures we deliver unmatched quality, efficiency, and reliability in every project.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-[#2972B7]/5 to-[#1E4E8C]/5 rounded-2xl p-8 lg:p-12 border border-[#2972B7]/20">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-full mb-6 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Meets Precision</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our technology surpasses conventional standards, setting new benchmarks in the label manufacturing industry with unmatched precision and efficiency.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">Production Speed</span>
                      <span className="text-[#2972B7] font-bold">200 m/min</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] h-3 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">Quality Assurance</span>
                      <span className="text-[#2972B7] font-bold">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] h-3 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">Color Accuracy</span>
                      <span className="text-[#2972B7] font-bold">99.8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] h-3 rounded-full" style={{ width: '99%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Future of Label Manufacturing
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover how our advanced technology can transform your labelling needs into stunning, high-quality results that elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-[#2972B7] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </a>
              <a
                href="tel:+917478477611"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#2972B7] transition-all duration-300"
              >
                Call Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;