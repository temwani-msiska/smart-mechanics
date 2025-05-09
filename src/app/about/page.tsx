"use client";

import { Briefcase, Target, ShieldCheck } from "lucide-react"; // Removed 'Users'

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-[#F5A623] mb-4 tracking-wide">
          About Us
        </h1>
        <p className="text-[#4B5563] text-lg leading-relaxed max-w-3xl mx-auto">
          Smart Mechanics Zambia, founded in 2018, delivers reliable and cost-effective mechanical and technical solutions across Zambia. We serve industries including mining, construction, agriculture, and manufacturing. Our team is known for quick turnarounds, customer service, and sourcing high-quality parts.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-10 text-center">
        <div>
          <Target className="mx-auto mb-3 h-10 w-10 text-[#F5A623]" />
          <h2 className="text-xl font-bold text-[#0E1A1F] mb-2">Vision</h2>
          <p className="text-[#6B7280] italic">
            To be a customer-focused and forward-thinking provider of goods, equipment, and services.
          </p>
        </div>
        <div>
          <ShieldCheck className="mx-auto mb-3 h-10 w-10 text-[#F5A623]" />
          <h2 className="text-xl font-bold text-[#0E1A1F] mb-2">Mission</h2>
          <p className="text-[#4B5563] leading-relaxed">
            Deliver high-quality goods and services while committing to technical excellence, employee development, and partnerships.
          </p>
        </div>
        <div>
          <Briefcase className="mx-auto mb-3 h-10 w-10 text-[#F5A623]" />
          <h2 className="text-xl font-bold text-[#0E1A1F] mb-2">Work Culture</h2>
          <p className="text-[#4B5563] leading-relaxed">
            We promote innovation, inclusivity, and ISO-focused practices that eliminate inefficiencies and grow talent.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#0E1A1F] mb-4 text-center">
          Our Values
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[#4B5563] text-sm list-disc list-inside max-w-4xl mx-auto">
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
        <h2 className="text-2xl font-bold text-[#0E1A1F] mb-4 text-center">
          Safety, Health, & the Environment
        </h2>
        <p className="text-[#4B5563] leading-relaxed max-w-3xl mx-auto text-center">
          We prioritize safety, health, and environmental protection through integrated policies and proactive risk management. Our operations reduce carbon footprint and emphasize sustainability.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#0E1A1F] mb-6 text-center">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Luke Nsakanya",
              role: "Managing Director",
              qualification: "B.Tech in Transport & Logistics, Rtec. Automotive Engineering",
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
              className="bg-white p-6 shadow-md rounded-xl border border-gray-200 flex gap-4 items-start"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full border border-[#D1D5DB]"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#F5A623]">
                  {member.name}
                </h3>
                <p className="text-sm text-[#0E1A1F]">{member.role}</p>
                <p className="text-sm italic text-[#6B7280]">
                  {member.qualification}
                </p>
                {member.phone && (
                  <p className="text-sm mt-2 text-[#4B5563]">
                    📞 <a href={`tel:${member.phone}`} className="hover:text-[#F5A623]">{member.phone}</a>
                  </p>
                )}
                {member.email && (
                  <p className="text-sm text-[#4B5563]">
                    ✉️ <a href={`mailto:${member.email}`} className="hover:text-[#F5A623]">{member.email}</a>
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
