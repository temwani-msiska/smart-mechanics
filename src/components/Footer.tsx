import { Mail, Phone, MapPin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E1A1F] text-white py-10 border-t border-[#1C2A31] mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Smart Mechanics Zambia. All rights
          reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="mailto:smartmechaniczambia@gmail.com"
            className="flex items-center gap-1 hover:text-[#F5A623] transition"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href="tel:+260977276638"
            className="flex items-center gap-1 hover:text-[#F5A623] transition"
          >
            <Phone size={16} />
            Call
          </a>
          <a
            href="https://www.google.com/maps/place/Plot+No+114,+Alick+Nkhata+Rd,+Kabulonga,+Lusaka,+Zambia"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#F5A623] transition"
          >
            <MapPin size={16} />
            Location
          </a>

          <a
            href="https://web.facebook.com/profile.php?id=100063883634099"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#F5A623] transition"
          >
            <Facebook size={16} />
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
