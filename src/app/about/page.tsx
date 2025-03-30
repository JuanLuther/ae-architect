import React from 'react';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';

export default function About() {
  const projects = [
    {
      title: "Residential Design",
      description: "Creating comfortable and inspiring living spaces that reflect our clients' unique lifestyles.",
      image: "/images/about/residential.jpg",
      address: "Address 1: 123 Modern Living Ave, Residential District"
    },
    {
      title: "Commercial Projects",
      description: "Developing innovative workspaces that enhance productivity and corporate identity.",
      image: "/images/about/commercial.jpg",
      address: "Address 2: 456 Business Plaza, Commercial Zone"
    },
    {
      title: "Sustainable Architecture",
      description: "Implementing eco-friendly solutions for a better tomorrow.",
      image: "/images/about/sustainable.jpg",
      address: "Address 3: 789 Green Building Rd, Eco Park"
    },
    {
      title: "Urban Planning",
      description: "Shaping communities through thoughtful and sustainable urban design.",
      image: "/images/about/urban.jpg",
      address: "Address 4: 101 City Center Blvd, Metropolitan Area"
    }
  ];

  return (
    <main className="min-h-screen">
      <HeroSection
        title="About Us"
        image="/images/about/hero.jpg"
        subtitle="Creating innovative architectural solutions that shape the future"
      />
      
      <Container>
        <Section
          title="Our Vision"
        >
          <p className="text-lg text-gray-600">
            We are dedicated to creating innovative architectural solutions that harmoniously blend form and function.
            Our commitment to excellence drives us to push boundaries and redefine spaces.
          </p>
        </Section>

        <Section title="Our Expertise">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                address={project.address}
              />
            ))}
          </div>
        </Section>

        <Section>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/images/about/contact.jpg"
              alt="Contact Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-lg mb-6">
                Interested in working with us? Get in touch to discuss your project.
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Contact Now
              </button>
            </div>
          </div>
        </Section>
      </Container>
    </main>
  );
}
