const Footer = ({ setActivePage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <img
              src="/images/printechlogo.jpeg"
              alt="Printech Logo"
              className="h-12 w-12 object-contain"
            />
              <div>
                <h3 className="text-xl font-bold">PRINTECH</h3>
                <p className="text-sm text-gray-400">Crafting Brand Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Modern label manufacturing with advanced technology, delivering precise and high-quality labelling solutions since 2024.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Products & Services', 'Technology', 'Contact'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActivePage(item.toLowerCase().replace(/ & /g, '').replace(/ /g, ''))}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Eastern Bypass, Thakur Nagar, Jaleshwari Bazar, Near Begraj Godown, Siliguri, Dist.- Jalpaiguri (W.B.), Pin – 734004</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+917478477611" className="hover:text-primary transition-colors">+91-7478477611</a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:printech@printech.ind.in" className="hover:text-primary transition-colors">printech@printech.ind.in</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Business Details</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <span className="text-gray-300 font-medium">GST:</span> 19ABDFP8723B1Z9
              </li>
              <li>
                <span className="text-gray-300 font-medium">Partner & GM:</span><br />
                Mr. Ishan Kumar Choudhary
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} PRINTECH. All rights reserved. | Crafting Brand Excellence Since 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
