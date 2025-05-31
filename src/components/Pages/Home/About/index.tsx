import React from "react";
import Image from "next/image";
import { Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/about.jpeg"
              alt="About Sashaktikaran Foundation"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Unlocking India's Potential
            </h2>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                India stands at a pivotal moment. With 123 million children aged
                in "rural India" 5-12, equal to Japan's entire population, our
                potential is immense. Yet, rural India, home to 63.4% of our
                people, risks being left behind.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <p className="text-lg leading-relaxed">
                  Only 51% of our youth are employable. Over half of rural fifth
                  graders can't read second-grade texts, and two-thirds of third
                  graders struggle with basic math.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                Sashaktikaran Foundation believes India's growth depends on
                empowering rural children and women. We invest in foundational
                education today for a thriving tomorrow.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-2xl font-bold text-primary">123M</p>
                <p className="text-sm text-gray-600">Children in Rural India</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-2xl font-bold text-primary">63.4%</p>
                <p className="text-sm text-gray-600">Rural Population</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
