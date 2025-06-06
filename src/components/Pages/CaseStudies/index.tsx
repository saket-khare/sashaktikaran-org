import React from "react";
import { motion } from "motion/react";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Our Impact Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we're making a difference in communities across India
            through our various initiatives and programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
