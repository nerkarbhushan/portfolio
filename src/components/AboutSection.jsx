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
            <TextHighlight> Software Developer</TextHighlight> with expertise in
            building and maintaining high-performance web applications. I am
            proficient in{" "}
            <TextHighlight>
              HTML, CSS, JavaScript, React.js, Node.js, Express.js, MySQL,
            </TextHighlight>{" "}
            and <TextHighlight>MongoDB</TextHighlight> focusing on creating{" "}
            <TextHighlight>scalable, reliable,</TextHighlight> and{" "}
            <TextHighlight>maintainable</TextHighlight> software solutions. My
            passion for <TextHighlight>continuous learning</TextHighlight>{" "}
            ensures I stay updated on the{" "}
            <TextHighlight>latest technologies</TextHighlight> and contribute to
            innovative projects that enhance business growth.
          </div>
          <div>
            When I&apos;m not coding, I love{" "}
            <TextHighlight>Surfing YouTube</TextHighlight>, always looking for
            content on learning new technologies like Gen AI, and system
            customization. I also enjoy solving{" "}
            <TextHighlight> problems, debugging them</TextHighlight> and
            sometimes tackling <TextHighlight>leetcode problems</TextHighlight>.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
