"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import DonationModal from "../ui/donation-modal";
import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/campaigns" },
    { name: "Contact Us", path: "/contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    menu: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    close: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 relative">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center space-x-2 group"
            >
              {/* Logo placeholder - replace src with your logo */}

              <Image
                src="/logo-black.png"
                alt="Sashaktikaran"
                width={100}
                height={100}
                className="h-10 w-auto"
              />
              {/* <div className="w-10 h-10 bg-[#006b5e] rounded-full transition-transform duration-300 group-hover:scale-105"></div>
              <span className="text-xl font-bold text-[#006b5e]">
                Sashaktikaran
              </span> */}
            </Link>
          </div>

          {/* Desktop menu - centered */}
          <div className="hidden md:flex items-center justify-center flex-1 ">
            <div className="flex space-x-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link, index) => (
                <div key={link.name}>
                  <Link
                    href={link.path}
                    className="relative text-gray-600 hover:text-[#E46F49] px-3 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#E46F49] after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contribute button */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={() => setIsDonationModalOpen(true)}
              className="ml-8 bg-[#4996e4] text-white px-6 py-2 rounded hover:bg-[#4996e4]/90 transition-all duration-300 hover:shadow-md cursor-pointer font-bold"
            >
              Contribute Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    variants={iconVariants}
                    initial="exit"
                    animate="close"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <XIcon className="h-6 w-6 text-[#4996e4]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    variants={iconVariants}
                    initial="exit"
                    animate="menu"
                    exit="exit"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <MenuIcon className="h-6 w-6 text-[#4996e4]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white shadow-lg overflow-hidden border-t border-gray-100"
            layout
          >
            <motion.div className="px-4 pt-4 pb-6 space-y-3" layout>
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants} layout>
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-[#006b5e] block px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} layout className="pt-2">
                <Button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDonationModalOpen(true);
                  }}
                  className="w-full bg-[#4996e4] hover:bg-[#4996e4]/90 text-white py-3 rounded-lg shadow-sm"
                >
                  Contribute Now
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
