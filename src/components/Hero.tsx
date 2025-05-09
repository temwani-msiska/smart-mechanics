export default function Hero() {
  return (
    <section className="bg-gray-100 min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-600 mb-4">
          Automotive Excellence in Zambia
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          We keep your car running like new — quality, reliable, and affordable services.
        </p>
        <a
          href="/contact"
          className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
