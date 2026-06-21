"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './InfoSection.module.css';

export default function InfoSection() {
  return (
    <section id="contact" className={`section ${styles.infoSection}`}>
      <div className="container">
        <h2 className="section-title">Visit Us</h2>
        
        <div className={styles.grid}>
          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.iconWrapper}>
              <MapPin size={32} />
            </div>
            <h3>Location</h3>
            <p>4622-2 Beit Road, Addis Ababa Drive<br/>Near Standard Chartered Bank<br/>Lusaka, Zambia</p>
          </motion.div>

          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.iconWrapper}>
              <Phone size={32} />
            </div>
            <h3>Reservations</h3>
            <p>Call us to book your table</p>
            <a href="tel:+260771036277" className={styles.contactLink}>+260 771036277</a>
          </motion.div>

          <motion.div 
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.iconWrapper}>
              <Mail size={32} />
            </div>
            <h3>Email Us</h3>
            <p>For large events & catering</p>
            <a href="mailto:mosaic2503@gmail.com" className={styles.contactLink}>mosaic2503@gmail.com</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
