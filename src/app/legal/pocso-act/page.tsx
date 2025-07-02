import { Metadata } from "next";

// SEO metadata for POCSO Act page
export const metadata: Metadata = {
  title: "POCSO Act - Child Protection Framework",
  description:
    "Learn about the Protection of Children from Sexual Offences (POCSO) Act 2012 and how Sashaktikaran Foundation ensures child safety and protection in all our educational programs.",
  keywords: [
    "POCSO Act",
    "child protection",
    "sexual offences prevention",
    "child safety",
    "legal framework",
    "children's safety",
    "child welfare laws",
    "education safety",
  ],
  openGraph: {
    title: "POCSO Act - Child Protection Framework | Sashaktikaran Foundation",
    description:
      "Understanding the POCSO Act 2012 and our commitment to ensuring child safety and protection in all our educational initiatives.",
    images: ["/child-protection.jpeg"],
  },
};

import React from "react";
import {
  Shield,
  AlertTriangle,
  Scale,
  UserX,
  FileText,
  Phone,
  Heart,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const POCSActPage = () => {
  const keyProvisions = [
    {
      icon: AlertTriangle,
      title: "Comprehensive Definition",
      description:
        "Defines various forms of sexual abuse, including assault, harassment, and pornography involving children.",
    },
    {
      icon: Scale,
      title: "Stringent Punishment",
      description:
        "Mandates stringent punishment for offenders, ensuring child safety and deterring potential perpetrators.",
    },
    {
      icon: Users,
      title: "Child-Friendly Procedures",
      description:
        "Establishes child-friendly investigation and trial procedures to protect young victims during legal proceedings.",
    },
    {
      icon: FileText,
      title: "Mandatory Reporting",
      description:
        "Requires mandatory reporting of child sexual abuse cases by institutions and individuals.",
    },
  ];

  const childFriendlyFeatures = [
    {
      icon: Heart,
      title: "Sensitive Investigation",
      description:
        "Special procedures to ensure children are not re-traumatized during investigations.",
    },
    {
      icon: Shield,
      title: "Identity Protection",
      description:
        "Strict measures to protect the identity and privacy of child victims.",
    },
    {
      icon: UserX,
      title: "Zero Tolerance",
      description:
        "Absolute zero tolerance policy towards any form of child sexual abuse.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#4996e4]/5 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#4996e4]/10 text-[#4996e4] text-sm font-medium rounded-full mb-4">
                Legal Framework
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E46F49] mb-6">
              Protection of Children from Sexual Offences (POCSO) Act
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Welcome to Sashaktikaran Foundation! As a dedicated not-for-profit
              organization, we align our work with key legal frameworks that
              protect and empower women and children. Below are the primary laws
              that guide our mission and initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#4996e4] mb-6">
                Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Protection of Children from Sexual Offences (POCSO) Act,
                2012, is a landmark legislation in India designed to safeguard
                children from sexual abuse, harassment, and exploitation. The
                law ensures a child-friendly judicial process, emphasizing
                protection, justice, and rehabilitation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This comprehensive act recognizes the vulnerability of children
                and provides a robust legal framework to protect them from all
                forms of sexual offences while ensuring their dignity and
                privacy throughout the legal process.
              </p>
            </div>

            <div className="bg-[#4996e4]/5 rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#4996e4] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4996e4] text-center mb-4">
                POCSO Act 2012
              </h3>
              <p className="text-gray-600 text-center">
                A comprehensive legal framework dedicated to protecting children
                from sexual offences with child-friendly procedures and
                stringent punishment for offenders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Provisions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4996e4] mb-4">
              Key Provisions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the fundamental aspects of the POCSO Act that
              protect children from sexual offences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyProvisions.map((provision, index) => {
              const IconComponent = provision.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#4996e4]/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-[#4996e4]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {provision.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {provision.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Child-Friendly Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E46F49] mb-4">
              Child-Friendly Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Special measures designed to protect children throughout the legal
              process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {childFriendlyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#E46F49] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Role Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-[#4996e4] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4996e4] mb-6">
              Our Commitment to Child Safety
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At Sashaktikaran Foundation, we are committed to creating safe
              environments for all children. Our Shiksha Saathis are trained to
              recognize signs of abuse and follow proper reporting protocols in
              line with the POCSO Act. We maintain strict safeguarding policies
              and work closely with local authorities to ensure child
              protection.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-yellow-800 font-medium text-lg">
                <AlertTriangle className="w-5 h-5 inline mr-2" />
                If you suspect child abuse, report immediately to local
                authorities or call the Childline: 1098
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#4996e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Protecting Every Child
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join us in our mission to create a world where every child is safe
              from harm. Together, we can build stronger communities that
              protect our most vulnerable members.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default POCSActPage;
