import React from "react";
import Section from "../Section";
import Image from "next/image";

export const CTA2 = () => {
  return (
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
          <a
            href="/contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Now
          </a>
        </div>
      </div>
    </Section>
  );
};
