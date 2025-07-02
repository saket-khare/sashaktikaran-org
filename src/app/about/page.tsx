"use client";

import { Button } from "@/components/ui/button";
import { Heart, MapPin, School, Users } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const AboutPage = () => {
  const achievements = [
    {
      number: "650+",
      label: "Students benefiting from our educational initiatives",
      icon: Users,
    },
    {
      number: "19",
      label: "Locations across Madhya Pradesh",
      icon: MapPin,
    },
    {
      number: "20",
      label: "Women recruited as Shiksha Saathis",
      icon: Heart,
    },
    {
      number: "10",
      label: "Government Schools under Project Neev",
      icon: School,
    },
  ];

  const teamMembers = [
    {
      name: "Shruti Shrivastava",
      role: "Founder Director",
      image: "/shruti.jpg", // Add actual image path
    },
    {
      name: "Smriti Shrivastava",
      role: "Co-director",
      image: "/smriti.png", // Add actual image path
    },
    {
      name: "Adarsh Mohandas",
      role: "Program Director",
      image: "/adarsh.png", // Add actual image path
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#006b5e]/5 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#006b5e] mb-6">
              Empowering children's futures
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Offering children hope, knowledge, and a path to a brighter
              future.
            </p>
            <div>
              <Button className="bg-[#006b5e] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#006b5e]/90 transition-all duration-300">
                Contribute Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-700 leading-relaxed">
                Sashaktikaran Foundation was incorporated as a not-for-profit
                Section 8 Company on March 8, 2017—International Women's Day—a
                date that aligns with our core principle of empowering women and
                children. The organization was founded by Ms. Mrinalika Rathore,
                who later became an IAS officer. Following her transition to
                public service, Ms. Shruti Shrivastava took over as the new
                Director. Under her leadership, we have revitalized the
                organization, expanding our scope of operations throughout
                Madhya Pradesh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-[#006b5e]/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-4">
              Our achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What we do speaks for what we've achieved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#006b5e] rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#006b5e] mb-2">
                    {achievement.number}
                  </h3>
                  <p className="text-gray-600">{achievement.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our team of heroes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-96">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#006b5e]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#006b5e]/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-6">
              Become A Part Of This Life-Changing Journey
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Become a member and help us improve the world.
            </p>
            <Button className="bg-[#006b5e] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#006b5e]/90 transition-all duration-300">
              Contribute Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
