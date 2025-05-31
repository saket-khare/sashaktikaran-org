"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import CountUp from "react-countup";
import {
  MapPin,
  Users,
  GraduationCap,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import { TbMoodKid } from "react-icons/tb";
import { cn } from "@/lib/utils";

const Impact = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [playingStates, setPlayingStates] = useState([false, false, false]);

  const videos = [
    {
      src: "/videos/1.mp4",
      title: "Success Story 1",
      description: "Watch how we're transforming lives through education",
    },
    {
      src: "/videos/2.mp4",
      title: "Success Story 2",
      description: "See the impact of our community-led learning centers",
    },
    {
      src: "/videos/3.mp4",
      title: "Success Story 3",
      description: "Experience the journey of our Shiksha Sathis",
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
      label: "locations across 4 states",
      icon: MapPin,
    },
    {
      number: 20,
      label: "women trained as Shiksha Sathis",
      suffix: "+",
      icon: TbMoodKid,
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
    <section className="py-10 lg:py-20 w-full">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#006b5e] mb-4">
            Changing Lives, One Village at a Time
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
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
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#006b5e] rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#006b5e]">
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
            <h3 className="text-2xl font-bold text-[#006b5e] mb-4">
              Watch Our Impact Stories
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we're making a difference in rural communities through
              education
            </p>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#006b5e]/3 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                        playingStates[index] && "bg-white/10 text-white"
                      )}
                    >
                      {playingStates[index] ? (
                        <Pause
                          className={cn(
                            "w-8 h-8 text-[#006b5e]",
                            playingStates[index] && "text-white"
                          )}
                        />
                      ) : (
                        <Play
                          className={cn(
                            "w-8 h-8 text-[#006b5e]",
                            playingStates[index] && "text-white"
                          )}
                        />
                      )}
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden max-w-md mx-auto">
            <motion.div
              key={currentVideo}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#006b5e]/3 rounded-2xl overflow-hidden shadow-lg"
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
                      playingStates[currentVideo] && "bg-white/10 text-white"
                    )}
                  >
                    {playingStates[currentVideo] ? (
                      <Pause
                        className={cn(
                          "w-8 h-8 text-[#006b5e]",
                          playingStates[currentVideo] && "text-white"
                        )}
                      />
                    ) : (
                      <Play
                        className={cn(
                          "w-8 h-8 text-[#006b5e]",
                          playingStates[currentVideo] && "text-white"
                        )}
                      />
                    )}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {videos[currentVideo].title}
                </h4>
                <p className="text-gray-600">
                  {videos[currentVideo].description}
                </p>
              </div>
            </motion.div>

            {/* Mobile Navigation */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={prevVideo}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <ChevronLeft className="w-6 h-6 text-[#006b5e]" />
              </button>
              <div className="flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      currentVideo === index
                        ? "bg-[#006b5e] scale-125"
                        : "bg-[#006b5e]/30 hover:bg-[#006b5e]/50"
                    )}
                  />
                ))}
              </div>
              <button
                onClick={nextVideo}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <ChevronRight className="w-6 h-6 text-[#006b5e]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
