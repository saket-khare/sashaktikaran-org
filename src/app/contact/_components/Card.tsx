"use client";
import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: [
        "A-3, 501, Priyadarshini Adhishthan,",
        "Bawadiya Kalan, Bhopal, MP - 462026",
      ],
      actionText: "Get Directions",
      action: () => {
        window.open("https://maps.app.goo.gl/9X5as2VacMx145uL8", "_blank");
      },
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 623 214 2245"],
      actionText: "Call Now",
      action: () => {
        window.open("tel:+916232142245", "_blank");
      },
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["admin@sashaktikaran.org"],
      actionText: "Send Email",
      action: () => {
        window.open("mailto:admin@sashaktikaran.org", "_blank");
      },
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
      ],
      actionText: "Office Hours",
      action: () => {
        window.open("mailto:admin@sashaktikaran.org", "_blank");
      },
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {contactInfo.map((info, index) => {
        return (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
          >
            <div className="w-16 h-16 bg-[#4996e4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <info.icon className="w-8 h-8 text-[#4996e4]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {info.title}
            </h3>
            <div className="space-y-1 mb-4">
              {info.details.map((detail: string, idx: number) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
            {info.action && (
              <Button
                onClick={info.action as () => void}
                className="
                cursor-pointer
                bg-[#4996e4] text-white text-sm font-medium hover:bg-[#4996e4]/80 transition-colors"
              >
                {info.actionText} →
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
