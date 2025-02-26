import { useEffect, useRef } from "react";
import Image from "next/image";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const ExperienceContent = ({
  company,
  logo,
  designation,
  tenure,
  location,
  isCurrent,
  description,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  }, [isInView, animationControl]);

  return (
    <motion.li
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: "50%" },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={animationControl}
      transition={{
        duration: 0.25,
        y: { type: "spring", bounce: 0.25 },
      }}
      className="relative flex flex-col md:flex-row gap-4 items-start md:items-center bg-gradient-to-b from-slate-900 border-b-4 border-slate-200 p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto"
    >
      {/* Logo */}
      <div className="relative flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-full ring-4 md:ring-8 ring-gray-900 bg-blue-900 flex items-center justify-center overflow-hidden">
        <Image
          height={100}
          width={100}
          src={`/assets/${logo}.webp`}
          alt={`${logo}-logo`}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2 text-center md:text-left">
        <h3 className="text-lg md:text-xl font-semibold text-white flex items-center justify-center md:justify-start">
          {designation}
          {isCurrent && (
            <span className="ml-3 px-2.5 py-0.5 rounded bg-green-900 text-green-300 text-sm font-medium">
              Current
            </span>
          )}
        </h3>

        <span className="block text-sm md:text-md text-gray-300 font-normal">
          {company}
        </span>

        <time className="block text-xs md:text-sm text-blue-500 font-light">
          {tenure} | {location}
        </time>

        <ul className="list-disc text-xs md:text-base text-gray-400 ml-5 space-y-2">
          {description.map((data, i) => (
            <li key={i}>{data}</li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
};

export default ExperienceContent;
