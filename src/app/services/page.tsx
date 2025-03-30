"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Architectural Design",
    description:
      "Comprehensive architectural design services from concept to construction documents. We create innovative, sustainable, and functional spaces that meet your vision and requirements.",
    features: [
      "Conceptual design and planning",
      "3D visualization and rendering",
      "Sustainable design solutions",
      "Building code compliance",
      "Construction documentation",
    ],
    image: "/service1.jpg",
  },
  {
    id: 2,
    title: "Interior Design",
    description:
      "Transform your interior spaces with our expert interior design services. We focus on creating harmonious, functional, and aesthetically pleasing environments.",
    features: [
      "Space planning and layout",
      "Material and finish selection",
      "Custom furniture design",
      "Lighting design",
      "Color scheme development",
    ],
    image: "/service2.jpg",
  },
  {
    id: 3,
    title: "Project Management",
    description:
      "Professional project management services to ensure your project stays on track, within budget, and meets quality standards.",
    features: [
      "Timeline management",
      "Budget control",
      "Contractor coordination",
      "Quality assurance",
      "Risk management",
    ],
    image: "/service3.jpg",
  },
  {
    id: 4,
    title: "Renovation & Restoration",
    description:
      "Expert renovation and restoration services to breathe new life into existing structures while preserving their historical significance.",
    features: [
      "Historical preservation",
      "Structural assessment",
      "Modernization upgrades",
      "Energy efficiency improvements",
      "Heritage compliance",
    ],
    image: "/service4.jpg",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-hero.jpg"
            alt="Our Services"
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl"
          >
            Comprehensive architectural and design services to bring your vision
            to life
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-playfair mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-[#00B894] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-playfair mb-8"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how we can help bring your architectural vision to
            life. Contact us today for a consultation.
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block bg-[#00B894] text-white px-8 py-3 rounded-none hover:bg-[#00A187] transition-colors duration-300"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>
    </main>
  );
}
