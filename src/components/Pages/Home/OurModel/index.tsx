import React from "react";
import { Users, BookOpen, Wifi, MapPin } from "lucide-react";
import { TbMoodKid } from "react-icons/tb";

const OurModel = () => {
  // [AI] Data for the four key pillars of the approach
  const modelPoints = [
    {
      icon: Users,
      title: "Upskill Women with 21st Century skills",
      description:
        "We equip local women with the tools and training to become educators.",
      bgColor: "#E46F49", // Radiate
      textColor: "text-white",
      iconColor: "#FFFADD", // Pearl for icon
    },
    {
      icon: BookOpen,
      title: "Provide Quality Education",
      description: "Preparing children for the fast-changing world.",
      bgColor: "#4996e4", // Radiate
      textColor: "text-white",
      iconColor: "#FFFADD", // Pearl for icon
    },
    {
      icon: Wifi,
      title: "Bridge the Digital Divide",
      description:
        "We use affordable tech to deliver curriculum and mentorship at scale.",
      bgColor: "#4996e4", // Radiate
      textColor: "text-white",
      iconColor: "#FFFADD", // Pearl for icon
    },
    {
      icon: MapPin,
      title: "Rooted in Community, Built for Scale",
      description:
        "Every program is adapted to local needs, ensuring relevance and trust.",
      bgColor: "#E46F49", // Radiate
      textColor: "text-white",
      iconColor: "#FFFADD", // Pearl for icon
    },
  ];

  return (
    <section className="py-20 w-full" style={{ backgroundColor: "#fff" }}>
      <div className="mx-auto px-4 md:px-8">
        {/* [AI] Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E46F49] mb-4">
            How We Make It{" "}
            <span className="text-[#4996e4] font-black">Happen</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
                className="p-8 rounded-2xl transition-shadow duration-300"
                style={{ backgroundColor: point.bgColor }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6`}
                  style={{ backgroundColor: point.iconColor }}
                >
                  <IconComponent
                    className="w-8 h-8"
                    style={{ color: point.bgColor }}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`text-xl font-bold mb-4 leading-tight ${point.textColor}`}
                >
                  {point.title}
                </h3>
                <p className={`${point.textColor} leading-relaxed`}>
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
