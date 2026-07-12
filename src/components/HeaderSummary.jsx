"use client";

import { headerSummaryStats } from "@/config/headerConfig";
import { motion, useMotionValue, animate, useTransform } from "motion/react";
import { useEffect } from "react";

const HeaderSummaryItem = ({ value, text }) => {
  const count = useMotionValue(0);
  const number = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2 });
    return () => controls.stop();
  }, [count, value]);

  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
        <motion.span>{number}</motion.span>+
      </div>
      <div className="text-xs md:text-sm text-gray-300 mt-1">{text}</div>
    </div>
  );
};

const HeaderSummary = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        scale: { type: "spring", bounce: 0.4 },
      }}
      className="container mx-auto px-4 py-6 rounded-lg 
                 shadow-md shadow-gray-700 border border-gray-600 bg-[#0f0f0f]/60"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-white">
        {headerSummaryStats.map((item, index) => (
          <HeaderSummaryItem key={index} value={item.number} text={item.text} />
        ))}
      </div>
    </motion.div>
  );
};

export default HeaderSummary;
