import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import { COLORS } from '../utils/constants';
import { Check } from 'lucide-react';

export default function ServicesPage() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const weddingPackages = [
    {
      name: 'Classic Elegance',
      price: '$5,999',
      features: [
        'Venue for 100 guests',
        'Basic floral arrangements',
        'Standard catering',
        'Day-of coordination'
      ]
    },
    {
      name: 'Luxury Experience',
      price: '$12,999',
      features: [
        'Venue for 200 guests',
        'Premium floral design',
        'Gourmet catering',
        'Full wedding planning',
        'Rehearsal dinner included'
      ]
    },
    {
      name: 'Royal Celebration',
      price: '$25,000',
      features: [
        'Venue for 300+ guests',
        'Custom floral design',
        'Top-tier catering',
        'Full-service wedding planning',
        'Accommodation for wedding party',
        'Videography and photography'
      ]
    }
  ];

  return (
    <div>
      <HeroSection 
        title="Our Wedding Packages" 
        subtitle="Tailored Experiences for Your Perfect Day"
        backgroundImage="/images/services-hero.jpg"
        height="60vh"
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ 
          padding: '4rem',
          backgroundColor: COLORS.white 
        }}
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem' 
        }}>
          {weddingPackages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPackage(pkg)}
              style={{ 
                width: '300px',
                padding: '2rem',
                border: `2px solid ${COLORS.blushPink}`,
                borderRadius: '10px',
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: selectedPackage === pkg ? COLORS.blushPink : COLORS.white,
                color: selectedPackage === pkg ? COLORS.white : COLORS.charcoal
              }}
            >
              <h3>{pkg.name}</h3>
              <p style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold',
                margin: '1rem 0' 
              }}>
                {pkg.price}
              </p>
              {pkg.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    margin: '0.5rem 0' 
                  }}
                >
                  <Check 
                    color={selectedPackage === pkg ? COLORS.white : COLORS.blushPink} 
                    style={{ marginRight: '0.5rem' }} 
                  />
                  {feature}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}