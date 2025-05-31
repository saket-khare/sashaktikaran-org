"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Check, Bell, Heart, Users } from "lucide-react";

const Newsletter = () => {
  // [AI] State for email input and submission status
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // [AI] Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Implement actual newsletter subscription logic
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  // [AI] Benefits of subscribing
  const benefits = [
    {
      icon: Bell,
      text: "Monthly updates on our progress and impact",
    },
    {
      icon: Heart,
      text: "Inspiring stories from the field",
    },
    {
      icon: Users,
      text: "Opportunities to support our mission",
    },
  ];

  return (
    <section className="py-10 lg:py-20 bg-[#006b5e] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* [AI] Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 lg:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated on Our Journey
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get regular updates on our progress, stories from the field, and
              ways to support our mission.
            </p>
          </motion.div>

          {/* [AI] Main subscription area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Benefits */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Why subscribe?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-[#006b5e]" />
                        </div>
                        <p className="text-white/90">{benefit.text}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right side - Subscription form */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-white mr-3" />
                    <h4 className="text-xl font-semibold">
                      Subscribe to Updates
                    </h4>
                  </div>

                  {isSubmitted ? (
                    // [AI] Success state
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center"
                    >
                      <Check className="w-12 h-12 text-white mx-auto mb-4" />
                      <p className="text-white font-medium mb-2">
                        Thank you for subscribing!
                      </p>
                      <p className="text-white/70 text-sm">
                        You'll hear from us soon with inspiring updates.
                      </p>
                    </motion.div>
                  ) : (
                    // [AI] Subscription form
                    <form onSubmit={handleSubscribe} className="space-y-4">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email address"
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-white focus:ring-2 focus:ring-white/20 outline-none transition-colors"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-white text-[#006b5e] px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 flex items-center justify-center space-x-2 group hover:shadow-lg"
                      >
                        <span>Subscribe</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}

                  <p className="text-sm text-white/50 text-center mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* [AI] Additional context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-white/80">
              Be among the first to know about our impact and how you can help
              transform rural education.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
