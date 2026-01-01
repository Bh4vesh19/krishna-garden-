import { motion } from 'framer-motion';
import { Wifi, Car, UtensilsCrossed, Wind, Check } from 'lucide-react';
import './Hotel.css';

const rooms = [
    {
        id: 1,
        name: 'Deluxe Room',
        price: '₹2,500',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop',
        features: ['King Size Bed', 'City View', 'Free Breakfast']
    },
    {
        id: 2,
        name: 'Super Deluxe',
        price: '₹3,500',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop',
        features: ['King Size Bed', 'Garden View', 'Free Breakfast', 'Bathtub']
    },
    {
        id: 3,
        name: 'Family Suite',
        price: '₹5,000',
        image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop',
        features: ['2 King Beds', 'Living Area', 'Garden View', 'Minibar']
    }
];

const amenities = [
    { icon: <Wifi size={24} />, name: 'Free Wi-Fi' },
    { icon: <Car size={24} />, name: 'Free Parking' },
    { icon: <UtensilsCrossed size={24} />, name: 'Restaurant' },
    { icon: <Wind size={24} />, name: 'Air Conditioning' },
];

const Hotel = () => {
    return (
        <div className="hotel-page">
            <div className="page-header" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=2000&auto=format&fit=crop)' }}>
                <div className="header-overlay"></div>
                <div className="container header-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Stay in Comfort
                    </motion.h1>
                    <p>Relax and rejuvenate in our luxurious rooms.</p>
                </div>
            </div>

            <div className="section container">
                <div className="amenities-bar">
                    {amenities.map((item, index) => (
                        <div className="amenity-item" key={index}>
                            {item.icon}
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>

                <h2 className="section-title text-center">Our Rooms</h2>

                <div className="rooms-grid">
                    {rooms.map((room) => (
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="room-card"
                            key={room.id}
                        >
                            <div className="room-image">
                                <img src={room.image} alt={room.name} />
                            </div>
                            <div className="room-content">
                                <div className="room-header">
                                    <h3>{room.name}</h3>
                                    <span className="room-price">{room.price} <span className="per-night">/ night</span></span>
                                </div>
                                <ul className="room-features">
                                    {room.features.map((feature, i) => (
                                        <li key={i}><Check size={14} className="check-icon" /> {feature}</li>
                                    ))}
                                </ul>
                                <button className="btn btn-primary full-width">Book Now</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hotel;
