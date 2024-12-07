import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { COLORS } from '../utils/constants';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <section style={{
      backgroundColor: COLORS.softGray,
      padding: '4rem',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '2rem' }}>
        What Our Couples Say
      </h2>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        gap: '1rem'
      }}>
        <button 
          onClick={prevTestimonial}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '2rem' 
          }}
        >
          ←
        </button>

        <AnimatePresence mode='wait'>
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            style={{ 
              maxWidth: '600px', 
              padding: '1rem' 
            }}
          >
            <p style={{ 
              fontSize: '1.2rem', 
              fontStyle: 'italic',
              marginBottom: '1rem' 
            }}>
              "{testimonial.quote}"
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginBottom: '0.5rem' 
            }}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star 
                  key={i} 
                  color={COLORS.gold} 
                  fill={COLORS.gold} 
                />
              ))}
            </div>
            
            <p style={{ 
              fontWeight: 'bold', 
              color: COLORS.charcoal 
            }}>
              - {testimonial.author}
            </p>
          </motion.div>
        </AnimatePresence>

        <button 
          onClick={nextTestimonial}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: '2rem' 
          }}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default TestimonialCarousel;