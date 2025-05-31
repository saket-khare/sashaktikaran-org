import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image with Subtle Warm Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero2.jpeg" // [AI] Heartfelt photo of rural woman teaching children
          alt="Rural woman teaching children - Education Starts With Her"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />{" "}
        {/* [AI] Subtle overlay for warmth */}
      </div>

      {/* [AI] Centered Content - matches reference image */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-8 ">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering rural communities
              <br />
              through education
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              We provide foundational education to children and women in remote
              villages, bridging gaps with technology.
            </p>
            <button className="px-8 py-4 bg-white/90 text-gray-900 rounded-md font-semibold text-lg shadow hover:bg-white transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
