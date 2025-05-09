"use client";

import { motion } from "framer-motion";
import { Wrench, Truck, Settings, ShieldCheck, Car, Cog } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


export function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-28"
      style={{ backgroundImage: "url('/backdrop.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0E1A1F]/90"></div>

      {/* Content wrapper with z-index */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#F5A623] leading-tight mb-6">
            Mechanical Power. Delivered.
          </h1>
          <p className="text-lg text-[#D1D5DB] leading-relaxed mb-8">
            Trusted mechanical & technical solutions across Zambia — since 2018.
            From forklifts to farming tools, we move your business forward.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#F5A623] text-[#0E1A1F] px-6 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg"
          >
            Get a Quote
          </a>
        </motion.div>

        {/* Right Icon Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-[#1C2A31] p-6 rounded-xl flex items-center gap-4 shadow hover:shadow-lg transition">
            <Wrench className="text-[#F5A623] w-7 h-7" />
            <span className="text-[#D1D5DB] font-medium">Engine Overhauls</span>
          </div>
          <div className="bg-[#1C2A31] p-6 rounded-xl flex items-center gap-4 shadow hover:shadow-lg transition">
            <Truck className="text-[#F5A623] w-7 h-7" />
            <span className="text-[#D1D5DB] font-medium">Forklift Hire</span>
          </div>
          <div className="bg-[#1C2A31] p-6 rounded-xl flex items-center gap-4 shadow hover:shadow-lg transition">
            <ShieldCheck className="text-[#F5A623] w-7 h-7" />
            <span className="text-[#D1D5DB] font-medium">SHEQ Standards</span>
          </div>
          <div className="bg-[#1C2A31] p-6 rounded-xl flex items-center gap-4 shadow hover:shadow-lg transition">
            <Wrench className="text-[#F5A623] w-7 h-7" />
            <span className="text-[#D1D5DB] font-medium">Parts & Repairs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



export function AboutPreview() {
  return (
    <section className="bg-white py-20">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5A623] mb-4">
          About Smart Mechanics
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Since 2018, Smart Mechanics Zambia has provided innovative,
          cost-effective mechanical solutions for the mining, construction,
          logistics, and agricultural sectors. We pride ourselves on speed,
          reliability, and technical excellence.
        </p>
        <a
          href="/about"
          className="mt-4 inline-block text-[#F5A623] font-medium underline"
        >
          Learn more
        </a>
      </motion.div>
    </section>
  );
}

export function ServicesPreview() {
  const services = [
    { label: "Engine Overhaul", icon: Cog },
    { label: "Forklift Hire & Maintenance", icon: Truck },
    { label: "Earth Moving Repairs", icon: Settings },
    { label: "Agricultural Equipment", icon: ShieldCheck },
    { label: "Vehicle Parts & Filters", icon: Wrench },
    { label: "Car Hire", icon: Car },
  ];

  return (
    <section className="bg-[#F9FAFB] py-20">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F5A623] mb-12">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ label, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-center"
              variants={fadeInUp}
            >
              <Icon className="mx-auto h-10 w-10 text-[#F5A623] mb-4" />
              <h3 className="text-lg font-semibold text-[#0E1A1F] mb-2">
                {label}
              </h3>
              <p className="text-sm text-gray-600">
                Learn more about how we support clients with{" "}
                {label.toLowerCase()}.
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/services" className="text-[#F5A623] underline font-medium">
            View All Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="bg-[#0E1A1F] py-20 text-white text-center">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to get started?
        </h2>
        <p className="mb-6 text-lg text-[#D1D5DB] max-w-xl mx-auto">
          Reach out today and let&rsquo;s build something powerful together.
        </p>

        <a
          href="/contact"
          className="bg-[#F5A623] text-[#0E1A1F] px-6 py-3 rounded-full font-semibold hover:brightness-110 hover:scale-105 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}
