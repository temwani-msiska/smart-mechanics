"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Truck,
  Settings,
  ShieldCheck,
  Cog,
  BatteryCharging,
  Fuel,
  SunMedium,
} from "lucide-react";
import dynamic from "next/dynamic";
import gearAnimation from "../animations/gear.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const GearAnimation = () => (
  <div className="absolute top-0 right-0 w-64 opacity-20 select-none pointer-events-none">
    <Lottie animationData={gearAnimation} loop={true} />
  </div>
);
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative bg-[#0E1A1F] text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Gear Animation – Top Left */}
      <div className="absolute top-0 right-0 w-64 opacity-10 pointer-events-none select-none z-0">
        <Lottie animationData={gearAnimation} loop />
      </div>
      {/* Gradient Glow Behind Character */}
      <div className="absolute left-0 top-0 h-full w-1/2 z-0 bg-gradient-to-br from-[#F5A623]/30 via-[#0E1A1F]/60 to-transparent" />

      {/* Left: 3D Mascot Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block w-1/2 px-6 z-10"
      >
        <img
          src="/Transparent.png"
          alt="Smart Mechanics Mascot"
          className="max-w-full h-auto object-contain drop-shadow-xl"
        />
      </motion.div>

      {/* Right: Text & Services */}
      <div className="relative z-10 w-full md:w-1/2 px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#F5A623] leading-tight mb-6">
            Mechanical Power. <br className="hidden md:block" />
            Delivered.
          </h1>
          <p className="text-lg md:text-xl text-[#D1D5DB] mb-6 leading-relaxed">
            Since 2018, we’ve engineered trust across Zambia’s industrial,
            agricultural, and logistics sectors.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#F5A623] text-[#0E1A1F] px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Get a Quote
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 gap-4 mt-10"
        >
          {[
            { icon: Wrench, label: "Engine Overhauls" },
            { icon: Truck, label: "Forklift Hire" },
            { icon: ShieldCheck, label: "SHEQ Compliance" },
            { icon: Settings, label: "Repairs & Diagnostics" },
          ].map(({ icon: Icon, label }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm shadow hover:shadow-xl transition"
            >
              <Icon className="text-[#F5A623] w-6 h-6" />
              <span className="text-[#E5E5E5] text-sm font-medium">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <GearAnimation />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center justify-center bg-[#F5A623]/10 text-[#F5A623] px-4 py-2 rounded-full mb-4 text-sm font-semibold uppercase tracking-wider">
          <Wrench className="w-4 h-4 mr-2" />
          Engineering Excellence
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0E1A1F] mb-6 leading-tight">
          Built for Performance. Powered by People.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          From forklifts to farm tech, <strong>Smart Mechanics Zambia</strong>{" "}
          delivers high-impact technical solutions with speed, care, and craft.
        </p>

        <a
          href="/about"
          className="mt-8 inline-block bg-[#F5A623] text-[#0E1A1F] px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:brightness-105 transition"
        >
          Learn More About Us
        </a>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#F5A623]/20 via-[#F5A623]/60 to-[#F5A623]/20"></div>
    </section>
  );
}

export function ServicesPreview() {
  const services = [
    { label: "Engine Overhaul", icon: Cog },
    { label: "Forklift Hire & Maintenance", icon: Truck },
    { label: "Agricultural Equipment", icon: ShieldCheck },
    { label: "Generator Services", icon: BatteryCharging },
    { label: "Genset Hire", icon: Fuel },
    { label: "Solar & Power Backup Systems", icon: SunMedium },
  ];

  return (
    <section className="relative bg-[#0E1A1F] py-24 overflow-hidden">
      <div className="absolute -top-16 -left-24 w-72 h-72 opacity-10 rotate-12 pointer-events-none select-none">
        <Lottie animationData={gearAnimation} loop className="w-full h-full" />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#F5A623] mb-16 tracking-tight">
          Trusted. Tested. Tailored.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ label, icon: Icon }, idx) => {
            const isLast = idx === services.length - 1;
            const isOdd = services.length % 3 === 1;
            const shouldCenter = isLast && isOdd;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 text-center ${
                  shouldCenter ? "lg:col-start-2" : ""
                }`}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#F5A623]/10 text-[#F5A623] rounded-full flex items-center justify-center">
                  <Icon className="w-7 h-7 animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-[#0E1A1F] mb-2">
                  {label}
                </h3>
                <p className="text-gray-600 text-sm">
                  Discover how we help your business excel with{" "}
                  <span className="font-medium">{label.toLowerCase()}</span>.
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-block bg-[#F5A623] text-[#0E1A1F] px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
          >
            Explore Full Service List
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function ClientsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-b from-[#fefce8] to-white py-28 overflow-hidden"
    >
      {/* Background Gear Animation */}
      <div className="absolute -top-24 -left-32 w-96 opacity-10 pointer-events-none select-none">
        <Lottie animationData={gearAnimation} loop />
      </div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0E1A1F] mb-4">
          Our Clients
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-lg">
          Empowering some of Zambia’s most trusted names in logistics, energy,
          agriculture, and retail.
        </p>
      </div>

      {/* Floating Logos Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
        {[
          { src: "/clients/zambian-breweries.jpg", alt: "Zambian Breweries" },
          { src: "/clients/bollore.jpg", alt: "Bolloré Africa Logistics" },
          { src: "/clients/rubis.jpg", alt: "Rubis Energy" },
          { src: "/clients/pia-manzi.png", alt: "Pia Manzi Wildlife" },
          {
            src: "/clients/african-supermarkets.png",
            alt: "African Supermarkets",
          },
          { src: "/clients/zns.jpg", alt: "Zambia National Service" },
          { src: "/clients/reiz.jpg", alt: "Real Estate Investments Zambia" },
          { src: "/clients/cheers.jpg", alt: "Cheers Hypermarket" },
        ].map(({ src, alt }, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:rotate-1 flex items-center justify-center"
          >
            <img
              src={src}
              alt={alt}
              className="h-16 object-contain transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Ready to work with Zambia’s mechanical experts?
        </h2>
        <p className="mb-6 text-lg text-[#D1D5DB] max-w-xl mx-auto">
          Contact us today — and let’s engineer something powerful together.
        </p>

        <a
          href="/contact"
          className="bg-[#F5A623] text-[#0E1A1F] px-8 py-3 rounded-full font-semibold hover:brightness-110 hover:scale-105 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}
