"use client";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <section>
        <h1 className="text-4xl font-bold text-red-600 mb-4">About Us</h1>
        <p className="text-gray-700 leading-relaxed">
          Smart Mechanics Zambia, founded in 2018, delivers reliable and
          cost-effective mechanical and technical solutions across Zambia. We
          serve industries including mining, construction, agriculture, and
          manufacturing. Our team is known for quick turnarounds, customer
          service, and sourcing high-quality parts.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Vision</h2>
        <p className="text-gray-700 italic">
          We support businesses and households with the tools to succeed. Our
          goal is to be a customer-focused and forward-thinking provider of
          goods, equipment, and services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to deliver high-quality goods and services and become a
          leading supplier and contracting company. We are committed to
          technical excellence, employee development, and partnerships that
          yield favorable results.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Customer-Centricity</li>
          <li>Integrity & Trustworthiness</li>
          <li>Innovation & Creativity</li>
          <li>Communication & Transparency</li>
          <li>Customer Development & Support</li>
          <li>Continuous Improvement</li>
          <li>Collaboration & Teamwork</li>
          <li>Geographic Reach & Expansion</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Work Culture</h2>
        <p className="text-gray-700 leading-relaxed">
          We foster a positive and inclusive work environment that supports
          innovation and learning. We are ISO 9002 focused and committed to
          eliminating non-value-adding activities while promoting employee
          well-being and professional development.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Safety, Health, & the Environment
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We prioritize safety, health, and environmental protection through
          integrated policies and updated risk assessments. Our operations focus
          on reducing carbon footprint and using environmentally responsible
          materials.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Luke Nsakanya",
              role: "Managing Director",
              qualification:
                "B.Tech in Transport & Logistics, Rtec. Automotive Engineering",
              phone: "+260977276638",
              email: "lukensakanya@yahoo.com",
              image: "/team/LukeNkasanya.jpg",
            },
            {
              name: "Archibald Nsakanya",
              role: "Technical Adviser",
              qualification: "Cert. in Automotive Mechanics",
              phone: "+260966483713",
              image: "/team/ArchibaldNkaskanya.jpg",
            },
            {
              name: "Steven Chibolela",
              role: "Agriculture Engineer",
              qualification: "Diploma in Agricultural Engineering",
              image: "/team/StevenChibolela.jpg",
            },
            {
              name: "Mark Chitambala",
              role: "Plumber",
              qualification: "Diploma in Water Engineering",
              phone: "+260977169934",
              image: "/team/default.jpg",
            },
            {
              name: "Clifford Sikombe",
              role: "IT Technician",
              qualification: "Diploma in ICT",
              phone: "+260978765423",
              image: "/team/default.jpg",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 shadow-md rounded-lg border border-gray-200 flex gap-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full border border-gray-300"
              />
              <div>
                <h3 className="text-lg font-semibold text-red-600">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-700">{member.role}</p>
                <p className="text-sm italic text-gray-600">
                  {member.qualification}
                </p>
                {member.phone && (
                  <p className="text-sm mt-2 text-gray-700">
                    📞 <a href={`tel:${member.phone}`}>{member.phone}</a>
                  </p>
                )}
                {member.email && (
                  <p className="text-sm text-gray-700">
                    ✉️ <a href={`mailto:${member.email}`}>{member.email}</a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
