import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../utils/constants';

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage = '/images/hero-bg.jpg',
  height = '80vh' 
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: COLORS.white,
        position: 'relative'
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1
      }} />
      
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        maxWidth: '800px', 
        padding: '0 2rem' 
      }}>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif'
          }}
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            fontSize: '1.2rem',
            marginBottom: '2rem'
          }}
        >
          {subtitle}
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button 
            style={{
              backgroundColor: COLORS.gold,
              color: COLORS.white,
              border: 'none',
              padding: '12px 24px',
              margin: '0 10px',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            View Packages
          </button>
          
          <button 
            style={{
              backgroundColor: 'transparent',
              color: COLORS.white,
              border: `2px solid ${COLORS.white}`,
              padding: '10px 22px',
              margin: '0 10px',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = COLORS.white;
              e.target.style.color = COLORS.charcoal;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = COLORS.white;
            }}
          >
            Schedule Tour
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;