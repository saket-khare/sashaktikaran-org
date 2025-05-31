import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Users, IndianRupee, Calendar, Tag } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ caseStudy }) => {
  return (
    <article className="py-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={caseStudy.image.url}
          alt={caseStudy.image.alt}
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
              <span className="inline-block px-3 py-1 bg-primary/90 text-white text-sm rounded-full mb-4">
                {caseStudy.status}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {caseStudy.title}
              </h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>
                    {caseStudy.location.city}, {caseStudy.location.state}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(caseStudy.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-600 mb-8">{caseStudy.summary}</p>
              <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
            </motion.div>

            {/* Gallery */}
            {caseStudy.gallery && caseStudy.gallery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {caseStudy.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-64 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm">
                          {image.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Testimonials */}
            {caseStudy.testimonials && caseStudy.testimonials.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Testimonials
                </h2>
                <div className="space-y-6">
                  {caseStudy.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-slate-50 p-6 rounded-lg">
                      <p className="text-gray-600 italic mb-4">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Impact Stats */}
              <div className="bg-white rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Impact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Lives Changed</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {caseStudy.impact.livesChanged.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <IndianRupee className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Amount Donated</p>
                      <p className="text-lg font-semibold text-gray-900">
                        ₹{(caseStudy.impact.amountDonated / 100000).toFixed(1)}L
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-gray-500">Participants</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {caseStudy.impact.participants.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Partners */}
              {caseStudy.partners && caseStudy.partners.length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Partners
                  </h3>
                  <ul className="space-y-2">
                    {caseStudy.partners.map((partner, index) => (
                      <li key={index} className="text-gray-600">
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solutions */}
              <div className="bg-white rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Challenges & Solutions
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Challenges
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {caseStudy.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Solutions
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {caseStudy.solutions.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyPage;
