"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Modern Residence",
    location: "Guiwan, Zamboanga City",
    image: "/images/projects/residential/residential1.jpg",
    category: "Residential",
    year: "2023",
    description:
      "A stunning modern residence that seamlessly integrates indoor and outdoor living spaces.",
    features: [
      "Open floor plan",
      "Sustainable materials",
      "Smart home integration",
    ],
  },
  {
    id: 2,
    title: "Corporate Headquarters",
    location: "Ipil, Zamboanga Sibugay",
    image: "/images/projects/commercial/commercial1.jpg",
    category: "Commercial",
    year: "2023",
    description:
      "A state-of-the-art corporate headquarters designed for collaboration and innovation.",
    features: ["LEED certified", "Flexible workspaces", "Green roof"],
  },
  {
    id: 3,
    title: "Urban Loft",
    location: "Pagadian City",
    image: "/images/projects/residential/residential2.jpg",
    category: "Residential",
    year: "2022",
    description:
      "A converted industrial space transformed into a luxurious urban loft.",
    features: [
      "High ceilings",
      "Industrial elements",
      "Custom storage solutions",
    ],
  },
  {
    id: 4,
    title: "Cultural Center",
    location: "Ayala, Zamboanga City",
    image: "/images/projects/urban/urban1.jpg",
    category: "Cultural",
    year: "2022",
    description:
      "A modern cultural center that celebrates art and community engagement.",
    features: ["Performance spaces", "Art galleries", "Community areas"],
  },
];

const categories = ["All", "Residential", "Commercial", "Cultural"];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F5F6FA]">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-playfair mb-6 text-center"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 text-center max-w-2xl mx-auto"
          >
            Explore our portfolio of innovative architectural projects that
            showcase our commitment to excellence and sustainability.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-[#00B894]"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-playfair">{project.title}</h3>
                    <span className="text-sm text-gray-500">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.location}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-block text-[#00B894] hover:text-[#00A187] transition-colors duration-300"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
