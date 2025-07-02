"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DonationModal from "../ui/donation-modal";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const footerLinks = {
    about: [
      { name: "Our Mission", href: "/about" },
      // { name: "Our Impact", href: "/impact" },
      { name: "Project Neev", href: "/campaigns/project-neev" },
      // { name: "Stories", href: "/stories" },
    ],
    getInvolved: [
      { name: "Donate", href: "/donate", isButton: true },
      // { name: "Partner", href: "/partner" },
      // { name: "Volunteer", href: "/volunteer" },
    ],
    legal: [
      { name: "PoSH Act", href: "/legal/posh-act" },
      { name: "JJ Act", href: "/legal/jj-act" },
      { name: "POCSO Act", href: "/legal/pocso-act" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Newsletter", href: "/newsletter" },
      { name: "Annual Report", href: "/annual-report" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/share/1E9rBqeAKG/?mibextid=wwXIfr",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/sashaktikaran.foundation?igsh=dW0za2FhczZveHc%3D&utm_source=qr",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/sashaktikaran-foundation/",
    },
  ];

  return (
    <footer className="bg-white text-black">
      <div className="px-4 md:px-8 pt-12 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-black.png"
                alt="Sashaktikaran"
                width={180}
                height={60}
                className="h-12 w-auto mix-blend-multiply"
              />
            </Link>
            <p className="text-black/80 text-sm leading-relaxed">
              Empowering rural communities through education, one village at a
              time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-black/80 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  {link.isButton ? (
                    <button
                      onClick={() => setIsDonationModalOpen(true)}
                      className="text-black/80 hover:text-black transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-black/80 hover:text-black transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Framework Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal Framework</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-black/80 hover:text-black transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-black/80 mt-1" />
                <span className="text-black/80">
                  A-3, 501, Priyadarshini Adhishthan, <br /> Bawadiya Kalan,
                  Bhopal, MP - 462026
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-black/80" />
                <a
                  href="tel:+916232142245"
                  className="text-black/80 hover:text-black transition-colors"
                >
                  +91 623 214 2245
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-black/80" />
                <a
                  href="mailto:contact@sashaktikaran.org"
                  className="text-black/80 hover:text-black transition-colors"
                >
                  admin@sashaktikaran.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-black/60 text-sm text-center">
              © {currentYear} Sashaktikaran. All rights reserved.
            </p>
            {/* <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-black/60 hover:text-black text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-black/60 hover:text-black text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;
