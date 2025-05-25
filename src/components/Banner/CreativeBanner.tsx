"use client"; // Mark as client component for animations

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GroundbreakingBanner() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Headline parts with color styling
  const parts = [
    { text: "#WE ARE RELIABLE", color: "text-green-500" },
    { text: "IT Agency Services And Solutions Company ", color: "text-white" },
  ];
  const headlineChars = parts.flatMap((part) =>
    part.text.split("").map((char) => ({ char, color: part.color }))
  );
  const hashtags = "# innovative # Performant # Customer Caring # Professionals".split(" ");

  // Starfield background
  const stars = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-white opacity-10 rounded-full"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `move ${5 + Math.random() * 10}s linear infinite`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  ));

  return (
    <div className="relative bg-black text-white p-8 overflow-hidden min-h-screen flex items-center">
      {/* Starfield Background */}
      {stars}

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left Section: Animated Text */}
        <div className="md:w-1/2 space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {isMounted &&
              headlineChars.map(({ char, color }, index) => (
                <motion.span
                  key={index}
                  className={`${color} inline-block`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3, ease: "easeOut" }}
                >
                  {char}
                </motion.span>
              ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: headlineChars.length * 0.04,
                repeat: Infinity,
                duration: 0.75,
              }}
              className="inline-block"
            >
              <span className="cursor">|</span>
            </motion.span>
          </h1>
          <div className="flex flex-wrap gap-2">
            {isMounted &&
              hashtags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 2 + index * 0.2,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {tag}
                </motion.span>
              ))}
          </div>
        </div>

        {/* Right Section: Animated Image */}
        <div className="md:w-1/2 relative mt-8 md:mt-0 z-10">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
            <motion.ellipse
              cx="100"
              cy="50"
              rx="90"
              ry="45"
              stroke="white"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0,opacity: 0 }}
              animate={{ pathLength: 1,opacity: 1 }}
              transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
          <motion.img
            src="/images/meeting.jpg" // Replace with your image path
            alt="Professional Meeting at IT Agency"
            className="w-full h-auto rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.5, duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }} // Interactive zoom
          />
        </div>
      </div>
    </div>
  );
}