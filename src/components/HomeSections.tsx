export function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">
          Automotive Excellence in Zambia
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Trusted solutions for industrial, agricultural & automotive equipment since 2018.
        </p>
        <a
          href="/contact"
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
export function AboutPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Smart Mechanics</h2>
        <p className="text-gray-700 leading-relaxed">
          Established in 2018, Smart Mechanics Zambia is committed to delivering reliable,
          cost-effective mechanical and technical solutions across Zambia. Our team supports key
          sectors like mining, agriculture, and logistics with top-tier equipment and repair
          services. We pride ourselves on customer satisfaction, innovation, and a results-driven
          approach.
        </p>
        <a href="/about" className="text-red-600 underline mt-4 inline-block">
          Learn more
        </a>
      </div>
    </section>
  )
}
export function ServicesPreview() {
  const services = [
    'Engine Overhaul',
    'Forklift Hire & Maintenance',
    'Earth Moving Repairs',
    'Agricultural Equipment',
    'Vehicle Parts & Filters',
    'Car Hire',
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white shadow rounded-lg p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-red-600 mb-2">{service}</h3>
              <p className="text-gray-600 text-sm">
                Learn more about how we support clients with {service.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-right">
          <a href="/services" className="text-red-600 underline">
            View All Services
          </a>
        </div>
      </div>
    </section>
  )
}
export function ContactCTA() {
  return (
    <section className="bg-red-600 py-16 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
      <p className="mb-6">
        Reach out to us today and discover how Smart Mechanics Zambia can support your operations.
      </p>
      <a
        href="/contact"
        className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Contact Us
      </a>
    </section>
  )
}
