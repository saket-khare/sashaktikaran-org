"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Campaigns", path: "/campaigns" },
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
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand name */}
          <div
            className="flex items-center"
            // initial={{ opacity: 0, x: -20 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="flex-shrink-0 flex items-center space-x-2"
            >
              {/* Logo placeholder - replace src with your logo */}
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <span className="text-xl font-bold text-gray-800">
                Sashaktikaran
              </span>
            </Link>
          </div>

          {/* Desktop menu - centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navLinks.map((link, index) => (
                <div
                  key={link.name}
                  //   initial={{ opacity: 0, y: -20 }}
                  //   animate={{ opacity: 1, y: 0 }}
                  //   transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contribute button */}
          <div
            className="hidden md:flex items-center"
            // initial={{ opacity: 0, x: 20 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5 }}
          >
            <Link
              href="/contribute"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              Contribute Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative"
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
                    <XIcon className="h-6 w-6" />
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
                    <MenuIcon className="h-6 w-6" />
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
            className="md:hidden bg-white shadow-lg overflow-hidden"
            layout
          >
            <motion.div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" layout>
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants} layout>
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} layout>
                <Link href="/contribute">
                  <Button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                  >
                    Contribute Now
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
