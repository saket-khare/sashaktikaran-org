"use client";

import React from "react";
import { motion } from "motion/react";
import CountUp from "react-countup";
import { School, Users, Home, GraduationCap, UserCheck } from "lucide-react";

const Impact = () => {
  const impactStats = [
    {
      number: 10,
      label: "Government Primary Schools in remote rural areas",
      suffix: "+",
      icon: School,
      color: "from-slate-800 to-slate-900",
    },
    {
      number: 10,
      label: "Government Hostels supporting Tribal and Nomadic Communities",
      icon: Home,
      color: "from-slate-800 to-slate-900",
    },
    {
      number: 650,
      label: "Students enrolled",
      suffix: "+",
      icon: GraduationCap,
      color: "from-slate-800 to-slate-900",
    },
    {
      number: 20,
      label: "Women recruited as Shiksha Saathis",
      icon: UserCheck,
      color: "from-slate-800 to-slate-900",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 w-full">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Empowering women and children through holistic education and
            development initiatives across rural India.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mx-auto">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-10 text-center border border-slate-100 hover:border-slate-200 transition-all min-w-[280px]"
            >
              <div className="mb-6">
                <span className="text-5xl md:text-6xl font-bold text-slate-900">
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    suffix={stat.suffix || ""}
                  />
                </span>
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-auto mb-6" />
              <p className="text-slate-600 text-lg leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors">
            Contribute Now
          </button>
        </motion.div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
      </div>
    </section>
  );
};

export default Impact;
