import React from 'react';
import Link from 'next/link';
import { COLORS, NAVIGATION_LINKS } from '../utils/constants';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: COLORS.charcoal,
      color: COLORS.white,
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        marginBottom: '1rem' 
      }}>
        <div>
          <h4>Quick Links</h4>
          {NAVIGATION_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              style={{ 
                color: COLORS.white, 
                textDecoration: 'none', 
                display: 'block', 
                margin: '0.5rem 0' 
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div>
          <h4>Contact Us</h4>
          <p>Wedding Resort Venue</p>
          <p>123 Romance Lane</p>
          <p>Love City, HC 12345</p>
          <p>Email: info@weddingresorts.com</p>
        </div>
        
        <div>
          <h4>Follow Us</h4>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Instagram color={COLORS.white} />
            <Facebook color={COLORS.white} />
            <Twitter color={COLORS.white} />
          </div>
        </div>
      </div>
      
      <div style={{ 
        borderTop: `1px solid ${COLORS.white}`, 
        paddingTop: '1rem' 
      }}>
        © {new Date().getFullYear()} Wedding Resorts. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;