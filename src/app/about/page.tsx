"use client";

import { motion } from "framer-motion";
import { Briefcase, Target, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-28">
      {/* Header */}
      <motion.section
        className="text-center"
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary drop-shadow-sm mb-6">
          Who We Are
        </h1>
        <p className="text-gearGray text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Since 2018, Smart Mechanics Zambia has been a trusted force in
          Zambia’s technical sector — from mining to agriculture, construction
          to logistics. We’re built on speed, precision, and people-first
          service.
        </p>
      </motion.section>

      {/* Vision, Mission, Culture */}
      <motion.section
        className="grid md:grid-cols-3 gap-10 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {[
          {
            title: "Vision",
            icon: Target,
            desc: "To be a customer-focused and forward-thinking provider of goods, equipment, and services.",
          },
          {
            title: "Mission",
            icon: ShieldCheck,
            desc: "Delivering high-quality goods and services through technical excellence, team growth, and innovation.",
          },
          {
            title: "Work Culture",
            icon: Briefcase,
            desc: "Built on ISO standards, efficiency, teamwork, and inclusivity — we make excellence a habit.",
          },
        ].map(({ title, icon: Icon, desc }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition"
          >
            <Icon className="mx-auto h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold text-darkBg mb-2">{title}</h3>
            <p className="text-textGray italic">{desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Values */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-darkBg mb-6">
          Core Values
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gearGray text-sm max-w-5xl mx-auto">
          {[
            "Customer-Centricity",
            "Integrity & Trust",
            "Innovation & Creativity",
            "Clear Communication",
            "Client Development",
            "Continuous Improvement",
            "Team Collaboration",
            "Geographic Reach",
          ].map((val) => (
            <li
              key={val}
              className="bg-white py-4 px-2 rounded-lg shadow-sm hover:shadow-md transition border"
            >
              {val}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* SHEQ */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-darkBg mb-6">
          Safety, Health & Environment
        </h2>
        <p className="text-center text-gearGray max-w-3xl mx-auto leading-relaxed">
          Our SHEQ policies are designed to minimize risk, protect health, and
          promote eco-friendly practices. We invest in sustainable operations
          that prioritize community and planet.
        </p>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
      >
        <h2 className="text-3xl font-bold text-center text-darkBg mb-10">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
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
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="flex gap-6 items-start bg-white p-6 rounded-2xl border shadow-md hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full border-2 border-textGray"
              />
              <div>
                <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                <p className="text-sm text-darkBg">{member.role}</p>
                <p className="text-sm italic text-textGray mb-2">
                  {member.qualification}
                </p>
                {member.phone && (
                  <p className="text-sm text-gearGray">
                    📞{" "}
                    <a href={`tel:${member.phone}`} className="hover:text-primary">
                      {member.phone}
                    </a>
                  </p>
                )}
                {member.email && (
                  <p className="text-sm text-gearGray">
                    ✉️{" "}
                    <a
                      href={`mailto:${member.email}`}
                      className="hover:text-primary"
                    >
                      {member.email}
                    </a>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
