"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MapPin, Pause, Play } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import CountUp from "react-countup";
import { RiWomenLine } from "react-icons/ri";
import { TbMoodKid } from "react-icons/tb";

const Impact = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingStates, setPlayingStates] = useState([false, false, false]);

  const videos = [
    {
      src: "/videos/3.mp4",
      title: "Success Story 1",
      description: "Experience the journey of our Shiksha Sathis",
    },
    {
      src: "/videos/1.mp4",
      title: "Success Story 2",
      description: "Watch how we're transforming lives through education",
    },
    {
      src: "/videos/2.mp4",
      title: "Success Story 3",
      description: "See the impact of our community-led learning centers",
    },
  ];

  const testimonials = [
    {
      quote:
        "I never imagined I could teach. Now the kids call me didi, and I feel proud every day.",
      author: "Meena",
      role: "Shiksha Sathi from Jharkhand",
    },
    {
      quote:
        "Teaching these children has given me a new purpose in life. I'm learning as much as I'm teaching.",
      author: "Lakshmi",
      role: "Shiksha Sathi from Odisha",
    },
    {
      quote:
        "The joy of seeing children learn and grow is indescribable. This is more than just a job.",
      author: "Priya",
      role: "Shiksha Sathi from Chhattisgarh",
    },
  ];

  const impactStats = [
    {
      number: 19,
      label: "institutions across 6 districts",
      icon: MapPin,
    },
    {
      number: 20,
      label: "women impacted",
      suffix: "+",
      icon: RiWomenLine,
    },
    {
      number: 650,
      label: "students impacted",
      suffix: "+",
      icon: TbMoodKid,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const togglePlay = (index: number) => {
    const newPlayingStates = [...playingStates];
    newPlayingStates[index] = !newPlayingStates[index];
    setPlayingStates(newPlayingStates);

    if (videoRefs.current[index]) {
      if (newPlayingStates[index]) {
        videoRefs.current[index]?.play();
      } else {
        videoRefs.current[index]?.pause();
      }
    }
  };

  return (
    <section className="py-10 lg:py-20 w-full bg-[#fff]">
      <div className="px-4 md:px-8">
        {/* Decorative wavy divider at top */}
        {/* <div className="relative mb-8">
          <svg
            className="absolute -top-10 left-0 w-full h-8 text-[#E46F49]"
            viewBox="0 0 1200 40"
            fill="currentColor"
          >
            <path d="M0,20 Q300,0 600,20 T1200,20 L1200,40 L0,40 Z" />
          </svg>
        </div> */}

        {/* Section Heading */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E46F49] mb-4">
            Changing Lives,{" "}
            <span className="text-[#4996e4] font-black">One Village</span> at a
            Time
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Every number represents a life touched, a dream realized, and a
            community transformed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Image Section */}
          <div className="relative rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/mission2.jpg"
              alt="Children learning with women educators"
              fill
              className="object-cover object-[center_30%]"
              priority
            />
          </div>

          {/* Stats Section */}
          <div className="flex flex-col gap-4">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#4996e4] rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#4996e4]">
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          enableScrollSpy
                          scrollSpyOnce
                          suffix={stat.suffix || ""}
                        />
                      </div>
                      <p className="text-gray-700 text-lg font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Video Reel Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#E46F49] mb-4">
              Watch Our Impact{" "}
              <span className="text-[#4996e4] font-black">Stories</span>
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              See how we're making a difference in rural communities through
              education
            </p>
          </div>

          {/* Desktop Grid View */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[9/16]">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    onClick={() => togglePlay(index)}
                    src={video.src}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button
                      onClick={() => togglePlay(index)}
                      className={cn(
                        "w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110",
                        playingStates[index] && "bg-[#E46F49]/90 text-white"
                      )}
                    >
                      {playingStates[index] ? (
                        <Pause
                          className={cn(
                            "w-8 h-8 text-[#E46F49]",
                            playingStates[index] && "text-white"
                          )}
                        />
                      ) : (
                        <Play
                          className={cn(
                            "w-8 h-8 text-[#E46F49]",
                            playingStates[index] && "text-white"
                          )}
                        />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="hidden max-w-md mx-auto">
            <motion.div
              key={currentVideo}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <div className="relative aspect-[9/16]">
                <video
                  ref={(el) => {
                    videoRefs.current[currentVideo] = el;
                  }}
                  onClick={() => togglePlay(currentVideo)}
                  src={videos[currentVideo].src}
                  className="w-full h-full object-cover"
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button
                    onClick={() => togglePlay(currentVideo)}
                    className={cn(
                      "w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110",
                      playingStates[currentVideo] &&
                        "bg-[#E46F49]/90 text-white"
                    )}
                  >
                    {playingStates[currentVideo] ? (
                      <Pause
                        className={cn(
                          "w-8 h-8 text-[#E46F49]",
                          playingStates[currentVideo] && "text-white"
                        )}
                      />
                    ) : (
                      <Play
                        className={cn(
                          "w-8 h-8 text-[#E46F49]",
                          playingStates[currentVideo] && "text-white"
                        )}
                      />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Mobile Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevVideo}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-100"
              >
                <ChevronLeft className="w-6 h-6 text-[#E46F49]" />
              </button>
              <div className="flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      currentVideo === index
                        ? "bg-[#E46F49] scale-125"
                        : "bg-[#E46F49]/30 hover:bg-[#E46F49]/50"
                    )}
                  />
                ))}
              </div>
              <button
                onClick={nextVideo}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-lg border border-gray-100"
              >
                <ChevronRight className="w-6 h-6 text-[#E46F49]" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative wavy divider at bottom */}
        {/* <div className="relative mt-8">
          <svg
            className="absolute -bottom-10 left-0 w-full h-8 text-[#E46F49] rotate-180"
            viewBox="0 0 1200 40"
            fill="currentColor"
          >
            <path d="M0,20 Q300,0 600,20 T1200,20 L1200,40 L0,40 Z" />
          </svg>
        </div> */}
      </div>
    </section>
  );
};

export default Impact;
