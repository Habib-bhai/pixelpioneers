"use client"; // Mark as client component for animations and Image

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Define the type for a success story (adjust based on your Sanity schema)
interface SuccessStory {

  title: string; // e.g., "Optimizing IT Infrastructure For Cost Efficiency"
  imageUrl: string; // Image for the card (right side, oval-shaped)
  link?: string; // Optional link for "LEARN MORE"
  metrics: string
}

// Animation variants for the card and its children
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
};

// SuccessStories component
const SuccessStories: React.FC<{ stories: SuccessStory[] }> = ({ stories }) => {
  return (
    <section className="relative min-h-screen py-12 overflow-y-auto">
      {/* Fixed Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ y: 0 }}
        whileInView={{ y: "-10%" }} // Slight upward shift on scroll for parallax
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* bg image */}
        <Image
          src="/images/sci-fi.jpg"
          alt="Tech-inspired background for success stories"
          fill // Fills the parent container, maintaining aspect ratio
          style={{ objectFit: "cover" }} // Ensures the image covers the section
          priority // Loads immediately (optional, for above-the-fold content)
          quality={75} // Adjust quality for performance (optional)
          className="fixed inset-0" // Ensures the image stays fixed
        />
      </motion.div>

      {/* Scrollable Content with Cards */}
      <div className="relative max-w-4xl mx-auto px-4 z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Success Stories
        </h2>
        <div className="space-y-8">
          {stories.map((story, index) => (
            <Link href={story.link!} target="_blank" key={index}>
              <motion.div
                className="bg-black p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                {/* Text Section (Left) */}
                <motion.div
                  variants={textVariants}
                  className="md:w-1/2 pr-4 space-y-2"
                >
                  <p className="text-green-500 text-sm font-medium uppercase tracking-wide mb-2">
                    {story.metrics}
                  </p>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {story.title}
                  </h3>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#00FF00",
                      color: "#000000",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-700 text-white px-4 py-2 rounded flex items-center space-x-2 hover:text-black hover:bg-green-500 transition-colors duration-300 mt-4"
                  >
                    <span className="text-sm font-semibold">LEARN MORE</span>
                    <span className="text-xl">↑</span>
                  </motion.button>
                </motion.div>

                {/* Image Section (Right, Oval-Shaped) */}
                <motion.div
                  variants={imageVariants}
                  className="md:w-1/2 mt-4 md:mt-0 flex justify-end"
                >
                  <Image
                    src={story.imageUrl}
                    alt={story.title}
                    width={400} // Adjust based on your image dimensions
                    height={240} // Adjust based on your image dimensions
                    className="w-80 h-48 object-cover  border border-gray-600"
                  />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};


export default SuccessStories;