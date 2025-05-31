import React from "react";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";

const About = () => {
  return (
    <section className="py-10 lg:py-20 bg-white relative overflow-hidden w-full">
      <div className=" mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-4">
            Why We Exist
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our mission and vision drive everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            {/* Mission Section */}
            <div className="bg-[#006b5e]/3 flex flex-col gap-2 p-8 rounded-2xl">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-[#006b5e]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower rural women and children through holistic,
                foundational education.
              </p>
            </div>

            {/* Vision Section */}
            <div className="bg-[#006b5e]/3 flex flex-col gap-2 p-8 rounded-2xl">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-[#006b5e]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To ensure every child in rural India has access to quality
                learning — led by the very communities they belong to.
              </p>
            </div>

            {/* [AI] Supporting statement */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-lg text-gray-600 italic text-center">
                "Education transforms not just individuals, but entire
                communities"
              </p>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/mission1.jpeg"
              alt="Children learning with women educators"
              fill
              className="object-cover object-[center_35%]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
