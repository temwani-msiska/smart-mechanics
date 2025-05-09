'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submitted! (Connect EmailJS later)')
    // TODO: Integrate with EmailJS or Formspree
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      {/* Contact Info */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Contact Us</h1>
        <p className="text-gray-700">
          📍 Plot No 114/Flat 1, Alick Nkhata Rd, Kabulonga, Lusaka, Zambia
        </p>
        <p className="text-gray-700">📞 +260977276638 / +260966558122</p>
        <p className="text-gray-700">✉️ smartmechaniczambia@gmail.com</p>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send us a message</h2>
        <form onSubmit={handleSubmit} className="grid gap-6 max-w-xl mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="border p-3 rounded-lg"
          />
          <button
            type="submit"
            className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Google Map */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Our Location</h2>
        <div className="overflow-hidden rounded-lg shadow-lg">
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
  )
}
