"use client";

import { ArrowRight, Heart, BookOpen, TreePine } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

interface StoriesProps {
  onContributeClick?: () => void;
}

const Stories = ({ onContributeClick }: StoriesProps) => {
  // [AI] Example stories as specified in the requirements
  const stories = [
    {
      title: "From Farmer's Daughter to Village Teacher",
      excerpt:
        "Radha never thought education was for her. Today, she teaches 30 children and dreams of opening her own school.",
      icon: Heart,
      image: "/raju.jpeg",
    },
    {
      title: "When Raju Learned to Count",
      excerpt:
        "At 8 years old, Raju couldn't count to 10. Six months later, he's helping his father calculate crop yields.",
      icon: BookOpen,
      image: "/raju2.jpeg",
    },
    {
      title: "A Classroom Under a Tree — and a Dream That Grew",
      excerpt:
        "What started as lessons under a banyan tree has become a thriving learning center for 50+ children.",
      icon: TreePine,
      image: "/raju3.jpeg",
    },
  ];

  return (
    <section className="py-10 lg:py-20">
      <div className=" mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-4">
            Real Stories. Real Impact.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every statistic has a face, every number has a name. These are the
            voices of change from rural India.
          </p>
        </div>

        {/* Stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#006b5e] rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#006b5e] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {story.excerpt}
                  </p>

                  {/* Read more link */}
                  <div className="flex items-center text-[#006b5e] group-hover:text-[#006b5e]/80 transition-colors">
                    <span className="mr-2 font-medium">Read full story</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#006b5e]/3 p-8 rounded-2xl max-w-3xl mx-auto">
            <p className="text-2xl font-bold text-[#006b5e] mb-4">
              Every story starts with a single step toward education
            </p>
            <p className="text-lg text-gray-600">
              Will you be part of writing the next chapter?
            </p>
          </div>

          {/* Contribute Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center pt-10"
          >
            <button
              onClick={onContributeClick}
              className="bg-[#006b5e] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#006b5e]/90 transition-all duration-300 flex items-center space-x-2 group hover:shadow-lg mx-auto"
            >
              <span>Contribute to our mission</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stories;
