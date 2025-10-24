const Products = () => {
  const products = [
    {
      title: 'Pharmaceutical Labels',
      description: 'GMP-compliant labels with precise dosing information, batch coding, and tamper-evident features. Ideal for medicine bottles, blister packs, and medical device packaging with strict regulatory compliance.',
      features: ['Compliant with FDA & DCGI regulations', 'Tamper-evident security features', 'Chemical & moisture resistant', 'Clear batch & expiry printing'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      applications: ['Medicine Bottles', 'Blister Packs', 'Medical Devices', 'Clinical Trials']
    },
    {
      title: 'Product Packaging Labels',
      description: 'High-impact branding labels that enhance product visibility and consumer appeal. Perfect for retail packaging with vibrant colors and durable finishes.',
      features: ['8-color vibrant printing', 'UV-resistant inks', 'Scratch-resistant coating', 'Custom shapes & sizes'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600',
      applications: ['Retail Products', 'Consumer Goods', 'Electronics', 'Gift Items']
    },
    {
      title: 'Barcode & QR Labels',
      description: 'High-precision scannable labels with superior print quality for accurate inventory tracking and product authentication across supply chains.',
      features: ['100% scannable guarantee', 'Thermal transfer printing', 'Sequential numbering', 'Custom data formats'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      applications: ['Inventory Management', 'Retail Pricing', 'Asset Tracking', 'Logistics']
    },
    {
      title: 'Security Labels',
      description: 'Advanced anti-counterfeit solutions featuring holograms, tamper-evidence, and track-and-trace technologies for brand protection.',
      features: ['Holographic foiling', 'Void patterns on removal', 'Serialized tracking', 'UV invisible inks'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'from-red-500 to-red-600',
      applications: ['Brand Protection', 'Document Security', 'High-value Products', 'Government Use']
    },
    {
      title: 'Custom Labels',
      description: 'Bespoke labeling solutions tailored to your unique requirements, from unique shapes to special materials and finishes.',
      features: ['Unlimited design options', 'Special material selection', 'Unique die-cut shapes', 'Premium finishes'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: 'from-indigo-500 to-indigo-600',
      applications: ['Limited Editions', 'Premium Brands', 'Special Events', 'Product Launches']
    },
    {
      title: 'Food & Beverage Labels',
      description: 'FDA-approved labels designed for food safety with moisture resistance and compliance with nutritional labeling requirements.',
      features: ['Food-grade adhesives', 'Freezer & microwave safe', 'Moisture resistant', 'Nutrition facts compliant'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600',
      applications: ['Beverage Bottles', 'Food Packaging', 'Dairy Products', 'Frozen Foods']
    },
    {
      title: 'Industrial Labels',
      description: 'Durable labels engineered to withstand harsh industrial environments including extreme temperatures, chemicals, and outdoor exposure.',
      features: ['Chemical resistant', 'High temperature tolerant', 'Weatherproof', 'Abrasion resistant'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'from-gray-500 to-gray-600',
      applications: ['Machinery', 'Electrical Equipment', 'Automotive', 'Construction']
    },
    {
      title: 'Cosmetic & Personal Care Labels',
      description: 'Premium labels with luxurious finishes for beauty products, featuring metallic effects, embossing, and elegant designs.',
      features: ['Metallic foiling', 'Embossing/debossing', 'Soft-touch coating', 'Transparent variants'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'from-pink-500 to-pink-600',
      applications: ['Skincare', 'Makeup', 'Hair Care', 'Fragrances']
    }
  ];

  const capabilities = [
    {
      name: 'Precision Die-Cutting',
      description: 'Custom shapes with micron-level accuracy'
    },
    {
      name: 'Cold Foiling',
      description: 'Metallic effects without heat application'
    },
    {
      name: 'Multi-layer Lamination',
      description: 'Enhanced durability and protection'
    },
    {
      name: 'Hologram Application',
      description: 'Advanced security features'
    },
    {
      name: 'UV Coating',
      description: 'Superior gloss and protection'
    },
    {
      name: 'Embossing & Debossing',
      description: '3D tactile effects'
    },
    {
      name: 'Spot Varnishing',
      description: 'Selective glossy finishes'
    },
    {
      name: 'Sequential Numbering',
      description: 'Automated serialization'
    }
  ];

  const industries = [
    { name: 'Pharmaceutical', count: '150+' },
    { name: 'FMCG & Retail', count: '200+' },
    { name: 'Food & Beverage', count: '120+' },
    { name: 'Cosmetics', count: '80+' },
    { name: 'Industrial', count: '90+' },
    { name: 'Logistics', count: '60+' }
  ];

  return (
    <div className="">
      {/* Hero Section with Label Manufacturing Background */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat text-white py-20 overflow-hidden h-[500px] flex items-center"
        style={{
          backgroundImage: "linear-gradient(rgba(41, 114, 183, 0.88), rgba(30, 78, 140, 0.88)), url('https://img.freepik.com/premium-photo/modern-printing-press-utilizing-advanced-ink-technologies-highquality-prints_1314467-203658.jpg?w=1060')"
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-20 w-80 h-80 bg-white rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-white rounded-full filter blur-3xl opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight">
            Premium Label Solutions
          </h1>
          <p className="text-2xl text-center text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
            Engineered for Excellence Across Every Industry
          </p>
       
        </div>
      </section>

      {/* Industries We Serve */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies across diverse sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                <div className="text-2xl font-bold text-[#2972B7] mb-2">{industry.count}</div>
                <div className="text-gray-900 font-semibold">{industry.name}</div>
                <div className="text-gray-500 text-sm mt-2">Clients</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Product Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive labeling solutions designed to meet the highest standards of quality, compliance, and visual appeal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 group"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#2972B7] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="text-gray-600 text-xs space-y-1">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center">
                          <svg className="w-3 h-3 text-[#2972B7] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app, aIndex) => (
                        <span key={aIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Manufacturing Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art technology for unparalleled precision and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center border border-gray-200 hover:border-[#2972B7] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{capability.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Uncompromising Quality Standards</h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Every label undergoes rigorous quality checks at multiple stages to ensure perfection. Our automated inspection systems guarantee 100% defect-free delivery.
              </p>
              <div className="space-y-4">
                {[
                  'ISO 9001:2015 Certified Processes',
                  '100% Automated Optical Inspection',
                  'Raw Material Quality Verification',
                  'Final Product Quality Audit',
                  'Batch Consistency Monitoring',
                  'Customer Specification Compliance'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/95">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">99.95%</div>
                <div className="text-white/80">Quality Acceptance Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">0.01mm</div>
                <div className="text-white/80">Printing Precision</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">8-Color</div>
                <div className="text-white/80">Printing Technology</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Production Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 lg:p-16 border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Product Labeling?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and create labeling solutions that elevate your brand and meet your exact specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Get Custom Quote
              </a>
              <a
                href="tel:+917478477611"
                className="inline-flex items-center justify-center border-2 border-[#2972B7] text-[#2972B7] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#2972B7] hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call +91-7478477611
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;