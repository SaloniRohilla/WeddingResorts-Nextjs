import React, { useState } from 'react';
import { sendContactEmail } from '../utils/emailService';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendContactEmail(formData);
      setSubmitStatus({
        message: 'Your message has been sent successfully!',
        type: 'success'
      });
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        message: 'Failed to send message. Please try again.',
        type: 'error'
      });
    }
  };

  return (
    
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            Have questions about your dream wedding? We're here to help! 
            Fill out the form and we'll get back to you shortly.
          </p>
          
          <div className="contact-info space-y-4">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>weddings@resorts.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>123 Wedding Lane, Romantic City, Love State 12345</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {submitStatus.message && (
            <div className={`p-4 rounded ${
              submitStatus.type === 'success' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <div>
            <label className="block mb-2">Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">Phone</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">Wedding Date</label>
            <input 
              type="date" 
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
              className="w-full p-2 border rounded h-32"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-white p-3 rounded hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    
  );
};

export default ContactPage;