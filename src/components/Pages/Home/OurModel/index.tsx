import React from "react";
import { Users, BookOpen, Wifi, MapPin } from "lucide-react";
import { TbMoodKid } from "react-icons/tb";

const OurModel = () => {
  // [AI] Data for the four key pillars of the approach
  const modelPoints = [
    {
      icon: Users,
      title: "Train Rural Women as Shiksha Sathis",
      description:
        "We equip local women with the tools and training to become educators.",
      bgColor: "bg-blue-500",
    },
    {
      icon: BookOpen,
      title: "Teach Foundational Education",
      description: "Children learn language, math, values, and curiosity.",
      bgColor: "bg-green-500",
    },
    {
      icon: Wifi,
      title: "Bridge the Digital Divide",
      description:
        "We use affordable tech to deliver curriculum and mentorship at scale.",
      bgColor: "bg-purple-500",
    },
    {
      icon: MapPin,
      title: "Rooted in Community, Built for Scale",
      description:
        "Every program is adapted to local needs, ensuring relevance and trust.",
      bgColor: "bg-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-[#006b5e] w-full">
      <div className=" mx-auto px-4 md:px-8">
        {/* [AI] Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We Make It Happen
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            We believe sustainable change happens when we empower local
            communities to lead their own transformation
          </p>
        </div>

        {/* [AI] Model points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {modelPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                className="bg-white/5 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6`}
                >
                  <IconComponent className="w-8 h-8 text-[#006b5e]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {point.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurModel;
