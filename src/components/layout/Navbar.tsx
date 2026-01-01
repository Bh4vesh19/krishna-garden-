import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Hotel', path: '/hotel' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Location', path: '/location' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <span className="logo-title">Krishna Garden</span>
          <span className="logo-subtitle">Hotel & Restaurant</span>
        </Link>

        {/* Desktop Menu */}
        <div className="nav-menu desktop-only">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="tel:+911234567890" className="btn btn-primary btn-sm">
            <Phone size={16} style={{ marginRight: '8px' }} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-only menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="mobile-nav-link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <a href="tel:+911234567890" className="btn btn-primary mobile-cta">
          Call Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
