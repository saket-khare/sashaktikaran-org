"use client";

import { caseStudies } from "@/data/caseStudies";
import {
  Calendar,
  CheckCircle,
  Heart,
  MapPin,
  Share2,
  Target,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import DonationModal from "@/components/ui/donation-modal";

// Generate metadata for individual campaign pages
export function generateMetadata({ params }: { params: { slug: string } }) {
  const campaign = caseStudies.find((study) => study.slug === params.slug);

  if (!campaign) {
    return {
      title: "Campaign Not Found",
      description: "The requested campaign could not be found.",
    };
  }

  return {
    title: campaign.metaTitle || `${campaign.title} | Sashaktikaran Foundation`,
    description: campaign.metaDescription || campaign.summary,
    keywords: campaign.tags,
    openGraph: {
      title: campaign.title,
      description: campaign.summary,
      images: [campaign.image.url],
      type: "article",
    },
  };
}

export default function CampaignPage() {
  const { slug } = useParams();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const campaign = caseStudies.find((study) => study.slug === slug);

  if (!campaign) {
    notFound();
  }

  const fundingProgress = campaign.budget
    ? (campaign.budget.raised / campaign.budget.total) * 100
    : null;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src={campaign.image.url}
          alt={campaign.image.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    campaign.status === "ongoing"
                      ? "bg-[#006b5e] text-white"
                      : "bg-white/90 text-[#006b5e]"
                  }`}
                >
                  {campaign.status === "ongoing"
                    ? "Active Campaign"
                    : "Planned Campaign"}
                </span>
                <button className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {campaign.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {campaign.location.city}, {campaign.location.state}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Started{" "}
                    {new Date(campaign.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>
                    {campaign.impact.livesChanged.toLocaleString()} lives
                    impacted
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Summary */}
                <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-[#006b5e] mb-4">
                    Campaign Overview
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {campaign.summary}
                  </p>
                </div>

                {/* Detailed Content */}
                <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-sm">
                  <h2 className="text-2xl font-bold text-[#006b5e] mb-6">
                    About This Campaign
                  </h2>
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-[#006b5e] prose-a:text-[#006b5e]"
                    dangerouslySetInnerHTML={{ __html: campaign.content }}
                  />
                </div>

                {/* Key Features */}
                {campaign.features && campaign.features.length > 0 && (
                  <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#006b5e] mb-6">
                      Key Features
                    </h2>
                    <div className="space-y-4">
                      {campaign.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <CheckCircle className="w-6 h-6 text-[#006b5e] flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {feature.split(":")[0]}
                            </h3>
                            {feature.includes(":") && (
                              <p className="text-gray-600">
                                {feature.split(":")[1].trim()}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gallery */}
                {campaign.gallery && campaign.gallery.length > 0 && (
                  <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#006b5e] mb-6">
                      Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {campaign.gallery.map((image, index) => (
                        <div
                          key={index}
                          className="relative h-64 rounded-xl overflow-hidden"
                        >
                          <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                          {image.caption && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                              {image.caption}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonials */}
                {campaign.testimonials && campaign.testimonials.length > 0 && (
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                    <h2 className="text-2xl font-bold text-[#006b5e] mb-6">
                      What People Say
                    </h2>
                    <div className="space-y-6">
                      {campaign.testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="bg-[#006b5e]/5 rounded-xl p-6"
                        >
                          <blockquote className="text-lg italic text-gray-700 mb-4">
                            "{testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#006b5e] rounded-full flex items-center justify-center">
                              <span className="text-white font-semibold text-lg">
                                {testimonial.author.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">
                                {testimonial.author}
                              </div>
                              <div className="text-sm text-gray-600">
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-6"
              >
                {/* Funding Progress */}
                {campaign.budget && (
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-[#006b5e] mb-4">
                      Campaign Funding
                    </h3>

                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Progress
                        </span>
                        <span className="text-sm text-gray-600">
                          {fundingProgress?.toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-[#006b5e] h-3 rounded-full transition-all duration-300"
                          style={{
                            width: `${Math.min(fundingProgress || 0, 100)}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Raised</span>
                        <span className="font-semibold text-[#006b5e]">
                          ₹{(campaign.budget.raised / 100000).toFixed(1)}L
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Goal</span>
                        <span className="font-semibold text-gray-900">
                          ₹{(campaign.budget.total / 100000).toFixed(1)}L
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-3">
                        <span className="text-gray-600">Still needed</span>
                        <span className="font-semibold text-[#006b5e]">
                          ₹
                          {(
                            (campaign.budget.total - campaign.budget.raised) /
                            100000
                          ).toFixed(1)}
                          L
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsDonationModalOpen(true)}
                      className="w-full bg-[#006b5e] hover:bg-[#006b5e]/90 text-white py-3 rounded-lg font-semibold transition-colors mb-3"
                    >
                      Support This Campaign
                    </button>

                    <button className="w-full border-2 border-[#006b5e] text-[#006b5e] hover:bg-[#006b5e] hover:text-white py-3 rounded-lg font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                )}

                {/* Impact Stats */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-[#006b5e] mb-4">
                    Impact So Far
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-[#006b5e]" />
                      <div>
                        <p className="text-sm text-gray-500">Lives Changed</p>
                        <p className="text-xl font-bold text-gray-900">
                          {campaign.impact.livesChanged.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-[#006b5e]" />
                      <div>
                        <p className="text-sm text-gray-500">
                          Community Partners
                        </p>
                        <p className="text-xl font-bold text-gray-900">
                          {campaign.impact.participants}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="w-6 h-6 text-[#006b5e]" />
                      <div>
                        <p className="text-sm text-gray-500">Total Donated</p>
                        <p className="text-xl font-bold text-gray-900">
                          ₹{(campaign.impact.amountDonated / 100000).toFixed(1)}
                          L
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partners */}
                {campaign.partners && campaign.partners.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-[#006b5e] mb-4">
                      Our Partners
                    </h3>
                    <ul className="space-y-3">
                      {campaign.partners.map((partner, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#006b5e] flex-shrink-0" />
                          <span className="text-gray-700">{partner}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold text-[#006b5e] mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {campaign.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#006b5e]/10 text-[#006b5e] rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </main>
  );
}
