"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  const handleLearnMoreClick = () => {
    // Scroll to the About section using smooth scrolling
    const viewport = window.innerHeight;
    window.scrollTo({
      top: viewport,
      behavior: "smooth",
    });
  };

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
      <div className="relative h-full flex items-start mt-56 justify-center">
        <div className="container mx-auto px-4 md:px-8 ">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Empowering{" "}
              <span className="text-[#fff] font-black">
                vulnerable communities
              </span>
              <br />
              through education
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Envisioning a world where each child has access to quality
              education and no woman is discriminated against.
            </p>
            <button
              onClick={handleLearnMoreClick}
              className="px-8 py-2 bg-white/90 text-gray-900 rounded-md font-semibold text-lg shadow hover:bg-white transition-colors cursor-pointer"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      {/* Partnership Section */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center pb-6">
        <div className="w-full flex justify-center mb-2">
          <div className="h-px w-2/3 bg-white/30" />
        </div>
        <span className="text-white text-sm md:text-base mb-2 opacity-90 text-center">
          In partnership with the following departments of the Government of
          Madhya Pradesh:
        </span>
        <div className="flex gap-6 md:gap-10 items-center mb-2 flex-wrap justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/mpd.png"
              alt="Madhya Pradesh Department of Tribal Affairs / Department of Education Logo"
              width={60}
              height={60}
              className="object-contain h-12 w-auto md:h-16 mix-blend-multply rounded-full"
            />
            <span className="text-white text-xs mt-1 text-center max-w-[180px]">
              Department of Tribal Affairs
              <br />
              Department of Education
            </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/mpe.png"
              alt="Madhya Pradesh Department of DNSN Logo"
              width={60}
              height={60}
              className="object-contain h-12 w-auto md:h-16 mix-blend-multply rounded-full"
            />
            <span className="text-white text-xs mt-1 text-center max-w-[180px]">
              Denotified Tribes (DNTs), Nomadic and Semi-Nomadic Tribes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
