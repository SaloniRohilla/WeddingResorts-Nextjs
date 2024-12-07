import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../utils/constants';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        textAlign: 'center',
        maxWidth: '250px',
        padding: '1rem',
        margin: '1rem',
        backgroundColor: COLORS.white,
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ 
        backgroundColor: COLORS.blushPink, 
        borderRadius: '50%', 
        width: '80px', 
        height: '80px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: '0 auto 1rem' 
      }}>
        <Icon color={COLORS.white} size={40} />
      </div>
      
      <h3 style={{ 
        color: COLORS.charcoal, 
        marginBottom: '0.5rem' 
      }}>
        {title}
      </h3>
      
      <p style={{ 
        color: COLORS.charcoal, 
        opacity: 0.7 
      }}>
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;