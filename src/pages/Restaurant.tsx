import { useState } from 'react';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Leaf } from 'lucide-react';
import './Restaurant.css';

const menuCategories = [
    { id: 'starters', name: 'Starters', icon: <Utensils size={18} /> },
    { id: 'main', name: 'Main Course', icon: <Leaf size={18} /> },
    { id: 'cafe', name: 'Cafe & Beverages', icon: <Coffee size={18} /> },
];

const menuItems = {
    starters: [
        { name: 'Paneer Tikka', price: '₹280', desc: 'Cottage cheese marinated in indian spices and grilled.' },
        { name: 'Hara Bhara Kebab', price: '₹240', desc: 'Spinach and green pea patties, deep fried.' },
        { name: 'Crispy Corn', price: '₹220', desc: 'Sweet corn kernels fried and tossed with spices.' },
        { name: 'Veg Manchurian', price: '₹200', desc: 'Vegetable dumplings in spicy chinese sauce.' },
    ],
    main: [
        { name: 'Paneer Butter Masala', price: '₹320', desc: 'Cottage cheese in rich tomato butter gravy.' },
        { name: 'Kaju Curry', price: '₹350', desc: 'Cashew nuts cooked in yellow gravy.' },
        { name: 'Dal Makhani', price: '₹260', desc: 'Black lentils cooked overnight with cream and butter.' },
        { name: 'Veg Jaipuri', price: '₹280', desc: 'Mixed vegetables cooked in spicy jaipuri style gravy.' },
        { name: 'Butter Naan', price: '₹60', desc: 'Traditional tandoori bread with butter.' },
        { name: 'Jeera Rice', price: '₹180', desc: 'Basmati rice tempered with cumin seeds.' },
    ],
    cafe: [
        { name: 'Cold Coffee', price: '₹150', desc: 'Chilled coffee with ice cream.' },
        { name: 'Masala Chai', price: '₹40', desc: 'Traditional indian spiced tea.' },
        { name: 'Club Sandwich', price: '₹180', desc: 'Double decker sandwich with veggies and cheese.' },
        { name: 'French Fries', price: '₹120', desc: 'Classic salted crispy fries.' },
    ]
};

const Restaurant = () => {
    const [activeCategory, setActiveCategory] = useState('starters');

    return (
        <div className="restaurant-page">
            <div className="page-header" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop)' }}>
                <div className="header-overlay"></div>
                <div className="container header-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Dining at Krishna Garden
                    </motion.h1>
                    <p>A culinary journey through authentic flavors.</p>
                </div>
            </div>

            <div className="section container">
                <div className="menu-tabs">
                    {menuCategories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`menu-tab ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.icon}
                            <span>{cat.name}</span>
                        </button>
                    ))}
                </div>

                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="menu-grid"
                >
                    {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                        <div className="menu-card" key={index}>
                            <div className="menu-card-header">
                                <h3>{item.name}</h3>
                                <span className="price">{item.price}</span>
                            </div>
                            <p className="menu-desc">{item.desc}</p>
                            <button className="btn-add">+</button>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Reservation Section */}
            <div className="section bg-off-white">
                <div className="container reservation-container">
                    <div className="reservation-text">
                        <h2>Book Your Table</h2>
                        <p>Avoid the wait. Reserve your spot for a perfect dining experience.</p>
                    </div>

                    <form className="reservation-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group grid-2">
                            <input type="tel" placeholder="Phone Number" required />
                            <input type="number" placeholder="Guests" min="1" max="20" required />
                        </div>
                        <div className="form-group grid-2">
                            <input type="date" required />
                            <input type="time" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Confirm Reservation</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
