'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Connect EmailJS later)');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      {/* Contact Info */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-[#F5A623]">Get in Touch</h1>
        <p className="text-gray-600 text-lg">We&apos;d love to hear from you.Reach out using the info below or send us a message.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-6">
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="text-[#F5A623]" />
            Plot No 114/Flat 1, Alick Nkhata Rd, Kabulonga, Lusaka, Zambia
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="text-[#F5A623]" />
            +260977276638 / +260966558122
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="text-[#F5A623]" />
            smartmechaniczambia@gmail.com
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-3xl font-bold text-center text-[#0E1A1F] mb-10">Send us a Message</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-xl shadow-lg max-w-2xl mx-auto grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#F5A623] text-[#0E1A1F] py-3 px-6 rounded-full font-semibold hover:scale-105 transition shadow-lg"
          >
            <Send size={18} /> Submit
          </button>
        </form>
      </section>

      {/* Google Map */}
      <section>
        <h2 className="text-3xl font-bold text-center text-[#0E1A1F] mb-8">Our Location</h2>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9867321170974!2d28.335755414901498!3d-15.399638889260632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1945be16fb14ea37%3A0x3ea430b8974dca3!2sAlick%20Nkhata%20Rd%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2szm!4v1715259000000!5m2!1sen!2szm"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            className="w-full border-0"
          ></iframe>
        </div>
      </section>
    </div>
  );
}