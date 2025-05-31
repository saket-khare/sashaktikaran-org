import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Users, IndianRupee, Calendar } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-slate-200 transition-all"
    >
      <Link href={`/case-studies/${caseStudy.slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={caseStudy.image.url}
            alt={caseStudy.image.alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <span className="inline-block px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
              {caseStudy.status}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {caseStudy.title}
          </h3>

          <p className="text-gray-600 mb-4 line-clamp-2">{caseStudy.summary}</p>

          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              {caseStudy.location.city}, {caseStudy.location.state}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div className="text-center">
              <Users className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-sm font-medium text-gray-900">
                {caseStudy.impact.livesChanged.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">Lives Changed</p>
            </div>
            <div className="text-center">
              <IndianRupee className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-sm font-medium text-gray-900">
                ₹{(caseStudy.impact.amountDonated / 100000).toFixed(1)}L
              </p>
              <p className="text-xs text-gray-500">Donated</p>
            </div>
            <div className="text-center">
              <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-sm font-medium text-gray-900">
                {new Date(caseStudy.date).toLocaleDateString("en-IN", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <p className="text-xs text-gray-500">Started</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseStudyCard;
