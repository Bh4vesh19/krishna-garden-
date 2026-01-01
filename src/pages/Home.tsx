import { motion } from 'framer-motion';
import { ArrowRight, Star, Coffee, Utensils, BedDouble } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000&auto=format&fit=crop)' }}></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-title"
                    >
                        A Sanctuary of <span className="text-accent">Taste & Comfort</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-subtitle"
                    >
                        Experience luxury dining and serene stays in the heart of Amet.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-actions"
                    >
                        <Link to="/booking" className="btn btn-primary btn-lg">Book a Table</Link>
                        <Link to="/location" className="btn btn-outline btn-lg">Get Directions</Link>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section intro-section">
                <div className="container">
                    <div className="intro-grid">
                        <div className="intro-text">
                            <h4 className="section-eyebrow">Welcome to Krishna Garden</h4>
                            <h2 className="section-title">Where Tradition Meets <br />Modern Hospitality</h2>
                            <p className="section-desc">
                                Nestled in the beautiful landscape of Amet, Rajasthan, Krishna Garden offers a perfect blend of delicious cuisine, comfortable stays, and a peaceful garden atmosphere. Whether you are here for a family dinner, a quick stopover, or a celebration, we ensure every moment is memorable.
                            </p>
                            <div className="highlights">
                                <div className="highlight-item">
                                    <Star className="highlight-icon" size={24} />
                                    <span>Premium Hospitality</span>
                                </div>
                                <div className="highlight-item">
                                    <Utensils className="highlight-icon" size={24} />
                                    <span>Authentic Flavors</span>
                                </div>
                            </div>
                            <Link to="/about" className="learn-more-link">
                                Discover More <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="intro-image">
                            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop" alt="Restaurant Interior" />
                            <div className="image-decoration"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Offerings</h2>
                        <p className="section-subtitle">Everything you need for a perfect visit</p>
                    </div>

                    <div className="services-grid">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="service-card"
                        >
                            <div className="service-icon-wrapper">
                                <Utensils size={32} />
                            </div>
                            <h3>Garden Restaurant</h3>
                            <p>Savor authentic Rajasthani and North Indian delicacies in our open-air garden or fine dining hall.</p>
                            <Link to="/restaurant" className="service-link">View Menu</Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="service-card"
                        >
                            <div className="service-icon-wrapper">
                                <BedDouble size={32} />
                            </div>
                            <h3>Luxury Stay</h3>
                            <p>Relax in our well-appointed rooms designed for comfort and tranquility after a long journey.</p>
                            <Link to="/hotel" className="service-link">Book a Room</Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="service-card"
                        >
                            <div className="service-icon-wrapper">
                                <Coffee size={32} />
                            </div>
                            <h3>Cafe & Snacks</h3>
                            <p>Enjoy freshly brewed coffee, refreshing beverages, and quick bites in a cozy setting.</p>
                            <Link to="/restaurant" className="service-link">Visit Cafe</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop)' }}></div>
                <div className="cta-overlay opacity-90"></div>
                <div className="container cta-content text-center">
                    <h2>Ready to Experience Krishna Garden?</h2>
                    <p>Visit us today in Amet for an unforgettable experience.</p>
                    <div className="cta-buttons">
                        <Link to="/location" className="btn btn-accent btn-lg">Plan Your Visit</Link>
                        <a href="tel:+919876543210" className="btn btn-outline btn-lg">Call for Reservation</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
