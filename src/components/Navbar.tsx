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
    { path: 'education', label: 'Éducation' },
    { path: 'projects', label: 'Projets' },
    { path: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed w-full bg-[#f7f4f1]/90 backdrop-blur-lg border-b border-[var(--cv-border)] z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-[var(--cv-accent-strong)]">
            PMG
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={`/${path}`}
                className="text-[var(--cv-text)] hover:text-[var(--cv-accent)] transition-colors duration-300 relative nav-link"
              >
                {label}
              </Link>
            ))}
            <a
              href="/CV_PIERRE_MAURIL_MAFOYA_GUEDE.pdf"
              download
              className="px-4 py-2 cv-button-outline rounded-md transition-colors duration-300"
            >
              Télécharger CV
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-[var(--cv-text)] p-2 focus:outline-none"
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
        className={`md:hidden fixed top-16 left-0 right-0 bottom-0  transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full '
        }`}
      >
        <div className="flex flex-col space-y-4 p-4 bg-[#f7f4f1] h-screen">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={`/${path}`}
              className="text-[var(--cv-text)] hover:text-[var(--cv-accent)] transition-colors duration-300 text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="/CV_PIERRE_MAURIL_MAFOYA_GUEDE.pdf"
            download
            className="text-[var(--cv-text)] cv-button-outline text-center rounded-md py-2 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Télécharger CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
