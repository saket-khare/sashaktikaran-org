"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Shield,
  Users,
  AlertTriangle,
  BookOpen,
  CheckCircle,
  Scale,
  Heart,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PoSHActPage = () => {
  const keyProvisions = [
    {
      icon: AlertTriangle,
      title: "Defines Sexual Harassment",
      description:
        "Clearly defines what constitutes sexual harassment and mandates employer responsibility in preventing it.",
    },
    {
      icon: Users,
      title: "Internal Complaints Committee",
      description:
        "Requires organizations to form an Internal Complaints Committee (ICC) for addressing complaints.",
    },
    {
      icon: Scale,
      title: "Grievance Redressal",
      description:
        "Ensures a structured grievance redressal mechanism for victims with fair procedures.",
    },
    {
      icon: Shield,
      title: "Non-Compliance Penalties",
      description:
        "Imposes strict penalties for non-compliance by employers to ensure accountability.",
    },
  ];

  const ourCommitments = [
    {
      icon: BookOpen,
      title: "Workplace Sensitization",
      description:
        "Conducting workplace sensitization and legal awareness workshops across organizations.",
    },
    {
      icon: Heart,
      title: "Survivor Support",
      description:
        "Supporting survivors by providing legal and psychological assistance through our network.",
    },
    {
      icon: CheckCircle,
      title: "Policy Implementation",
      description:
        "Collaborating with institutions to implement robust anti-harassment policies.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#006b5e]/5 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-[#006b5e]/10 text-[#006b5e] text-sm font-medium rounded-full mb-4">
                Legal Framework
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-[#006b5e] mb-6"
            >
              Prevention of Sexual Harassment (PoSH) Act
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Welcome to Sashaktikaran Foundation! As a dedicated not-for-profit
              organization, we align our work with key legal frameworks that
              protect and empower women and children. Below are the primary laws
              that guide our mission and initiatives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-6">
                Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Prevention of Sexual Harassment (PoSH) Act, 2013, is a
                crucial legislation that protects individuals, particularly
                women, from sexual harassment in workplaces. It ensures safe,
                respectful, and inclusive work environments by enforcing strict
                guidelines for reporting and addressing grievances.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This landmark legislation represents a significant step forward
                in creating safer workspaces and empowering victims to speak up
                against harassment without fear of retaliation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#006b5e]/5 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-[#006b5e] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#006b5e] text-center mb-4">
                PoSH Act 2013
              </h3>
              <p className="text-gray-600 text-center">
                Ensuring workplace safety and dignity for all, with special
                focus on protecting women from sexual harassment and creating
                accountability mechanisms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Provisions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-4">
              Key Provisions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the fundamental aspects of the PoSH Act that create
              safer workplaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyProvisions.map((provision, index) => {
              const IconComponent = provision.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#006b5e]/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-[#006b5e]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {provision.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {provision.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-4">
              Our Commitment to PoSH
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We advocate for the PoSH Act through comprehensive programs and
              support systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ourCommitments.map((commitment, index) => {
              const IconComponent = commitment.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#006b5e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {commitment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {commitment.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#006b5e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Supporting Workplace Safety
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join us in creating safer workplaces and supporting survivors.
              Together, we can build a world free from harassment and
              discrimination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#006b5e] hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Involved
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#006b5e] px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default PoSHActPage;
