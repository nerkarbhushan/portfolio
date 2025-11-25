"use client";

import { useEffect, useRef } from "react";
import SectionHead from "./SectionHead";
import TextHighlight from "./TextHighlight";
import { motion, useAnimation, useInView } from "framer-motion";

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  }, [isInView, animationControl]);

  return (
    <section
      id="certifications"
      className="text-white scroll-mt-[80px] min-h-[40vh]"
    >
      <SectionHead>Certifications</SectionHead>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: "100%" },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animationControl}
        transition={{
          duration: 0.5,
          x: { type: "spring", bounce: 0.5 },
        }}
        className="space-y-6 md:text-[1.35rem] text-justify"
      >
        <div>
          <TextHighlight>Java Full Stack Developer</TextHighlight> <br />
          Full-Stack Development training focusing on Java technologies,
          covering both frontend and backend concepts for scalable application
          development.
        </div>

        <div>
          <TextHighlight>MERN Stack Developer</TextHighlight> <br />
          Completed a comprehensive course in MERN Stack technologies including
          MongoDB, Express.js, React.js, and Node.js to build end-to-end web
          applications.
        </div>

        <div>
          <TextHighlight>Frontend Web Development</TextHighlight> <br />
          Training in frontend development with a focus on HTML5, CSS,
          JavaScript, and React.js to create responsive and interactive user
          interfaces.
        </div>

        <div>
          <TextHighlight>GitLab CI/CD – Udemy</TextHighlight> <br />
          Hands-on course covering GitLab pipelines, runners, stages, jobs, YAML
          configuration, environment variables, artifact handling, and complete
          end-to-end CI/CD automation workflows.
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
