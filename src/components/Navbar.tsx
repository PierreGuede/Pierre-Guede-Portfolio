
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: 'about', label: 'À propos' },
    { path: 'skills', label: 'Compétences' },
    { path: 'experience', label: 'Expérience' },
    { path: 'projects', label: 'Projets' },
    { path: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-[#00ff88]">
            PG
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={`/${path}`}
                className="text-white hover:text-[#00ff88] transition-colors duration-300 relative nav-link"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bottom-0 bg-[#0a192f] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={`/${path}`}
              className="text-white hover:text-[#00ff88] transition-colors duration-300 text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
