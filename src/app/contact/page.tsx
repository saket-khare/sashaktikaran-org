import { Metadata } from "next";

// SEO metadata for contact page
export const metadata: Metadata = {
  title: "Contact Us - Get In Touch",
  description:
    "Get in touch with Sashaktikaran Foundation. Contact us for partnerships, donations, volunteer opportunities, or general inquiries about our rural education initiatives.",
  keywords: [
    "contact sashaktikaran foundation",
    "get in touch",
    "partnership opportunities",
    "volunteer with us",
    "donation inquiries",
    "rural education contact",
    "NGO contact",
    "support education",
  ],
  openGraph: {
    title: "Contact Sashaktikaran Foundation - Get In Touch",
    description:
      "Contact us for partnerships, donations, volunteer opportunities, or inquiries about our rural education initiatives. We'd love to hear from you.",
    images: ["/contact.jpeg"],
  },
};

import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import ContactInfo from "./_components/Card";
import ContactForm from "./_components/form";
import Link from "next/link";

const ContactPage = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/sashaktikaran",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/sashaktikaran",
      color: "#E4405F",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/sashaktikaran",
      color: "#0A66C2",
    },
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#4996e4]/5 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4996e4] mb-6">
              Get In <span className="text-[#E46F49]">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
            <Link href="/contact">
              <Button className="bg-[#4996e4] text-white px-8 py-4 rounded-lg font-medium hover:bg-[#4996e4]/90 transition-all duration-300">
                Send Us a Message
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4996e4] mb-4">
              Contact <span className="text-[#E46F49]">Information</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for any questions, partnerships, or
              support
            </p>
          </div>

          <ContactInfo />
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-[#4996e4] mb-6">
                  Send Us a Message
                </h2>

                <ContactForm />
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="h-64 bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#4996e4] mx-auto mb-2" />
                    <p className="text-gray-600">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.4183197753189!2d77.44249286280831!3d23.18544678814618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c439581824d1d%3A0x7862fd7c89a3d316!2sPriyadarshini%20Adhishthan!5e1!3m2!1sen!2sin!4v1751471532763!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </p>
                    <p className="text-sm text-gray-500">
                      A-3, 501, Priyadarshini Adhishthan, Bawadiya Kalan,
                      Bhopal, MP - 462026
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-[#4996e4] mb-4">
                  Follow Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay connected with our latest updates and impact stories
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#4996e4]/10 rounded-full flex items-center justify-center hover:bg-[#4996e4] hover:text-white transition-colors group"
                      >
                        <IconComponent className="w-6 h-6 text-[#4996e4] group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4996e4] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our work and how you can
              get involved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How can I volunteer with Sashaktikaran?",
                answer:
                  "We offer various volunteer opportunities including teaching, content creation, and field support. Contact us to learn about current openings.",
              },
              {
                question: "What donation methods do you accept?",
                answer:
                  "We accept donations via bank transfer, online payment platforms, and checks. All donations are tax-deductible with proper receipts.",
              },
              {
                question: "How can organizations partner with you?",
                answer:
                  "We welcome partnerships with educational institutions, NGOs, and corporations. Reach out to discuss collaboration opportunities.",
              },
              {
                question: "Can I visit your project locations?",
                answer:
                  "Yes, we organize field visits for supporters and partners. Contact us to schedule a visit to our project sites.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
