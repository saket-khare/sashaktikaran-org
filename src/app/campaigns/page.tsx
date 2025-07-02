import { Metadata } from "next";

// SEO metadata for campaigns page
export const metadata: Metadata = {
  title: "Our Campaigns - Active Education Initiatives",
  description:
    "Explore Sashaktikaran Foundation's active campaigns transforming rural communities through education. Support Project Neev and other initiatives that provide foundational learning to children in Madhya Pradesh.",
  keywords: [
    "education campaigns",
    "Project Neev",
    "rural education initiatives",
    "community campaigns",
    "foundational learning",
    "support education",
    "donate to education",
    "active campaigns",
  ],
  openGraph: {
    title: "Active Education Campaigns - Sashaktikaran Foundation",
    description:
      "Support our active campaigns bringing quality education to rural communities. Every contribution helps transform lives through foundational learning.",
    images: ["/neev.jpeg"],
  },
};

// import { motion } from "motion/react";
import CampaignCard from "@/components/Pages/Campaigns/CampaignCard";
import { caseStudies } from "@/data/caseStudies";

import DonateButton from "../about/_components/DonateButton";

const CampaignsPage = () => {
  // Filter only campaigns (ongoing or planned status)
  const campaigns = caseStudies.filter(
    (study) => study.status === "ongoing" || study.status === "planned"
  );

  return (
    <main className="pt-16">
      {/* Hero Section */}

      <section className="bg-[#006b5e]/5 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#006b5e] mb-6">
              Our Campaigns
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transforming communities through education, one campaign at a time
            </p>
            <DonateButton buttonText="Support a Campaign" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-2">
                {campaigns
                  .reduce(
                    (total, campaign) => total + campaign.impact.livesChanged,
                    0
                  )
                  .toLocaleString()}
                +
              </div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-2">
                {campaigns.length}
              </div>
              <div className="text-gray-600">Active Campaigns</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-2">
                {campaigns.reduce(
                  (total, campaign) => total + campaign.impact.participants,
                  0
                )}
                +
              </div>
              <div className="text-gray-600">Community Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-4">
              Active Campaigns
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each campaign represents our commitment to creating lasting change
              in rural communities through education and empowerment.
            </p>
          </div>

          {campaigns.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {campaigns.map((campaign, index) => (
                <div key={campaign.id}>
                  <CampaignCard campaign={campaign} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-white rounded-xl p-8 max-w-md mx-auto border border-gray-200">
                <h3 className="text-xl font-semibold text-[#006b5e] mb-2">
                  No Active Campaigns
                </h3>
                <p className="text-gray-600">
                  We're currently developing new campaigns. Check back soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#006b5e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join us in our mission to transform rural education. Every
              contribution helps us reach more children and empower more
              communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DonateButton buttonText="Support a Campaign" />
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#006b5e] px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn How to Help
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      {/* <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      /> */}
    </main>
  );
};

export default CampaignsPage;
