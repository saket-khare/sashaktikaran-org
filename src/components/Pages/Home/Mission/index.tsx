"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Target, Eye, Lightbulb, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Mission = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      title: "Our Mission",
      icon: Target,
      image: "/mission1.jpeg",
      description:
        "To empower women and children through holistic education and overall development initiatives, focusing on building foundational skills that enable lifelong learning and adaptability.",
    },
    {
      title: "Our Vision",
      icon: Eye,
      image: "/mission2.jpg",
      description:
        "A rural India where every child has access to quality education and the skills needed to thrive in the 21st century, regardless of geographic or socioeconomic barriers.",
    },
    {
      title: "Our Approach",
      icon: Lightbulb,
      image: "/mission3.jpg",
      description:
        "We leverage technology to bridge educational gaps while creating employment opportunities for rural women.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 w-full">
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
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Guided by our mission, vision, and innovative approach, we're
            committed to transforming rural education in India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <motion.div
                initial={false}
                animate={{
                  background:
                    activeCard === index
                      ? "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.6), rgba(0,0,0,0.4))"
                      : "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)",
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <motion.div layout className="flex items-center gap-3">
                  <motion.div
                    layout
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <card.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <motion.h3 layout className="text-xl font-bold text-white">
                    {card.title}
                  </motion.h3>
                </motion.div>

                {/* Description Overlay */}
                <AnimatePresence mode="wait">
                  {activeCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white text-lg leading-relaxed">
                        {card.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Plus/Close Icon */}
                <motion.div layout className="absolute bottom-6 right-6">
                  <motion.div
                    initial={false}
                    animate={{
                      rotate: activeCard === index ? 45 : 0,
                      scale: activeCard === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    {activeCard === index ? (
                      <X className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
