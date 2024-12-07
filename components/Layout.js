import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const theme = {
  colors: {
    primary: '#FFB6C1',
    secondary: '#D4AF37',
    background: '#FFFFFF',
    text: '#36454F'
  },
  fonts: {
    heading: 'Playfair Display, serif',
    body: 'Roboto, sans-serif'
  }
};

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}