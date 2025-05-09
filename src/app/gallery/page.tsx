'use client';

import { motion } from 'framer-motion';

export default function GalleryPage() {
  const images = [
    '/assets/gallery1.jpg',
    '/assets/gallery2.jpg',
    '/assets/gallery3.jpg',
    '/assets/gallery4.jpg',
    '/assets/gallery5.jpg',
    '/assets/gallery6.jpg',
  ];

  return (
    <section className="bg-[#F9FAFB] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-[#F5A623] mb-12 text-center tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Work
        </motion.h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium">View Project</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}