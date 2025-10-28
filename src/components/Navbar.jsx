import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Info,
  FolderOpen,
  Users,
  Cpu,
  Beaker
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'about', label: 'About Us', icon: Info, path: '/about' },
    { id: 'products', label: 'Products & Services', icon: FolderOpen, path: '/products' },
    { id: 'technology', label: 'Technology', icon: Cpu, path: '/technology' },
    { id: 'printkem', label: 'Printkem', icon: Beaker, path: '/printkem' },
    { id: 'contact', label: 'Contact', icon: Users, path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group transition-transform duration-300 hover:scale-105" 
            onClick={() => handleNavigation('/')}
          >
            <img
              src="/images/printechlogo.jpeg"
              alt="Printech Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-[#A03194]' : 'text-white'
              }`}>
                PRINTECH
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Crafting Brand Excellence
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`relative flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'text-[#A03194]'
                      : isScrolled
                      ? 'text-gray-700 hover:text-[#A03194]'
                      : 'text-white hover:text-[#A03194]'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {active && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A03194] rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-transform duration-200 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 shadow-md mt-4"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.path)}
                      className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        active
                          ? 'text-[#A03194] bg-gray-100'
                          : 'text-gray-700 hover:text-[#A03194] hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;