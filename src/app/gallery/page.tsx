"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import gearAnimation from "../../animations/gear.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function GalleryPage() {
  const images = [
    "/assets/gallery1.jpg",
    "/assets/gallery2.jpg",
    "/assets/gallery3.jpg",
    "/assets/gallery4.jpg",
    "/assets/gallery5.jpg",
    "/assets/gallery6.jpg",
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight")
        setSelectedIndex((prev) =>
          prev !== null ? (prev + 1) % images.length : null
        );
      if (e.key === "ArrowLeft")
        setSelectedIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : null
        );
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <section className="relative bg-[#0E1A1F] text-white py-24 overflow-hidden">
      {/* Lottie Gear */}
      <div className="absolute -top-16 -right-16 w-80 opacity-10 pointer-events-none select-none">
        <Lottie animationData={gearAnimation} loop />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-[#F5A623]/10 text-[#F5A623] px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wide mb-4">
            Visual Proof
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#F5A623] tracking-tight">
            Our Work
          </h1>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl border border-white/10 shadow-md group cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <p className="text-white text-sm font-medium">View Full</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal with Arrows */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center px-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute top-6 right-6 text-white hover:text-[#F5A623]"
          >
            <X size={30} />
          </button>

          <div className="relative max-w-5xl max-h-[80vh] w-full">
            <img
              src={images[selectedIndex]}
              alt="Full preview"
              className="w-full h-auto rounded-lg shadow-lg border-4 border-white"
            />

            {/* Left Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  (selectedIndex - 1 + images.length) % images.length
                );
              }}
              className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white/10 hover:bg-[#F5A623]/80 text-white p-2 rounded-full"
            >
              <ArrowLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((selectedIndex + 1) % images.length);
              }}
              className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-white/10 hover:bg-[#F5A623]/80 text-white p-2 rounded-full"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
