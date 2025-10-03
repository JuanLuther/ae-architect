import { motion } from "framer-motion";
import React from "react";

export const CTA1 = () => {
  return (
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
          Let&apos;s discuss how we can help bring your architectural vision to
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
  );
};
