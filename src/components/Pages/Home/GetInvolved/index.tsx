"use client";

import { ArrowRight, Handshake, Heart, Users } from "lucide-react";
import { motion } from "motion/react";
import { BiRupee } from "react-icons/bi";

const GetInvolved = () => {
  // [AI] Three paths for contribution as specified
  const involvementPaths = [
    {
      icon: BiRupee,
      title: "Donate",
      description: "Sponsor a child's education or a Shiksha Sathi's training.",
      subDescription:
        "Your contribution directly supports our mission of empowering rural communities through education.",
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Collaborate with us for scale, tech, or outreach.",
      subDescription:
        "Join hands with us to create lasting impact through strategic partnerships and collaborations.",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Offer your skills in content, design, operations & more.",
      subDescription:
        "Share your expertise and be part of our journey to transform rural education.",
    },
  ];

  return (
    <section className="py-10 lg:py-20 bg-[#006b5e] text-white">
      <div className=" mx-auto px-4 md:px-8">
        {/* [AI] Section header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Help Us Educate, Empower, and Transform
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Every contribution, no matter the size or form, creates ripples of
            change across rural India
          </p>
        </div>

        {/* [AI] Involvement paths grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {involvementPaths.map((path, index) => {
            const IconComponent = path.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[#006b5e]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">{path.title}</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  {path.description}
                </p>
                <p className="text-white/70 text-sm mb-6">
                  {path.subDescription}
                </p>

                {/* Learn more link */}
                <div className="flex items-center text-white group-hover:text-white/80 transition-colors">
                  <span className="mr-2 font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* [AI] Additional context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-white/10 p-8 rounded-2xl max-w-4xl mx-auto backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#006b5e]" />
              </div>
              <h3 className="text-xl font-bold">Your Impact Multiplies</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              When you support us, you're not just helping one child or one
              woman — you're investing in an entire community's future.
              Together, we can create lasting change through education.
            </p>
          </div>
        </motion.div>

        {/* [AI] Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center pt-10"
        >
          <button className="bg-white text-[#006b5e] px-12 py-4 rounded-lg text-xl font-medium hover:bg-white/90 transition-all duration-300 inline-flex items-center space-x-3 group hover:shadow-lg">
            <span>Support the Mission</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;
