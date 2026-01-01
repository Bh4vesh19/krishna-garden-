import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h2 className="footer-logo">Krishna Garden</h2>
                    <p className="footer-tagline">Experience the essence of Indian hospitality in Amet.</p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                        <a href="#" className="social-icon"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/restaurant">Restaurant</Link></li>
                        <li><Link to="/hotel">Hotel Stay</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/location">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <div className="contact-item">
                        <MapPin size={18} className="contact-icon" />
                        <span>Near Railway Station, Amet, Rajasthan, India</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={18} className="contact-icon" />
                        <span>+91 98765 43210</span>
                    </div>
                    <div className="contact-item">
                        <Mail size={18} className="contact-icon" />
                        <span>info@krishnagarden.com</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Krishna Garden Hotel. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
