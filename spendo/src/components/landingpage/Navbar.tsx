"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons
import Link from "next/link";
import { cn } from "@/lib/utils"; // Utility for class merging (ShadCN)
import { Button } from "@/components/ui/button"; // ShadCN Button

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle Navbar Background Change on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu Toggle for Mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 font-custom2 ",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-black font-custom">
          Spendo
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {["Features", "Pricing", "Security", "Support"].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="relative group"
            >
              <Link href={`/${item.toLowerCase()}`} className="text-gray-700  transition">
                {item}
              </Link>
              <motion.div
                className="absolute left-0 bottom-0 h-[2px] bg-black w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Link href='./auth/login'>Log in</Link>
            </Button>
            <Button size="sm" className="bg-black text-white hover:bg-primary/90">
            <Link href='./auth/register'>Sign up</Link>
            </Button>
          </div>


        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg md:hidden flex flex-col items-center gap-6 py-10"
      >
        {["Features", "Pricing", "Security", "Support"].map((item, index) => (
          <Link
            key={index}
            href={`/${item.toLowerCase()}`}
            className="text-lg text-gray-800 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
        <div className="pt-4 flex flex-col space-y-3">
            <Button variant="outline" className="w-full justify-center">
                  Log in
            </Button>
            <Button className="w-full justify-center">Sign up</Button>
            </div>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;
