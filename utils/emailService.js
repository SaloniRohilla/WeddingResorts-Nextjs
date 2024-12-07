import emailjs from '@emailjs/browser';

// Configure these with your actual EmailJS service details
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID, 
      TEMPLATE_ID, 
      templateParams, 
      PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
};

export const validateContactForm = (data) => {
  const errors = {};

  if (!data.name || data.name.trim() === '') {
    errors.name = 'Name is required';
  }

  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Valid email is required';
  }

  if (!data.message || data.message.trim() === '') {
    errors.message = 'Message is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};