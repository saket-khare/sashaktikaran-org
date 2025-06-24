import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  MapPin,
  Users,
  IndianRupee,
  Target,
  BookOpen,
  Calendar,
} from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

interface CampaignCardProps {
  campaign: CaseStudy;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  // Calculate funding progress if budget exists
  const fundingProgress = campaign.budget
    ? (campaign.budget.raised / campaign.budget.total) * 100
    : null;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#006b5e]/30 transition-all shadow-sm hover:shadow-lg"
    >
      <Link href={`/campaigns/${campaign.slug}`}>
        <div className="relative h-56 w-full">
          <Image
            src={campaign.image.url}
            alt={campaign.image.alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${
                campaign.status === "ongoing"
                  ? "bg-[#006b5e] text-white"
                  : "bg-white/90 text-[#006b5e]"
              }`}
            >
              {campaign.status === "ongoing" ? "Active" : "Planned"}
            </span>
          </div>

          {/* Campaign Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
              {campaign.title}
            </h3>
          </div>
        </div>

        <div className="p-6">
          {/* Summary */}
          <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
            {campaign.summary}
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <MapPin className="w-4 h-4 text-[#006b5e]" />
            <span className="text-sm">
              {campaign.location.city}, {campaign.location.state}
            </span>
          </div>

          {/* Key Features */}
          {campaign.features && campaign.features.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#006b5e]" />
                <span className="text-sm font-medium text-[#006b5e]">
                  Key Features
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {campaign.features[0].split(":")[0]}
              </div>
            </div>
          )}

          {/* Funding Progress Bar */}
          {campaign.budget && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-[#006b5e]">
                  Funding Progress
                </span>
                <span className="text-sm text-gray-600">
                  {fundingProgress?.toFixed(0)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#006b5e] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(fundingProgress || 0, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                <span>
                  ₹{(campaign.budget.raised / 100000).toFixed(1)}L raised
                </span>
                <span>
                  ₹{(campaign.budget.total / 100000).toFixed(1)}L goal
                </span>
              </div>
            </div>
          )}

          {/* Impact Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <Users className="w-5 h-5 text-[#006b5e] mx-auto mb-1" />
              <p className="text-sm font-semibold text-gray-900">
                {campaign.impact.livesChanged.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">Lives Impacted</p>
            </div>

            <div className="text-center">
              <Target className="w-5 h-5 text-[#006b5e] mx-auto mb-1" />
              <p className="text-sm font-semibold text-gray-900">
                {campaign.impact.participants}
              </p>
              <p className="text-xs text-gray-500">Partners</p>
            </div>

            <div className="text-center">
              <Calendar className="w-5 h-5 text-[#006b5e] mx-auto mb-1" />
              <p className="text-sm font-semibold text-gray-900">
                {new Date(campaign.date).toLocaleDateString("en-IN", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <p className="text-xs text-gray-500">Started</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-6">
            <div className="bg-[#006b5e]/5 hover:bg-[#006b5e]/10 transition-colors rounded-lg p-3 text-center">
              <span className="text-[#006b5e] font-medium text-sm">
                Learn More & Support →
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CampaignCard;
