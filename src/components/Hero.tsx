export default function Hero() {
  return (
    <section className="bg-[#0E1A1F] py-20min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4">
          Smart Mechanics Zambia
        </h1>
        <p className="text-lg md:text-xl text-darkBg mb-6">
          Providing reliable, innovative, and cost-effective mechanical & technical solutions
          across Zambia’s key industries since 2018.
        </p>
        <a
          href="/contact"
          className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:brightness-110 transition"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
