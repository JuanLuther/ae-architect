"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-playfair font-bold">
            AE Architect
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`nav-link relative py-2 ${
                isActive("/")
                  ? "text-[#00B894] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00B894]"
                  : "text-gray-600 hover:text-[#00B894]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`nav-link relative py-2 ${
                isActive("/about")
                  ? "text-[#00B894] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00B894]"
                  : "text-gray-600 hover:text-[#00B894]"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`nav-link relative py-2 ${
                isActive("/services")
                  ? "text-[#00B894] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00B894]"
                  : "text-gray-600 hover:text-[#00B894]"
              }`}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={`nav-link relative py-2 ${
                isActive("/projects")
                  ? "text-[#00B894] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00B894]"
                  : "text-gray-600 hover:text-[#00B894]"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`nav-link relative py-2 ${
                isActive("/contact")
                  ? "text-[#00B894] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#00B894]"
                  : "text-gray-600 hover:text-[#00B894]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/")
                    ? "text-[#00B894] bg-[#00B894]/10 font-semibold border-l-4 border-[#00B894]"
                    : "text-gray-600 hover:text-[#00B894] hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/about")
                    ? "text-[#00B894] bg-[#00B894]/10 font-semibold border-l-4 border-[#00B894]"
                    : "text-gray-600 hover:text-[#00B894] hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/services")
                    ? "text-[#00B894] bg-[#00B894]/10 font-semibold border-l-4 border-[#00B894]"
                    : "text-gray-600 hover:text-[#00B894] hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/projects")
                    ? "text-[#00B894] bg-[#00B894]/10 font-semibold border-l-4 border-[#00B894]"
                    : "text-gray-600 hover:text-[#00B894] hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/contact")
                    ? "text-[#00B894] bg-[#00B894]/10 font-semibold border-l-4 border-[#00B894]"
                    : "text-gray-600 hover:text-[#00B894] hover:bg-gray-50"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
