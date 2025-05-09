"use client";

import { motion } from "framer-motion";
import { Briefcase, Target, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import gearAnimation from "../../animations/gear.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <div className="relative bg-[#0E1A1F] text-white overflow-hidden">
      {/* Floating Gear Animation */}
      <div className="absolute -top-16 -right-16 w-80 opacity-10 z-0 pointer-events-none select-none">
        <Lottie animationData={gearAnimation} loop />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 space-y-28">
        {/* Header */}
        <motion.section
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center bg-[#F5A623]/10 text-[#F5A623] px-5 py-2 rounded-full mb-4 text-sm font-semibold uppercase tracking-wider">
            Excellence In Motion
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#F5A623] mb-6">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-[#D1D5DB] max-w-3xl mx-auto leading-relaxed">
            Since 2018, Smart Mechanics Zambia has been trusted to power
            Zambia’s vital industries — mining, agriculture, construction, and
            logistics — with innovation, speed, and people-first service.
          </p>
        </motion.section>

        {/* Vision, Mission, Culture */}
        <motion.section
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            {
              title: "Vision",
              icon: Target,
              desc: "To be a customer-focused and forward-thinking provider of technical equipment and services.",
            },
            {
              title: "Mission",
              icon: ShieldCheck,
              desc: "Delivering high-quality goods and services through technical excellence, innovation, and team growth.",
            },
            {
              title: "Work Culture",
              icon: Briefcase,
              desc: "Rooted in ISO standards, teamwork, and continuous improvement — our culture drives impact.",
            },
          ].map(({ title, icon: Icon, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              className="bg-white text-[#0E1A1F] p-8 rounded-2xl shadow-xl border border-gray-200 transition-transform duration-300 text-center"
            >
              <Icon className="mx-auto h-10 w-10 text-[#F5A623] mb-4" />
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-[#4B5563] italic">{desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Values */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Core Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Customer-Centricity",
              "Integrity & Trust",
              "Innovation & Creativity",
              "Clear Communication",
              "Client Development",
              "Continuous Improvement",
              "Team Collaboration",
              "Geographic Reach",
            ].map((val, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white text-[#374151] py-4 px-3 text-center text-sm rounded-lg shadow-sm hover:shadow-md transition border border-gray-200"
              >
                {val}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SHEQ Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Safety, Health & Environment
          </h2>
          <p className="text-[#D1D5DB] leading-relaxed">
            We are committed to responsible operations that prioritize health,
            safety, and the environment. Our SHEQ framework is proactive,
            data-driven, and built to protect people, communities, and planet.
          </p>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center"
        >
          {[
            { label: "Years in Operation", value: 6, suffix: "+" }, 
            { label: "Projects Completed", value: 250, suffix: "+" }, 
            { label: "Industries Served", value: 4, suffix: "+" }, 
            { label: "Clients Nationwide", value: 30, suffix: "+" }, 
            { label: "Team Members & Specialists", value: 10, suffix: "+" }, 
            { label: "Core Services Offered", value: 8, suffix: "+" }, 
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-4xl font-extrabold text-[#F5A623] mb-2">
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-[#4B5563]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-10">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
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
                className="flex gap-6 items-start bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full border-2 border-[#E5E7EB]"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#F5A623]">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-[#1F2937]">
                    {member.role}
                  </p>
                  <p className="text-sm italic text-[#6B7280] mb-2">
                    {member.qualification}
                  </p>
                  {member.phone && (
                    <p className="text-sm text-[#4B5563]">
                      📞{" "}
                      <a
                        href={`tel:${member.phone}`}
                        className="hover:text-[#F5A623]"
                      >
                        {member.phone}
                      </a>
                    </p>
                  )}
                  {member.email && (
                    <p className="text-sm text-[#4B5563]">
                      ✉️{" "}
                      <a
                        href={`mailto:${member.email}`}
                        className="hover:text-[#F5A623]"
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
    </div>
  );
}
