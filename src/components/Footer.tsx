export default function Footer() {
  return (
    <footer className="bg-[#0E1A1F] text-white py-10 border-t border-[#1C2A31] mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <p>&copy; {new Date().getFullYear()} Smart Mechanics Zambia. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="mailto:smartmechaniczambia@gmail.com" className="hover:text-[#F5A623] transition">Email</a>
          <a href="tel:+260977276638" className="hover:text-[#F5A623] transition">Call</a>
          <a href="https://goo.gl/maps/MpSE3asvD5DDEn9b7" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5A623] transition">Location</a>
        </div>
      </div>
    </footer>
  );
}