import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { motion } from 'framer-motion';
import { COLORS, SERVICES, TESTIMONIALS } from '../utils/constants';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Luxe Wedding Resorts | Your Dream Destination</title>
        <meta name="description" content="Elegant wedding destination for your perfect day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection 
        title="Elegant Weddings, Unforgettable Moments"
        subtitle="Create your perfect day at our breathtaking luxury resort"
      />

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ 
          padding: '4rem', 
          backgroundColor: COLORS.softGray 
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Our Wedding Services
        </h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}>
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </motion.section>

      <TestimonialCarousel testimonials={TESTIMONIALS} />
    </Layout>
  );
}