const Products = () => {
  const products = [
   
    {
      title: 'Chromo Art Paper Label',
      description: 'High-quality chromo art paper labels with excellent printability and vibrant color reproduction for premium product presentation.',
      features: ['Premium art paper quality', 'Vibrant color printing', 'Excellent ink adhesion', 'Smooth surface finish'],
      backgroundImage: './images/product2.jpeg',
      applications: ['Pharmaceutical Syrups', 'Vitamin Supplements', 'Healthcare Products', 'Liquid Medications']
    },
    {
      title: 'FMCG Labels',
      description: 'Durable and attractive labels for Fast-Moving Consumer Goods with barcode integration and retail-ready features.',
      features: ['Retail barcode compatible', 'Scratch-resistant surface', 'Moisture protection', 'Quick application'],
      backgroundImage: './images/product3.jpeg',
      applications: ['Consumer Packaged Goods', 'Retail Products', 'Household Items', 'Personal Care']
    },
    {
      title: 'Metallic Labels',
      description: 'Premium metallic finish labels that add luxury and visual appeal to your products with sophisticated branding.',
      features: ['Metallic foil effects', 'Premium appearance', 'Enhanced brand perception', 'Multiple finish options'],
      backgroundImage: './images/product4.jpeg',
      applications: ['Premium Beverages', 'Cosmetics', 'Gift Items', 'Special Editions']
    },
    {
      title: 'Transparent Labels',
      description: 'Clear labels that create a "no-label" look, perfect for showcasing product color and maintaining brand aesthetics.',
      features: ['Crystal clear material', 'Invisible border effect', 'Strong adhesive', 'Bubble-free application'],
      backgroundImage: './images/product5.jpeg',
      applications: ['Beverage Bottles', 'Cosmetic Containers', 'Glass Products', 'Clear Packaging']
    },
     {
      title: 'Cut Label & Sheet Form Label',
      description: 'Precision-cut labels available in both sheet form and individual cuts. Ideal for various packaging applications with clean edges and easy application.',
      features: ['Precision die-cutting', 'Multiple shape options', 'Easy peel-and-apply', 'Sheet format for bulk handling'],
      backgroundImage: './images/product1.jpeg',
      applications: ['Pharmaceutical Packaging', 'Consumer Goods', 'Food Products', 'Industrial Items']
    },
    {
      title: 'Foil Stamping Labels',
      description: 'Elegant foil-stamped labels with metallic accents for premium branding and enhanced visual impact.',
      features: ['Hot/Cold foil stamping', 'Multiple foil colors', 'Precise registration', 'Luxury finish'],
      backgroundImage: './images/product6.jpeg',
      applications: ['Luxury Products', 'Alcohol Beverages', 'Premium Cosmetics', 'Special Packaging']
    },
    {
      title: 'PP White Labels',
      description: 'Polypropylene white labels with excellent durability and resistance to moisture, chemicals, and tearing.',
      features: ['Water-resistant material', 'Chemical resistance', 'Durable surface', 'Excellent print quality'],
      backgroundImage: './images/product7.jpeg',
      applications: ['Food & Beverage', 'Household Chemicals', 'Industrial Products', 'Outdoor Use']
    },
    {
      title: 'Cosmetics Labels',
      description: 'Elegant and sophisticated labels specifically designed for cosmetic and personal care products.',
      features: ['Premium finishes', 'Luxury materials', 'Fragrance-resistant', 'Moisture-proof'],
      backgroundImage: './images/product8.jpg',
      applications: ['Skincare Products', 'Makeup Items', 'Hair Care', 'Fragrance Bottles']
    },
    {
      title: 'Alcohol Labels',
      description: 'Specialized labels for alcoholic beverages with regulatory compliance and premium aesthetic appeal.',
      features: ['Alcohol-resistant adhesive', 'Regulatory information panels', 'Premium appearance', 'Moisture resistance'],
      backgroundImage: './images/product9.jpeg',
      applications: ['Liquor Bottles', 'Beer Labels', 'Wine Bottles', 'Premium Spirits']
    }
  ];

  const capabilities = [
    {
      name: 'Precision Die-Cutting',
      description: 'Custom shapes with micron-level accuracy for perfect fit',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
    },
    {
      name: 'Multi-Color Printing',
      description: 'Vibrant 8-color printing technology',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
    },
    {
      name: 'Foil Stamping',
      description: 'Hot and cold foil applications',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    },
    {
      name: 'Lamination',
      description: 'Protective layers for enhanced durability',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      name: 'UV Coating',
      description: 'High-gloss protective finish',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      name: 'Barcode Printing',
      description: 'High-precision scannable codes',
      icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
    },
    {
      name: 'Sequential Numbering',
      description: 'Automated batch coding',
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
    },
    {
      name: 'Quality Inspection',
      description: '100% automated optical verification',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
    <section
  className="relative bg-cover bg-center bg-no-repeat text-white py-24 overflow-hidden min-h-[600px] flex items-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(41, 114, 183, 0.88), rgba(30, 78, 140, 0.88)), url('./images/bannerimage.png')"
  }}
>
  <div className="absolute inset-0">
    <div className="absolute top-1/4 -right-20 w-80 h-80 bg-white rounded-full filter blur-3xl opacity-10"></div>
    <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-white rounded-full filter blur-3xl opacity-10"></div>
  </div>
  <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
    <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight">
      Professional Label Solutions
    </h1>
    <p className="text-2xl text-center text-white/95 max-w-4xl mx-auto mb-8 leading-relaxed">
      Custom Labels for Pharmaceuticals, FMCG, Beverages, Cosmetics & More
    </p>
    <div className="flex justify-center space-x-4">
      <a
        href="/contact"
        className="bg-white text-[#2972B7] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
      >
        Get Custom Quote
      </a>
      <a
        href="#products"
        className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#2972B7] transition-all duration-300"
      >
        View Products
      </a>
    </div>
  </div>
</section>


      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Label Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of label solutions designed for various industries and applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 overflow-hidden flex flex-col h-full"
              >
                {/* Enhanced Image Section */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.backgroundImage}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTI1SDE1ME0xMDAgMTAwSDE1ME0xMDAgMTUwSDE1ME0yMDAgMTI1SDI1ME0yMDAgMTAwSDI1ME0yMDAgMTUwSDI1ME0zMDAgMTI1SDM1ME0zMDAgMTAwSDM1ME0zMDAgMTUwSDM1MCIgc3Ryb2tlPSIjOERBOUI2IiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-1">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                      <svg className="w-4 h-4 text-[#2972B7] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Key Features:
                    </h4>
                    <ul className="text-gray-700 text-xs space-y-1">
                      {product.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <svg className="w-3 h-3 text-[#2972B7] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                      <svg className="w-4 h-4 text-[#2972B7] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Applications:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app, aIndex) => (
                        <span 
                          key={aIndex} 
                          className="bg-[#2972B7]/10 text-[#2972B7] border border-[#2972B7]/20 px-2 py-1 rounded text-xs hover:bg-[#2972B7] hover:text-white transition-colors duration-200"
                        >
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

      {/* Capabilities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Manufacturing Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced printing and finishing technologies for superior label quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:border-[#2972B7] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={capability.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">{capability.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Commitment</h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                We maintain strict quality control measures throughout the manufacturing process to ensure every label meets the highest standards of excellence.
              </p>
              <div className="space-y-4">
                {[
                  'ISO Certified Manufacturing',
                  'Raw Material Quality Checks',
                  'In-process Quality Control',
                  'Final Product Inspection',
                  'Batch Consistency Assurance',
                  'Customer Specification Adherence'
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
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/80">Quality Acceptance</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">8-Color</div>
                <div className="text-white/80">Printing Capacity</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Production</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">Satisfied Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 lg:p-16 border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2972B7] opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2972B7] opacity-5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 relative z-10">
              Need Custom Labels?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto relative z-10">
              Contact us for personalized label solutions that meet your specific requirements and industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#2972B7] to-[#1E4E8C] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Get Quote
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