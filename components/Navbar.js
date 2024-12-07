import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { NAVIGATION_LINKS, COLORS } from '../utils/constants';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${COLORS.white};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: ${COLORS.white};
    padding: 1rem;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavContainer>
      <div>
        <img 
          src="/images/logo.png" 
          alt="Wedding Resorts Logo" 
          style={{ height: '50px' }} 
        />
      </div>

      <NavLinks isOpen={isMenuOpen}>
        {NAVIGATION_LINKS.map((link) => (
          <Link 
            key={link.href} 
            href={link.href}
            style={{ 
              textDecoration: 'none', 
              color: COLORS.charcoal,
              fontWeight: 'bold'
            }}
          >
            {link.label}
          </Link>
        ))}
      </NavLinks>

      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ 
          display: 'none', 
          '@media (max-width: 768px)': { display: 'block' } 
        }}
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
    </NavContainer>
  );
};

export default Navbar;