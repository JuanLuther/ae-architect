"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const projects = [
  {
    id: 1,
    title: "Modern Residence",
    location: "Beverly Hills, CA",
    image: "/project1.jpg",
    category: "Residential",
    year: "2023",
    description:
      "A stunning modern residence that seamlessly integrates indoor and outdoor living spaces.",
    features: [
      "Open floor plan",
      "Sustainable materials",
      "Smart home integration",
    ],
    longDescription: `This modern residence in Beverly Hills represents the perfect blend of contemporary design and sustainable living. The project features expansive glass walls that blur the boundaries between indoor and outdoor spaces, creating a seamless connection with nature.

    The home's design emphasizes natural light and ventilation, with carefully positioned windows and skylights that maximize daylight penetration while maintaining privacy. The open floor plan creates a sense of flow and connectivity between living spaces, while custom-built storage solutions ensure a clutter-free environment.

    Sustainable features include solar panels, rainwater harvesting, and energy-efficient systems throughout the home. The landscaping incorporates native plants and drought-resistant species, creating a beautiful yet water-efficient garden.`,
    gallery: [
      "/project1.jpg",
      "/project1-detail1.jpg",
      "/project1-detail2.jpg",
    ],
  },
  // ... other projects
];

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-playfair mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl"
          >
            {project.location} • {project.year}
          </motion.p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-gray-600 whitespace-pre-line">
                  {project.longDescription}
                </p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-playfair mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500">Category</p>
                  <p className="font-medium">{project.category}</p>
                </div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium">{project.location}</p>
                </div>
                <div>
                  <p className="text-gray-500">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>
              </div>

              <h3 className="text-xl font-playfair mt-8 mb-4">Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-[#00B894] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/projects"
                className="inline-block mt-8 text-[#00B894] hover:text-[#00A187] transition-colors duration-300"
              >
                ← Back to Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-playfair mb-12 text-center"
          >
            Project Gallery
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {project.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative h-[300px] rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
