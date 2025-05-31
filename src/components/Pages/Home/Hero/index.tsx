import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png" // [AI] Replace with actual image path
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay */}
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            {/* Subheading */}
            <p className="text-sm uppercase tracking-wider text-white/90 mb-4">
              Because Education Empowers
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empower India's Future
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 mb-8">
              Support Our Mission to Educate & Empower Rural Communities
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors">
                Contribute Now
              </button>
              <button className="px-8 py-3 bg-white/10 text-white rounded-md font-medium hover:bg-white/20 transition-colors backdrop-blur-sm">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
