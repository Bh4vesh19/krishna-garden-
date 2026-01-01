import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Location.css';

const Location = () => {
    return (
        <div className="location-page">
            <div className="section container">
                <h1 className="page-title text-center">Contact & Location</h1>
                <p className="page-subtitle text-center">We'd love to hear from you. Get in touch with us.</p>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-card">
                            <h3>Contact Details</h3>
                            <div className="info-item">
                                <MapPin className="info-icon" />
                                <div>
                                    <h4>Address</h4>
                                    <p>Near Railway Station, Amet,<br />Rajasthan 313332, India</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <Phone className="info-icon" />
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 98765 43210</p>
                                    <p>+91 12345 67890</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <Mail className="info-icon" />
                                <div>
                                    <h4>Email</h4>
                                    <p>info@krishnagarden.com</p>
                                    <p>bookings@krishnagarden.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <Clock className="info-icon" />
                                <div>
                                    <h4>Opening Hours</h4>
                                    <p>Restaurant: 11:00 AM - 11:00 PM</p>
                                    <p>Hotel Check-in: 12:00 PM</p>
                                </div>
                            </div>

                            <div className="social-connect">
                                <h4>Follow Us</h4>
                                {/* Social icons would go here */}
                            </div>
                        </div>

                        <form className="contact-form-main" onSubmit={(e) => e.preventDefault()}>
                            <h3>Send us a Message</h3>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea rows={4} placeholder="Your Message" required></textarea>
                            </div>
                            <button className="btn btn-primary">Send Message</button>
                        </form>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14467.575677846566!2d73.92956275!3d25.3086445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39686ae4800263c3%3A0x13380026323423!2sAmet%2C%20Rajasthan%20313332!5e0!3m2!1sen!2sin!4v1709664560395!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
