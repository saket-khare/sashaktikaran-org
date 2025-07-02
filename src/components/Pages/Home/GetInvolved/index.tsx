"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake, Heart, Users } from "lucide-react";
import { motion } from "motion/react";
import { BiRupee } from "react-icons/bi";

interface GetInvolvedProps {
  onContributeClick?: () => void;
}

const GetInvolved = ({ onContributeClick }: GetInvolvedProps) => {
  // [AI] Three paths for contribution as specified
  const involvementPaths = [
    {
      icon: BiRupee,
      title: "Donate",
      description: "Sponsor a child's education or a Shiksha Sathi's training.",
      subDescription:
        "Your contribution directly supports our mission of empowering rural communities through education.",
      action: () => onContributeClick?.(),
      color: "#4996e4", // Blue
    },
    {
      icon: Handshake,
      title: "Partner",
      description: "Collaborate with us for scale, tech, or outreach.",
      subDescription:
        "Join hands with us to create lasting impact through strategic partnerships and collaborations.",
      action: () => {
        const subject = encodeURIComponent(
          "Partnership Inquiry - Sashaktikaran Foundation"
        );
        const body = encodeURIComponent(
          "Hello,\n\nI'm interested in partnering with Sashaktikaran Foundation. Please provide more information about partnership opportunities.\n\nBest regards,\n[Your Name]"
        );
        window.open(
          `mailto:info@sashaktikaran.org?subject=${subject}&body=${body}`
        );
      },
      color: "#E46F49", // Orange
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Offer your skills in content, design, operations & more.",
      subDescription:
        "Share your expertise and be part of our journey to transform rural education.",
      action: () => {
        const subject = encodeURIComponent(
          "Volunteer Application - Sashaktikaran Foundation"
        );
        const body = encodeURIComponent(
          "Hello,\n\nI'm interested in volunteering with Sashaktikaran Foundation. Please provide more information about volunteer opportunities.\n\nBest regards,\n[Your Name]"
        );
        window.open(
          `mailto:info@sashaktikaran.org?subject=${subject}&body=${body}`
        );
      },
      color: "#4996e4", // Blue
    },
  ];

  return (
    <section className="py-10 lg:py-0  text-white">
      <div className=" mx-auto px-4 md:px-8">
        {/* [AI] Section header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#E46F49]">
            Help Us Educate, Empower and Transform
          </h2>
          <p className="text-lg text-[#000] max-w-3xl mx-auto">
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
                className="p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 group cursor-pointer backdrop-blur-sm border border-white/20"
                style={{ backgroundColor: `${path.color}` }}
                onClick={path.action}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent
                      className="w-6 h-6"
                      style={{ color: path.color }}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {path.title}
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  {path.description}
                </p>
                <p className="text-white/70 text-sm mb-6">
                  {path.subDescription}
                </p>

                {/* Learn more link */}
                <div className="flex items-center text-white group-hover:text-white/80 transition-colors">
                  <span className="mr-2 font-medium">
                    {path.title === "Donate" ? "Donate Now" : "Get Started"}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* [AI] Additional context */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="bg-white/10 p-8 rounded-2xl max-w-4xl mx-auto backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#E46F49" }}
              >
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Your Impact Multiplies</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              When you support us, you're not just helping one child or one
              woman — you're investing in an entire community's future.
              Together, we can create lasting change through education.
            </p>
          </div>
        </motion.div> */}

        {/* [AI] Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center pt-0 pb-10"
        >
          <Button
            onClick={onContributeClick}
            variant="default"
            className="bg-[#4996e4] cursor-pointer hover:bg-[#4996e4]/90"
          >
            <span>Support the Mission</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;
