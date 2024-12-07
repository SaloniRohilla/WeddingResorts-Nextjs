import { Camera, Heart, MapPin } from 'lucide-react';

export const COLORS = {
  blushPink: '#FFB6C1',
  gold: '#D4AF37',
  white: '#FFFFFF',
  charcoal: '#36454F',
  softGray: '#F5F5F5'
};

export const SERVICES = [
  { 
    icon: Camera, 
    title: "Professional Photography", 
    description: "Capturing your most precious moments with artistic precision" 
  },
  { 
    icon: Heart, 
    title: "Custom Ceremony Spaces", 
    description: "Tailored venues that reflect your unique love story" 
  },
  { 
    icon: MapPin, 
    title: "Scenic Locations", 
    description: "Breathtaking backdrops for your dream wedding" 
  }
];

export const TESTIMONIALS = [
  {
    quote: "Our dream wedding was perfectly executed at this stunning resort!",
    author: "Emily & Michael",
    rating: 5
  },
  {
    quote: "Absolutely magical venue with incredible service.",
    author: "Sarah & David",
    rating: 5
  }
];

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
];