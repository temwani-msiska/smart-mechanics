"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#0E1A1F] shadow-md sticky top-0 z-50">
      <div className="w-full px-4 py-3 flex items-center justify-between">
        {/* Left: Logo + Brand Name */}
        <Link href="/" className="flex items-center space-x-3 group">
          <img
            src="/logo-smz.png"
            alt="Smart Mechanics Logo"
            className="h-14 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce"
          />
          <span className="text-2xl font-extrabold text-[#F5A623] tracking-wide group-hover:opacity-95 transition-all duration-300">
            Smart Mechanics Zambia
          </span>
        </Link>

        {/* Right: Desktop Nav */}
        <div className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[#D1D5DB] font-medium hover:text-[#F5A623] transition duration-300 ${
                pathname === item.href ? "text-[#F5A623]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#D1D5DB] focus:outline-none"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#0E1A1F]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-[#D1D5DB] font-medium hover:text-[#F5A623] transition ${
                pathname === item.href ? "text-[#F5A623]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
