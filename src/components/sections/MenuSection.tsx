"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '@/data/menu';
import styles from './MenuSection.module.css';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].title);

  const activeMenu = menuData.find(cat => cat.title === activeCategory);

  return (
    <section id="menu" className="section">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        
        <div className={styles.menuLayout}>
          {/* Categories Sidebar / Top Bar */}
          <div className={styles.categories}>
            {menuData.map((category) => (
              <button
                key={category.title}
                className={`${styles.categoryBtn} ${activeCategory === category.title ? styles.active : ''}`}
                onClick={() => setActiveCategory(category.title)}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className={styles.menuItems}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.grid}
              >
                {activeMenu?.items.map((item, index) => (
                  <motion.div 
                    key={item.name} 
                    className={styles.menuCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <div className={styles.cardHeader}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <div className={styles.priceLine}></div>
                      <span className={styles.itemPrice}>ZK {item.price}</span>
                    </div>
                    {item.description && (
                      <p className={styles.itemDesc}>{item.description}</p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
