import { Metadata } from "next";

// SEO metadata for JJ Act page
export const metadata: Metadata = {
  title: "Juvenile Justice (JJ) Act - Legal Framework",
  description:
    "Learn about the Juvenile Justice (Care and Protection of Children) Act 2015 and how Sashaktikaran Foundation aligns with this legal framework to protect children's rights and ensure their welfare.",
  keywords: [
    "Juvenile Justice Act",
    "JJ Act 2015",
    "child protection laws",
    "children's rights",
    "legal framework",
    "child welfare",
    "rehabilitation",
    "child care",
  ],
  openGraph: {
    title: "Juvenile Justice Act - Legal Framework | Sashaktikaran Foundation",
    description:
      "Understanding the JJ Act 2015 and our commitment to child protection, rehabilitation, and welfare in all our educational initiatives.",
    images: ["/legal-framework.jpeg"],
  },
};

import React from "react";
import {
  Heart,
  Users,
  Shield,
  BookOpen,
  UserCheck,
  Scale,
  Phone,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const JJActPage = () => {
  const keyProvisions = [
    {
      icon: Shield,
      title: "Child Care Framework",
      description:
        "Establishes a comprehensive framework for the care, protection, and rehabilitation of children.",
    },
    {
      icon: Heart,
      title: "Adoption & Foster Care",
      description:
        "Provides clear guidelines for adoption and foster care processes to ensure child welfare.",
    },
    {
      icon: Scale,
      title: "Legal Procedures",
      description:
        "Defines legal procedures for juveniles in conflict with the law, emphasizing rehabilitation over punishment.",
    },
    {
      icon: Users,
      title: "Child Welfare Committees",
      description:
        "Strengthens child welfare committees to address cases of neglect and abuse effectively.",
    },
  ];

  const ourAlignment = [
    {
      icon: BookOpen,
      title: "Regular Awareness Sessions",
      description:
        "Sensitize our Shiksha Saathi's regarding these acts and their provisions regularly through Awareness & Capacity Building Sessions.",
    },
    {
      icon: UserCheck,
      title: "Authority Coordination",
      description:
        "Be in constant touch with the local authorities to report matters pertaining to these Acts for swift resolution.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#006b5e]/5 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#006b5e]/10 text-[#006b5e] text-sm font-medium rounded-full mb-4">
                Legal Framework
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#006b5e] mb-6">
              Juvenile Justice (JJ) Act
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-6">
                Overview
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Juvenile Justice (Care and Protection of Children) Act, of
                2015, ensures the rights, dignity, and rehabilitation of
                children in conflict with the law and those in need of care and
                protection. It prioritizes reformative measures over punitive
                actions, emphasizing child welfare and development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This comprehensive legislation recognizes that children require
                special protection and care, focusing on their rehabilitation
                and reintegration into society rather than punishment.
              </p>
            </div>

            <div className="bg-[#006b5e]/5 rounded-2xl p-8">
              <div className="w-16 h-16 bg-[#006b5e] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#006b5e] text-center mb-4">
                JJ Act 2015
              </h3>
              <p className="text-gray-600 text-center">
                Protecting children's rights and dignity, ensuring
                rehabilitation over punishment, and creating a supportive
                framework for vulnerable children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Provisions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-4">
              Key Provisions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the fundamental aspects of the JJ Act that protect
              and rehabilitate children
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
                  <div className="w-12 h-12 bg-[#006b5e]/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-[#006b5e]" />
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

      {/* Our Alignment Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-4">
              How We Align with These Policies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to child protection through education and community
              engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ourAlignment.map((alignment, index) => {
              const IconComponent = alignment.icon;
              return (
                <div
                  key={index}
                  className="bg-[#006b5e]/5 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-[#006b5e] rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {alignment.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {alignment.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statement Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-[#006b5e] rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-6">
              Child Protection is Our Priority
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Through our educational programs and community outreach, we ensure
              that children's rights are protected and their voices are heard.
              Our Shiksha Saathis are trained to identify and report any
              concerns related to child welfare, creating a protective network
              that aligns with the principles of the Juvenile Justice Act.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#006b5e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Protecting Children's Rights
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join us in creating a safer world for children. Every child
              deserves protection, care, and the opportunity to grow in a
              supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#006b5e] hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors">
                Support Our Mission
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#006b5e] px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Report Concerns
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JJActPage;
