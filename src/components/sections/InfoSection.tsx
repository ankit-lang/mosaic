"use client";

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './InfoSection.module.css';
import MagicBento from '@/components/react-bits/MagicBento';

export default function InfoSection() {
  const infoCards = [
    {
      label: 'Location',
      title: 'Our Restaurant',
      description: '4622-2 Beit Road, Addis Ababa Drive. Near Standard Chartered Bank, Lusaka, Zambia',
      color: '#120F17'
    },
    {
      label: 'Reservations',
      title: '+260 771036277',
      description: 'Call us to book your table for an exclusive dining experience.',
      color: '#120F17'
    },
    {
      label: 'Email Us',
      title: 'mosaic2503@gmail.com',
      description: 'For large events & catering, drop us an email.',
      color: '#120F17'
    }
  ];

  return (
    <section id="contact" className={`section ${styles.infoSection}`}>
      <div className="container">
        <h2 className="section-title">Visit Us</h2>
        
        <div style={{ marginTop: '3rem' }}>
          <MagicBento 
            cards={infoCards}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="212, 175, 55" // Using the gold color rgb
          />
        </div>
      </div>
    </section>
  );
}
