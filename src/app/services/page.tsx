'use client';

import { motion } from 'framer-motion';
import {
  Wrench,
  Truck,
  Tractor,
  Filter,
  Car,
  Settings,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import gearAnimation from '../../animations/gear.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesPage() {
  const services = [
    {
      title: 'Engine Overhaul',
      description:
        'Comprehensive engine repairs, reconditioning, and diagnostics for tractors, forklifts, and vehicles.',
      icon: Wrench,
    },
    {
      title: 'Forklift Hire & Maintenance',
      description:
        'Reliable forklift rental and full maintenance contracts to ensure your operations stay on track.',
      icon: Truck,
    },
    {
      title: 'Earth Moving Repairs & Parts',
      description:
        'Repair and supply of parts for Caterpillar, Komatsu, Hitachi and more — fast turnaround guaranteed.',
      icon: Settings,
    },
    {
      title: 'Vehicle Parts & Filters',
      description:
        'Wide inventory of high-quality vehicle parts, filters, and industrial components for all brands.',
      icon: Filter,
    },
    {
      title: 'Agricultural Equipment',
      description:
        'Sales, repairs, and servicing of tractors, ploughs, planters, and irrigation tools.',
      icon: Tractor,
    },
    {
      title: 'Car Hire & Logistics',
      description:
        'Affordable logistics solutions and car hire (1-ton van, saloon car) for your transport needs.',
      icon: Car,
    },
  ];

  return (
    <div className="relative bg-[#0E1A1F] text-white py-28 px-6 overflow-hidden">
      {/* Lottie Gear Animation */}
      <div className="absolute -top-24 -right-20 w-96 opacity-10 z-0 pointer-events-none select-none">
        <Lottie animationData={gearAnimation} loop />
      </div>

      {/* Header Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-20 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block bg-[#F5A623]/10 text-[#F5A623] px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide mb-4">
          What We Offer
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#F5A623]">
          Our Core Services
        </h1>
        <p className="text-[#D1D5DB] text-lg leading-relaxed">
          We don’t just fix machines. We fuel industries across Zambia with precision, reliability, and speed.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {services.map(({ title, description, icon: Icon }, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            whileHover={{ scale: 1.04 }}
            className="bg-white text-[#0E1A1F] p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-[#F5A623]/20 text-[#F5A623] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
