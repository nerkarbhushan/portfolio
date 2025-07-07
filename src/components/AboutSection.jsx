"use client";

import { useEffect, useRef } from "react";
import PcModelCanvas from "./canvas/PcModelCanvas";
import SectionHead from "./SectionHead";
import TextHighlight from "./TextHighlight";
import { motion, useAnimation, useInView } from "motion/react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animationControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
    }
  }, [isInView, animationControl]);

  return (
    <section id="about" className="text-white scroll-mt-[80px] min-h-[60vh]">
      <SectionHead>About Me</SectionHead>
      <div className="flex flex-col-reverse justify-center gap-6 lg:flex-row">
        <div className="h-[30vh] lg:h-auto lg:w-[40%]">
          <PcModelCanvas />
        </div>
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
            x: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="lg:w-[60%] md:text-[1.35rem] text-justify"
        >
          <div>
            I am a results-driven{" "}
            <TextHighlight>MERN Stack | Fullstack Developer</TextHighlight> with
            3+ years of experience in building and deploying high-performance
            web applications. Proficient in
            <TextHighlight>
              {" "}
              React.js, Node.js, Express.js, MongoDB, MySQL
            </TextHighlight>
            , and skilled in crafting
            <TextHighlight>
              {" "}
              scalable, secure, and maintainable
            </TextHighlight>{" "}
            solutions.
          </div>

          <div>
            Experienced with{" "}
            <TextHighlight>RESTful & GraphQL APIs</TextHighlight>, real-time
            apps using
            <TextHighlight> Socket.io</TextHighlight>, and secure auth via{" "}
            <TextHighlight> JWT & OAuth</TextHighlight>. I've worked with
            <TextHighlight>
              {" "}
              microservices, Redis, Docker, Kubernetes, AWS
            </TextHighlight>
            , and CI/CD using
            <TextHighlight> GitHub Actions & Jenkins</TextHighlight>.
          </div>

          <div>
            Passionate about{" "}
            <TextHighlight> problem-solving, debugging</TextHighlight>, and
            exploring
            <TextHighlight> emerging tech</TextHighlight> like{" "}
            <TextHighlight> Generative AI</TextHighlight>. When I'm not coding,
            I enjoy
            <TextHighlight> surfing YouTube</TextHighlight> for tech content and
            solving
            <TextHighlight> LeetCode problems</TextHighlight>.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
