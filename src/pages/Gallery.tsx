import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';

const galleryImages = [
    { id: 1, category: 'Restaurant', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800' },
    { id: 2, category: 'Hotel', src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800' },
    { id: 3, category: 'Garden', src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800' },
    { id: 4, category: 'Food', src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800' },
    { id: 5, category: 'Restaurant', src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800' },
    { id: 6, category: 'Hotel', src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800' },
    { id: 7, category: 'Food', src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800' },
    { id: 8, category: 'Restaurant', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800' },
    { id: 9, category: 'Garden', src: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=800' },
];

const categories = ['All', 'Restaurant', 'Hotel', 'Garden', 'Food'];

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const filteredImages = filter === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    return (
        <div className="gallery-page">
            <div className="section container">
                <h1 className="page-title text-center">Gallery</h1>
                <p className="page-subtitle text-center"> glimpses of our ambiance and offerings.</p>

                <div className="gallery-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="gallery-grid">
                    <AnimatePresence>
                        {filteredImages.map((img) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                key={img.id}
                                className="gallery-item"
                            >
                                <img src={img.src} alt={img.category} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span>{img.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Gallery;
