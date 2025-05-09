"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Facebook, Code2, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E1A1F] text-white py-10 border-t border-[#1C2A31] text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p>
          &copy; {new Date().getFullYear()} Smart Mechanics Zambia. All rights
          reserved.
        </p>

        <div className="flex flex-wrap gap-6 items-center justify-center">
          <a
            href="mailto:smartmechaniczambia@gmail.com"
            className="flex items-center gap-2 hover:text-[#F5A623] transition"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href="tel:+260977276638"
            className="flex items-center gap-2 hover:text-[#F5A623] transition"
          >
            <Phone size={16} />
            Call
          </a>
          <a
            href="https://www.google.com/maps/place/Plot+No+114,+Alick+Nkhata+Rd,+Kabulonga,+Lusaka,+Zambia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#F5A623] transition"
          >
            <MapPin size={16} />
            Location
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100063883634099"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#F5A623] transition"
          >
            <Facebook size={16} />
            Facebook
          </a>
        </div>
      </div>

      {/* Built By */}
      <div className="mt-8 text-center text-xs text-[#D1D5DB]">
        <a
          href="https://temwanimsiska.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#F5A623] hover:underline hover:brightness-110 transition"
        >
          <Code2 size={14} />
          Built with love by Temwani Msiska
        </a>
      </div>
    </footer>
  );
}

// Back to Top Button Component
export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 bg-[#F5A623] text-[#0E1A1F] p-3 rounded-full shadow-lg hover:scale-110 transition z-50"
      aria-label="Back to top"
    >
      <ChevronUp size={20} />
    </button>
  );
}
