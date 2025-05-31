"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Users, BookOpen, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const ProjectNeev = () => {
  return (
    <section className="py-10 lg:py-20 bg-gradient-to-br">
      <div className=" mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-4">
            Project Neev : Where the Journey Begins
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our flagship initiative focused on laying strong foundations for
            lasting change
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Visual section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/neev.jpeg"
                alt="Project Neev - Children learning with local women educators"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content section */}
          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Building Strong Foundations
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Launched in 2023, Project Neev is our flagship initiative
                focused on foundational learning for children aged 4–10. Run
                entirely by local women educators, the program blends community
                trust with structured learning.
              </p>
            </motion.div>

            {/* Key features */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#006b5e]/3 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#006b5e] rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Community-Driven
                    </h4>
                    <p className="text-gray-600">
                      Local women become the heart of educational transformation
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#006b5e]/3 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#006b5e] rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Foundational Focus
                    </h4>
                    <p className="text-gray-600">
                      Language, math, values, and curiosity-building at its core
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#006b5e]/3 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#006b5e] rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Trust & Relationships
                    </h4>
                    <p className="text-gray-600">
                      Building lasting connections between educators and
                      families
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA button */}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-14 "
        >
          <button className="bg-[#006b5e] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#006b5e]/90 transition-all duration-300 flex items-center space-x-2 group hover:shadow-lg mx-auto">
            <span>Read the Full Story</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectNeev;
