import React from 'react';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import { COLORS } from '../utils/constants';

export default function AboutPage() {
  const teamMembers = [
    { name: 'Emily Richards', role: 'Lead Wedding Coordinator', image: '/images/team/emily.jpg' },
    { name: 'Michael Chen', role: 'Resort Manager', image: '/images/team/michael.jpg' },
    { name: 'Sarah Thompson', role: 'Event Design Specialist', image: '/images/team/sarah.jpg' }
  ];

  return (
    <div>
      <HeroSection 
        title="Our Story" 
        subtitle="Creating Magical Moments Since 2005"
        backgroundImage="/images/about-hero.jpg"
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
          maxWidth: '800px', 
          margin: '0 auto', 
          textAlign: 'center' 
        }}>
          <h2 style={{ marginBottom: '1rem' }}>
            Our Journey
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.6, 
            color: COLORS.charcoal 
          }}>
            Founded in 2005, our wedding resort has been dedicated to creating 
            extraordinary wedding experiences. We believe in turning dreams into 
            reality, crafting each celebration with personalized attention and 
            unparalleled elegance.
          </p>
        </div>
      </motion.section>

      <section style={{ 
        padding: '4rem', 
        backgroundColor: COLORS.softGray 
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '2rem' 
        }}>
          Meet Our Team
        </h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem' 
        }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{ 
                textAlign: 'center', 
                maxWidth: '250px' 
              }}
            >
              <img 
                src={member.image} 
                alt={member.name}
                style={{ 
                  width: '200px', 
                  height: '200px', 
                  borderRadius: '50%', 
                  objectFit: 'cover' 
                }}
              />
              <h3 style={{ marginTop: '1rem' }}>{member.name}</h3>
              <p style={{ color: COLORS.charcoal }}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}