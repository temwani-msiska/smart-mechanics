"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import gearAnimation from "../../animations/gear.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Form submitted! (EmailJS or Formspree goes here)");
  }

  return (
    <section className="relative bg-[#0E1A1F] text-white py-28 px-6 overflow-hidden">
      {/* Gear Animation */}
      <div className="absolute -top-20 -left-20 w-96 opacity-10 pointer-events-none select-none">
        <Lottie animationData={gearAnimation} loop />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-[#F5A623]/10 text-[#F5A623] px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide mb-4">
            Let’s Connect
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#F5A623] mb-10">
            Contact Us
          </h1>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="grid gap-6 text-left"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div variants={fadeInUp}>
            <label className="block mb-1 text-sm text-[#D1D5DB]">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-white text-black px-4 py-3 rounded-lg outline-none focus:ring-2 ring-[#F5A623] transition"
              required
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label className="block mb-1 text-sm text-[#D1D5DB]">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-white text-black px-4 py-3 rounded-lg outline-none focus:ring-2 ring-[#F5A623] transition"
              required
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label className="block mb-1 text-sm text-[#D1D5DB]">Message</label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-white text-black px-4 py-3 rounded-lg outline-none focus:ring-2 ring-[#F5A623] transition resize-none"
              required
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <button
              type="submit"
              className="w-full bg-[#F5A623] text-[#0E1A1F] font-semibold py-3 rounded-full hover:brightness-110 transition"
            >
              Send Message
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
